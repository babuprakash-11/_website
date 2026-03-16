import { Router, type IRouter } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import { SubmitContactFormBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  try {
    const body = SubmitContactFormBody.parse(req.body);
    const [message] = await db
      .insert(contactMessagesTable)
      .values(body)
      .returning();
    res.status(201).json(message);
  } catch (err) {
    console.error("Error submitting contact form:", err);
    res.status(400).json({ error: "Invalid contact form data" });
  }
});

export default router;
