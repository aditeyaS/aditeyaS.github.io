import { useEffect, useRef } from "react";
import { useTheme } from "../providers/theme";

export const accentList = [
  { accent: "purple", color: "#8338EC" },
  { accent: "yellow", color: "#FFBE0B" },
  { accent: "orange", color: "#FB5607" },
  { accent: "pink", color: "#FF006E" },
  { accent: "blue", color: "#3A86FF" },
  { accent: "green", color: "#2ECC71" },
];

const PARTICLE_COUNT = 250;
const MAX_RADIUS = 10;
const PARTICLE_COLORS = accentList.map((a) => a.color);

type Particle = {
  x: number;
  y: number;
  radius: number;
  color: string;
  angle: number;
  speed: number;
};

export default function Particle() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const themeRef = useRef<string>("light");

  const particles = useRef<Particle[]>([]);
  let animationId: number;
  let w: number, h: number;

  const initParticles = () => {
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * MAX_RADIUS + 1,
      color:
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      angle: Math.random() * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.02,
    }));
  };

  const drawParticles = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    particles.current.forEach((particle) => {
      particle.angle += particle.speed;
      const offsetX = Math.cos(particle.angle) * 20;
      const offsetY = Math.sin(particle.angle) * 20;
      ctx.beginPath();
      ctx.arc(
        particle.x + offsetX,
        particle.y + offsetY,
        particle.radius,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    });
  };

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = themeRef.current === "light" ? "white" : "black";
    ctx.fillRect(0, 0, w, h);
    drawParticles();
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
      initParticles();
    };
    initParticles();
    render();
  };

  useEffect(() => {
    initCanvas();
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  return <canvas className="fixed inset-0 z-0" ref={canvasRef} />;
}
