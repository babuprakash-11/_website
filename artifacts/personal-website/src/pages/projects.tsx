import { ExternalLink, Github, Cpu, Globe, FlaskConical, BarChart3, Leaf, Users } from "lucide-react";

const projects = [
  {
    title: "BioScan App",
    desc: "A mobile app concept that uses ML to identify plant diseases from leaf images. Built with Python, TensorFlow, and React Native.",
    tags: ["Machine Learning", "Biology", "React Native", "Python"],
    icon: FlaskConical,
    color: "hsl(150,70%,50%)",
    status: "Concept",
    github: "#",
    demo: "#",
  },
  {
    title: "TravelDiary",
    desc: "A full-stack web app to log travel experiences with photo uploads, map integration, and location tagging.",
    tags: ["React", "Node.js", "MongoDB", "Maps API"],
    icon: Globe,
    color: "hsl(220,90%,60%)",
    status: "In Progress",
    github: "#",
    demo: "#",
  },
  {
    title: "MedInfo Bot",
    desc: "An AI-powered chatbot that provides accurate information about medications, side effects, and drug interactions.",
    tags: ["Python", "NLP", "FastAPI", "OpenAI"],
    icon: Cpu,
    color: "hsl(270,80%,65%)",
    status: "Complete",
    github: "#",
    demo: "#",
  },
  {
    title: "AlgoVisualizer",
    desc: "Interactive browser-based tool to visualize sorting algorithms (Bubble, Quick, Merge) and graph traversal algorithms.",
    tags: ["JavaScript", "Canvas API", "Algorithms", "CSS Animations"],
    icon: BarChart3,
    color: "hsl(40,90%,55%)",
    status: "Complete",
    github: "#",
    demo: "#",
  },
  {
    title: "EcoTracker",
    desc: "Mobile-friendly app to track your personal carbon footprint across travel, food, and energy. Suggests eco-friendly alternatives.",
    tags: ["React", "TypeScript", "Charts", "REST API"],
    icon: Leaf,
    color: "hsl(120,60%,50%)",
    status: "In Progress",
    github: "#",
    demo: "#",
  },
  {
    title: "StudySync",
    desc: "A collaborative study platform for BCA students to share notes, create study groups, and schedule sessions.",
    tags: ["Next.js", "PostgreSQL", "WebSockets", "Auth"],
    icon: Users,
    color: "hsl(340,75%,60%)",
    status: "Concept",
    github: "#",
    demo: "#",
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
      <div className="max-w-6xl mx-auto">
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
            A collection of tech and study projects blending biology, software development,
            and creative problem-solving.
          </p>
        </div>

        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="neon-card rounded-2xl p-6 flex flex-col group"
            >
              {/* Icon + Status */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}35`,
                  }}
                >
                  <project.icon
                    className="w-6 h-6"
                    style={{ color: project.color }}
                  />
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full border"
                  style={{
                    color: statusColors[project.status],
                    borderColor: `${statusColors[project.status]}40`,
                    background: `${statusColors[project.status]}10`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="font-orbitron font-bold text-lg mb-2 text-foreground group-hover:gradient-text transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md border border-border/50 text-muted-foreground bg-muted/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "hsl(220,90%,60%)" }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            More projects coming soon. Check back regularly!
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
