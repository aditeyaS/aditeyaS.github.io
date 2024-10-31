import { useEffect, useRef } from "react";
import { accentList } from "../../sections/top-nav/theme-dialog";
import { useTheme } from "../../components/theme-provider";

type Ripple = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  color: string;
};

const RIPPLE_COLORS = accentList.map((a) => a.color);

export const InteractiveWallpaper = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const themeRef = useRef<string>("light");
  const ripples = useRef<Ripple[]>([]);

  let animationId: number;
  let w: number, h: number;

  const createRipple = (x: number, y: number) => {
    const color =
      RIPPLE_COLORS[Math.floor(Math.random() * RIPPLE_COLORS.length)];
    ripples.current.push({
      x,
      y,
      radius: 1,
      opacity: 1,
      color,
    });
  };

  const drawRipples = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ripples.current.forEach((ripple, index) => {
      ripple.radius += 2;
      ripple.opacity -= 0.02;
      if (ripple.opacity <= 0) {
        ripples.current.splice(index, 1);
      } else {
        ctx.globalAlpha = ripple.opacity;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = ripple.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
      }
    });
    ctx.globalAlpha = 1.0;
  };

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = themeRef.current === "light" ? "white" : "black";
    ctx.fillRect(0, 0, w, h);
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
    };
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
    const handleMouseMove = (event: MouseEvent) => {
      createRipple(event.clientX, event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas className="fixed inset-0 z-0" ref={canvasRef} />;
};
