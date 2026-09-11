'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

/* ── Canvas particle network with depth ── */
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let mouse = { x: -9999, y: -9999 };
    interface P { x: number; y: number; z: number; vx: number; vy: number; vz: number; o: number; }
    let particles: P[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    const init = () => {
      const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 120);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 0.8 + 0.2,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: 0,
          o: Math.random() * 0.4 + 0.15,
        });
      }
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160 * ((a.z + b.z) / 2);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12 * a.z * b.z;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // mouse
        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 220) {
          const alpha = (1 - mDist / 220) * 0.25 * a.z;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // particles
      for (const p of particles) {
        const r = (1.2 + p.z * 1.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${p.o * p.z})`;
        ctx.fill();

        // glow
        if (p.z > 0.6) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2);
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
          g.addColorStop(0, `rgba(0,229,255,${0.06 * p.z})`);
          g.addColorStop(1, 'rgba(0,229,255,0)');
          ctx.fillStyle = g;
          ctx.fill();
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      animId = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    resize();
    init();
    draw();
    window.addEventListener('resize', () => { resize(); init(); });
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

/* ── Hex grid SVG background ── */
function HexGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="rgba(0,229,255,1)" strokeWidth="0.5" />
          <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="rgba(0,229,255,1)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layers */}
      <div className="absolute inset-0">
        <HexGrid />
        <ParticleNetwork />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,229,255,0.06)_0%,rgba(41,121,255,0.02)_40%,transparent_70%)] pointer-events-none" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031224] via-transparent to-[#031224] pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40 z-[1]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full border border-[rgba(0,229,255,0.15)] bg-[rgba(0,229,255,0.04)] backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]" />
          </span>
          <span className="text-[11px] font-mono text-[#00E5FF]/80 tracking-[0.15em] uppercase">
            Security Operations Active
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-[#E8EDF5]">构建企业</span>
          <br />
          <span className="gradient-text">信息安全防线</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-[15px] sm:text-base text-[#7B8BA6] leading-relaxed mb-10"
        >
          深圳市辉锐信息科技有限公司专注于企业信息安全管理体系与技术架构建设，
          提供从安全咨询、解决方案、安全运营到人才培养的一站式专业服务
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#solutions"
            onClick={(e) => { e.preventDefault(); document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group px-7 py-3.5 text-sm font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] text-[#060B14] rounded-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            了解解决方案
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-7 py-3.5 text-sm font-semibold border border-[rgba(0,229,255,0.25)] text-[#00E5FF] rounded-lg hover:bg-[rgba(0,229,255,0.05)] hover:border-[rgba(0,229,255,0.4)] transition-all duration-300"
          >
            联系安全专家
          </a>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {[
            { value: '10+', label: '年行业深耕' },
            { value: '7', label: '大解决方案' },
            { value: '6', label: '边界卫士产品' },
            { value: '7×24', label: '安全运营' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] text-[#00E5FF] text-glow">
                {s.value}
              </div>
              <div className="text-xs text-[#7B8BA6] mt-1.5 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-[#7B8BA6]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
