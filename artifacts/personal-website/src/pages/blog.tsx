import { useState } from "react";
import { Link } from "wouter";
import { Calendar, Tag, Plus, X, ArrowRight, Loader2 } from "lucide-react";
import { useGetBlogPosts, useCreateBlogPost } from "@workspace/api-client-react";

const CATEGORIES = ["Technology", "Biology", "Travel", "Life"];

const categoryColors: Record<string, string> = {
  Technology: "hsl(220,90%,60%)",
  Biology: "hsl(150,70%,50%)",
  Travel: "hsl(270,80%,65%)",
  Life: "hsl(40,90%,55%)",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", content: "", excerpt: "", category: "Technology" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { data: posts = [], isLoading, refetch } = useGetBlogPosts();
  const { mutate: createPost, isPending } = useCreateBlogPost({
    mutation: {
      onSuccess: () => {
        setForm({ title: "", content: "", excerpt: "", category: "Technology" });
        setShowForm(false);
        refetch();
      },
    },
  });

  const filtered = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim() || !form.excerpt.trim()) return;
    createPost({ data: form });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-medium mb-4 border"
            style={{
              background: "rgba(96,165,250,0.1)",
              borderColor: "rgba(96,165,250,0.3)",
              color: "hsl(220,90%,65%)",
            }}
          >
            Thoughts & Ideas
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black gradient-text mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Exploring biology, technology, travel, and the intersections between them.
          </p>
        </div>

        <div className="section-divider mb-10" />

        {/* Filter + Write button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
                !selectedCategory
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
                  selectedCategory === cat
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(220,90%,60%), hsl(270,80%,65%))",
            }}
          >
            {showForm ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            {showForm ? "Cancel" : "Write Post"}
          </button>
        </div>

        {/* Write Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="neon-card rounded-2xl p-6 mb-8"
          >
            <h2 className="font-orbitron font-bold text-lg gradient-text mb-5">
              New Blog Post
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Enter post title..."
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Excerpt *</label>
                <input
                  type="text"
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Short summary of your post..."
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Content *</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Write your post content here..."
                  rows={6}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, hsl(220,90%,60%), hsl(270,80%,65%))",
                }}
              >
                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {isPending ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </form>
        )}

        {/* Posts */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg mb-2">No posts yet</p>
            <p className="text-sm">Be the first to write something!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="neon-card rounded-2xl p-6 cursor-pointer"
                onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border"
                      style={{
                        color: categoryColors[post.category] || "hsl(220,90%,60%)",
                        borderColor: `${categoryColors[post.category] || "hsl(220,90%,60%)"}40`,
                        background: `${categoryColors[post.category] || "hsl(220,90%,60%)"}10`,
                      }}
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {post.category}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.createdAt)}
                  </span>
                </div>

                <h2 className="font-orbitron font-bold text-lg text-foreground mb-2 leading-snug">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>

                {expandedId === post.id && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-foreground text-sm leading-relaxed whitespace-pre-wrap">
                      {post.content}
                    </p>
                  </div>
                )}

                <button className="inline-flex items-center gap-1 text-xs font-medium mt-3 transition-colors"
                  style={{ color: "hsl(220,90%,60%)" }}
                >
                  {expandedId === post.id ? "Show less" : "Read more"}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
