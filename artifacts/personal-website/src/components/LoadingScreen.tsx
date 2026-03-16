import { useEffect, useState } from "react";

interface Props {
  onDone: () => void;
}

export function LoadingScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 300);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);

    return () => {
      clearInterval(dotInterval);
      clearInterval(progressInterval);
    };
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="relative mb-8">
        <div
          className="w-24 h-24 rounded-full border-2 border-transparent"
          style={{
            background: "linear-gradient(135deg, hsl(220,90%,60%), hsl(270,80%,65%))",
            padding: "2px",
          }}
        >
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full border-t-2 border-r-2"
              style={{
                borderColor: "hsl(220,90%,60%)",
                animation: "loading-spin 1s linear infinite",
              }}
            />
          </div>
        </div>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)",
            animation: "glow-pulse 1.5s ease-in-out infinite",
          }}
        />
      </div>

      <h1 className="font-orbitron text-2xl md:text-3xl font-bold gradient-text mb-2">
        ABPR
      </h1>
      <p className="text-muted-foreground text-sm mb-8">
        Initializing{dots}
      </p>

      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-150"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(to right, hsl(220,90%,60%), hsl(270,80%,65%))",
            boxShadow: "0 0 10px rgba(96,165,250,0.6)",
          }}
        />
      </div>
      <p className="text-muted-foreground text-xs mt-2">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  );
}
