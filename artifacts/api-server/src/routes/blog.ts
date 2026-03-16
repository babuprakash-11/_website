import { Router, type IRouter } from "express";
import { db, blogPostsTable } from "@workspace/db";
import { CreateBlogPostBody, GetBlogPostParams } from "@workspace/api-zod";
import { eq, desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/blog", async (_req, res) => {
  try {
    const posts = await db
      .select()
      .from(blogPostsTable)
      .orderBy(desc(blogPostsTable.createdAt));
    res.json(posts);
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const { id } = GetBlogPostParams.parse({ id: req.params.id });
    const [post] = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.id, id));
    if (!post) {
      res.status(404).json({ error: "Blog post not found" });
      return;
    }
    res.json(post);
  } catch (err) {
    console.error("Error fetching blog post:", err);
    res.status(500).json({ error: "Failed to fetch blog post" });
  }
});

router.post("/blog", async (req, res) => {
  try {
    const body = CreateBlogPostBody.parse(req.body);
    const [post] = await db
      .insert(blogPostsTable)
      .values(body)
      .returning();
    res.status(201).json(post);
  } catch (err) {
    console.error("Error creating blog post:", err);
    res.status(400).json({ error: "Invalid blog post data" });
  }
});

export default router;
