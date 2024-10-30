import { useEffect, useRef, useState } from "react";
import { useTheme } from "./theme-provider";
import { accentList } from "../sections/top-nav/theme-dialog";

const RIPPLE_COUNT = 50;
const MAX_RADIUS = 100;
const RIPPLE_COLORS = accentList.map((a) => a.color);

type Ripple = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  color: string;
};

export const RippleBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const themeRef = useRef<string>("light");
  const [isSafari, setIsSafari] = useState(false);

  const ripples = useRef<Ripple[]>([]);
  let animationId: number;
  let w: number, h: number;

  // Initialize ripples with random properties
  const initRipples = () => {
    ripples.current = Array.from({ length: RIPPLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 10, // Start with small radius
      opacity: 1, // Start fully opaque
      color: RIPPLE_COLORS[Math.floor(Math.random() * RIPPLE_COLORS.length)],
    }));
  };

  const drawRipples = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ripples.current.forEach((ripple) => {
      // Increase radius and decrease opacity
      ripple.radius += 0.5; // Controls the speed of expansion
      ripple.opacity -= 0.005; // Controls the fade-out speed

      // Reset ripple when it fades out or reaches max radius
      if (ripple.opacity <= 0 || ripple.radius > MAX_RADIUS) {
        ripple.x = Math.random() * w;
        ripple.y = Math.random() * h;
        ripple.radius = Math.random() * 10;
        ripple.opacity = 1;
      }

      // Draw ripple
      ctx.globalAlpha = ripple.opacity;
      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      ctx.strokeStyle = ripple.color;
      ctx.lineWidth = 2; // Thickness of ripple line
      ctx.stroke();
      ctx.closePath();
    });
  };

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    // Clear canvas and fill background
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = themeRef.current === "light" ? "white" : "black";
    ctx.fillRect(0, 0, w, h);

    // Draw ripples
    drawRipples();
    animationId = requestAnimationFrame(render);
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctxRef.current = ctx;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;

    window.onresize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      initRipples(); // Reinitialize ripples on resize
    };

    initRipples(); // Initialize ripples initially
    render();
  };

  useEffect(() => {
    initCanvas();
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <canvas
      className="fixed inset-0 z-0"
      ref={canvasRef}
      style={{
        ...(isSafari ? { filter: "blur(10px)" } : {}),
      }}
    />
  );
};
