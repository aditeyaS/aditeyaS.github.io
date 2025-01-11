import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "../providers/theme";
import { accentList } from "./particle";

const WAVE_COLORS = accentList.map((a) => a.color);

export default function Wave() {
  let w: number, h: number, nt: number, animationId: number;

  const { theme } = useTheme();
  const noise = createNoise3D();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const themeRef = useRef<string>("light");

  const drawWave = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    nt += 0.005; // wave speed
    ctx.globalAlpha = 0.75; // wave opacity
    for (let i = 0; i < WAVE_COLORS.length; i++) {
      ctx.beginPath();
      ctx.lineWidth = 50; // wave width
      ctx.lineCap = "round";
      ctx.strokeStyle = WAVE_COLORS[i];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height
      }
      ctx.stroke();
      ctx.closePath();
    }
    ctx.globalAlpha = 1.0;
  };

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = themeRef.current === "light" ? "white" : "black";
    ctx.fillRect(0, 0, w, h);
    drawWave();
    animationId = requestAnimationFrame(render);
  };

  const init = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctxRef.current = ctx;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${10}px)`;
    nt = 0;
    window.onresize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${10}px)`;
    };
    render();
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  return (
    <canvas
      // style={{
      //   filter: "blur(5px)",
      // }}
      className="fixed inset-0 z-0"
      ref={canvasRef}
    />
  );
}
