import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, Loader2 } from "lucide-react";
import { useSubmitContactForm } from "@workspace/api-client-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [success, setSuccess] = useState(false);

  const { mutate: submitForm, isPending, error } = useSubmitContactForm({
    mutation: {
      onSuccess: () => {
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      },
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm({ data: form });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-medium mb-4 border"
            style={{
              background: "rgba(96,165,250,0.1)",
              borderColor: "rgba(96,165,250,0.3)",
              color: "hsl(220,90%,65%)",
            }}
          >
            Let's Connect
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black gradient-text mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether you want to collaborate, discuss biology and tech, or just say hello —
            I'd love to hear from you.
          </p>
        </div>

        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div>
            <h2 className="font-orbitron text-xl font-bold mb-6 text-foreground">
              Let's <span className="gradient-text">Talk</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to interesting conversations about bioinformatics, software
              development, travel adventures, or potential collaborations. Don't hesitate to
              reach out!
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "abprakashreddy@gmail.com",
                  href: "mailto:abprakashreddy@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Hyderabad, Telangana, India",
                  href: null,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/abprakashreddy",
                  href: "https://linkedin.com",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/abprakashreddy",
                  href: "https://github.com",
                },
              ].map((item) => (
                <div key={item.label} className="neon-card rounded-xl p-4 flex items-center gap-4">
                  <div
                    className="p-2.5 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(96,165,250,0.1)" }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: "hsl(220,90%,65%)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="neon-card rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond within <span className="text-primary font-medium">24-48 hours</span>.
                For urgent matters, feel free to reach out on LinkedIn.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {success ? (
              <div className="neon-card rounded-2xl p-10 text-center">
                <CheckCircle
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "hsl(150,70%,50%)" }}
                />
                <h3 className="font-orbitron font-bold text-xl gradient-text mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="neon-card rounded-2xl p-6 space-y-4">
                <h2 className="font-orbitron font-bold text-lg gradient-text mb-2">
                  Send Message
                </h2>

                {error && (
                  <div
                    className="px-4 py-3 rounded-xl text-sm border"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      borderColor: "rgba(239,68,68,0.3)",
                      color: "hsl(0,84%,65%)",
                    }}
                  >
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Subject *</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me what's on your mind..."
                    rows={6}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, hsl(220,90%,60%), hsl(270,80%,65%))",
                    boxShadow: "0 0 20px rgba(96,165,250,0.2)",
                  }}
                >
                  {isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
