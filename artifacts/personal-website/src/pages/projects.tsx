import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "A modern full-stack personal portfolio website built with React, Node.js, and PostgreSQL. Features a dark neon theme, animated particle background, blog system with database persistence, contact form, and light/dark mode toggle.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    color: "hsl(220,90%,60%)",
    status: "Complete",
    demo: "/",
  },
];

const statusColors: Record<string, string> = {
  Complete: "hsl(150,70%,50%)",
  "In Progress": "hsl(40,90%,55%)",
  Concept: "hsl(220,90%,60%)",
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
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
            My Work
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black gradient-text mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here is what I have built so far. More projects are on the way as I continue learning and growing.
          </p>
        </div>

        <div className="section-divider mb-12" />

        <div className="flex justify-center">
          {projects.map((project) => (
            <div
              key={project.title}
              className="neon-card rounded-2xl p-8 flex flex-col max-w-xl w-full"
            >
              {/* Icon + Status */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}35`,
                  }}
                >
                  <Globe className="w-7 h-7" style={{ color: project.color }} />
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{
                    color: statusColors[project.status],
                    borderColor: `${statusColors[project.status]}40`,
                    background: `${statusColors[project.status]}10`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md border border-border/50 text-muted-foreground bg-muted/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-auto">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors px-4 py-2 rounded-lg border"
                  style={{
                    color: "hsl(220,90%,60%)",
                    borderColor: "rgba(96,165,250,0.3)",
                    background: "rgba(96,165,250,0.06)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            More projects coming soon as I continue my BCA journey at Kristu Jayanti University.
          </p>
        </div>
      </div>
    </div>
  );
}
