import { GraduationCap, Heart, Globe, Code, FlaskConical, MapPin } from "lucide-react";

const skills = [
  { name: "Python", level: 78 },
  { name: "JavaScript / TypeScript", level: 72 },
  { name: "React.js", level: 68 },
  { name: "Biology / Bioinformatics", level: 82 },
  { name: "Database (SQL/NoSQL)", level: 65 },
  { name: "Machine Learning", level: 55 },
];

const timeline = [
  {
    year: "2025",
    title: "Started BCA",
    place: "Kristu Jayanti University, Bangalore",
    desc: "Began my journey in computer science at Kristu Jayanti University, learning programming fundamentals and software development.",
    icon: GraduationCap,
    color: "hsl(220,90%,60%)",
  },
  {
    year: "2023",
    title: "Discovered Bioinformatics",
    place: "Self-taught & Online Courses",
    desc: "Combined my passion for biology with programming skills to explore computational biology and genomics.",
    icon: FlaskConical,
    color: "hsl(150,70%,50%)",
  },
  {
    year: "2024",
    title: "First Solo Travel",
    place: "Coorg, Karnataka",
    desc: "Embarked on my first solo travel adventure, discovering the joy of independent exploration.",
    icon: MapPin,
    color: "hsl(270,80%,65%)",
  },
  {
    year: "2025",
    title: "Built First Full-Stack App",
    place: "Personal Project",
    desc: "Created my first complete web application combining React frontend with Node.js backend.",
    icon: Code,
    color: "hsl(40,90%,55%)",
  },
  {
    year: "2026",
    title: "Planning to Study Abroad",
    place: "MSc Bioinformatics (Goal)",
    desc: "Preparing to pursue a master's degree abroad in bioinformatics or computational biology.",
    icon: Globe,
    color: "hsl(340,75%,60%)",
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: "linear-gradient(to right, hsl(220,90%,60%), hsl(270,80%,65%))",
            boxShadow: "0 0 8px rgba(96,165,250,0.4)",
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
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
            About Me
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black gradient-text mb-4">
            My Story
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curious mind at the crossroads of biology, technology, and adventure.
          </p>
        </div>

        <div className="section-divider mb-16" />

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
              Hello, I'm <span className="gradient-text">Appireddy</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a BCA (Bachelor of Computer Applications) student with a deep fascination
                for biology and technology. I believe the future of medicine and life sciences
                will be written in code — and I want to be part of that revolution.
              </p>
              <p>
                Growing up surrounded by nature, I developed a love for biology and how
                living systems work. When I discovered programming, it felt like getting a
                superpower — suddenly I could build tools to analyze biological data,
                visualize complex systems, and automate research workflows.
              </p>
              <p>
                When I'm not coding or studying, you'll find me planning my next travel
                adventure. Travel has taught me more about the world, people, and myself
                than any textbook ever could.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Hyderabad, India", "BCA Student", "Bioinformatics", "Open Source"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    background: "rgba(96,165,250,0.08)",
                    borderColor: "rgba(96,165,250,0.25)",
                    color: "hsl(220,90%,65%)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { icon: Heart, label: "Interests", value: "Biology, Bioinformatics, AI in Medicine" },
              { icon: Code, label: "Currently Learning", value: "Rust, Machine Learning, CRISPR Tech" },
              { icon: Globe, label: "Goal", value: "Study abroad for MSc in Bioinformatics" },
              { icon: MapPin, label: "Dream Destination", value: "Europe (for studies & travel)" },
            ].map((item) => (
              <div key={item.label} className="neon-card rounded-xl p-4 flex items-start gap-4">
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ background: "rgba(96,165,250,0.1)" }}
                >
                  <item.icon className="w-4 h-4" style={{ color: "hsl(220,90%,65%)" }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mb-16" />

        {/* Skills */}
        <div className="mb-20">
          <h2 className="font-orbitron text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {skills.slice(0, 3).map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
            <div>
              {skills.slice(3).map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        </div>

        <div className="section-divider mb-16" />

        {/* Timeline */}
        <div>
          <h2 className="font-orbitron text-2xl font-bold mb-10 text-center">
            <span className="gradient-text">My Journey</span>
          </h2>

          <div className="relative">
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, hsl(220,90%,60%), hsl(270,80%,65%))" }}
            />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right pl-16 md:pl-0" : "md:pl-12 pl-16"
                  }`}
                >
                  <div className="neon-card rounded-xl p-5">
                    <div
                      className="font-orbitron text-xs font-bold mb-1"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <div className="text-xs text-muted-foreground mb-2">{item.place}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div
                  className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-4 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: item.color, boxShadow: `0 0 10px ${item.color}80` }}
                >
                  <item.icon className="w-3 h-3 text-white" />
                </div>

                {i % 2 === 0 ? <div className="flex-1 hidden md:block" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
