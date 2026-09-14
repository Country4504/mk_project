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
            return (
              <AnimatedPanel key={i} delay={i * 0.08}>
                <div
                  className="capability-card w-full bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden transition-all duration-500 cursor-default"
                  onMouseEnter={() => setActiveIdx(i)}
                >
                  <div className="capability-corner w-24 h-24 rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl font-medium">{String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <div className="capability-icon w-12 h-12">
                    <Icon className="w-12 h-12" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-xl">{cap.title}</h3>
                  <p className="text-sm leading-6">{cap.desc}</p>
                </div>
              </AnimatedPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
