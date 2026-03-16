import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ParticleCanvas } from "@/components/ParticleCanvas";

const ROLES = [
  "BCA Student",
  "Biology Enthusiast",
  "Tech Explorer",
  "Avid Traveller",
  "Future Bioinformatician",
];

function TypedText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="inline-block min-w-[2ch]">
      <span className="gradient-text font-bold">{displayed}</span>
      <span
        className="inline-block w-0.5 h-8 ml-1 align-middle"
        style={{
          backgroundColor: "hsl(220,90%,60%)",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden hero-gradient"
      >
        <ParticleCanvas />

        <div className="relative z-10 max-w-4xl mx-auto animate-slide-up">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-medium mb-6 border"
            style={{
              background: "rgba(96,165,250,0.1)",
              borderColor: "rgba(96,165,250,0.3)",
              color: "hsl(220,90%,65%)",
            }}
          >
            Welcome to my digital space
          </div>

          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            Appireddy Babu
            <br />
            <span className="gradient-text">Prakash Reddy</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            I am a <TypedText />
          </p>

          <p className="text-muted-foreground max-w-xl mx-auto mt-4 mb-10 text-base leading-relaxed">
            Passionate about the intersection of biology and technology. Building
            the future one line of code at a time, exploring the world one city
            at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <button
                className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, hsl(220,90%,60%), hsl(270,80%,65%))",
                  boxShadow: "0 0 20px rgba(96,165,250,0.3)",
                }}
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold border border-primary/40 text-foreground transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10">
                Get In Touch <Mail className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:abprakashreddy@email.com"
              className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <a
          href="#about-preview"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* Quick About Preview */}
      <section id="about-preview" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧬",
                title: "Biology",
                desc: "Fascinated by life sciences, genetics, and the molecular machinery that powers living organisms.",
                color: "hsl(150,70%,45%)",
              },
              {
                icon: "💻",
                title: "Technology",
                desc: "Building software solutions and exploring how code can solve real-world problems in science and society.",
                color: "hsl(220,90%,60%)",
              },
              {
                icon: "✈️",
                title: "Travel",
                desc: "Exploring new cultures, cuisines, and landscapes across India and beyond. Every journey teaches something new.",
                color: "hsl(270,80%,65%)",
              },
            ].map((item) => (
              <div key={item.title} className="neon-card rounded-2xl p-6 text-center group cursor-default">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="font-orbitron font-bold text-lg mb-3"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about">
              <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                Learn more about me <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
