'use client';

import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  ShieldCheck,
  MonitorSmartphone,
  Search,
  FileBadge,
  GraduationCap,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const capabilities = [
  {
    icon: ClipboardCheck,
    title: '咨询规划',
    desc: '信息安全管理体系规划、等保合规咨询、业务风险评估',
    status: 'ACTIVE',
    metric: 'ISO 27001',
  },
  {
    icon: ShieldCheck,
    title: '安全建设',
    desc: '安全架构设计、产品选型部署、集成实施交付',
    status: 'ACTIVE',
    metric: 'Full Stack',
  },
  {
    icon: MonitorSmartphone,
    title: '安全运营',
    desc: '7×24 安全监控、威胁检测分析、应急响应处置',
    status: 'MONITORING',
    metric: '7×24 SOC',
  },
  {
    icon: Search,
    title: '风险评估',
    desc: '渗透测试、漏洞扫描、代码审计、合规评估',
    status: 'ACTIVE',
    metric: 'Deep Scan',
  },
  {
    icon: FileBadge,
    title: '合规支持',
    desc: '等保 2.0 合规、GDPR 咨询、行业监管要求对接',
    status: 'ACTIVE',
    metric: 'Compliance',
  },
  {
    icon: GraduationCap,
    title: '人才培养',
    desc: '安全意识培训、技术能力提升、攻防实战演练',
    status: 'ACTIVE',
    metric: 'Training',
  },
];

function AnimatedPanel({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function StatusDot({ status }: { status: string }) {
  const color = status === 'MONITORING' ? '#00E676' : '#00E5FF';
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: color }} />
    </span>
  );
}

function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute inset-0 animate-scan-h w-1/3 bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.03)] to-transparent" />
    </div>
  );
}

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % capabilities.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E5FF]/40" />
            <span className="text-[11px] font-mono text-[#00E5FF]/70 tracking-[0.2em] uppercase">
              Capability Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8EDF5] mb-4">
            能力总览
          </h2>
          <p className="max-w-xl text-[#7B8BA6] text-[15px]">
            从咨询规划到安全运营，覆盖企业信息安全全生命周期
          </p>
        </motion.div>

        {/* SOC Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            const isActive = i === activeIdx;
            return (
              <AnimatedPanel key={i} delay={i * 0.08}>
                <div
                  className="relative rounded-2xl p-6 transition-all duration-500 cursor-default border-glow-hover overflow-hidden bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] shadow-[0_0_40px_rgba(0,229,255,0.06)]"
                  onMouseEnter={() => setActiveIdx(i)}
                >
                  <ScanLine />

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 bg-[rgba(0,229,255,0.15)] shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                      <Icon className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <StatusDot status={cap.status} />
                      <span className="text-[10px] font-mono text-[#7B8BA6] tracking-wider">{cap.status}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-[#E8EDF5] mb-2">{cap.title}</h3>
                  <p className="text-[13px] text-[#7B8BA6] leading-relaxed mb-4">{cap.desc}</p>

                  {/* Bottom metric */}
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(0,229,255,0.06)]">
                    <span className="text-[11px] font-mono text-[#00E5FF]/60 tracking-wider">{cap.metric}</span>
                    <div className="flex gap-0.5">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="w-1 h-3 rounded-full transition-all duration-500 bg-[#00E5FF]/60"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
