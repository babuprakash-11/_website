import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";

interface Props {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ theme, toggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Code2
            className="w-6 h-6 transition-colors duration-300"
            style={{ color: "hsl(220,90%,60%)" }}
          />
          <span className="font-orbitron font-bold text-lg gradient-text">
            ABPR
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-all duration-200 relative group ${
                location === l.href
                  ? "neon-text-blue"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${
                  location === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
                style={{ background: "hsl(220,90%,60%)" }}
              />
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 hover:bg-card"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border border-border"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium border-l-2 transition-all duration-200 ${
                location === l.href
                  ? "border-primary text-primary bg-primary/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
