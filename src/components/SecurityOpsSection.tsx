'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, CheckCircle, Shield, Activity, Wifi, Server } from 'lucide-react';

/* ── Simulated threat log entries ── */
const threatLogs = [
  { time: '14:32:07', level: 'WARN', msg: '异常登录尝试 detected from 192.168.x.x', type: 'auth' },
  { time: '14:31:52', level: 'INFO', msg: '防火墙规则更新完成 - Rule Set v2.4.1', type: 'firewall' },
  { time: '14:31:38', level: 'CRIT', msg: 'DDoS 攻击缓解 - 流量峰值 2.3Gbps', type: 'ddos' },
  { time: '14:31:15', level: 'INFO', msg: '终端安全扫描完成 - 0 威胁发现', type: 'scan' },
  { time: '14:30:58', level: 'WARN', msg: 'USB 设备接入告警 - 未授权设备', type: 'usb' },
  { time: '14:30:42', level: 'INFO', msg: '文档加密策略同步 - 128 终端已更新', type: 'encrypt' },
  { time: '14:30:21', level: 'INFO', msg: '准入网关认证通过 - 新设备注册', type: 'auth' },
  { time: '14:29:55', level: 'WARN', msg: '敏感文件外发拦截 - 已触发审批流程', type: 'dlp' },
];

const riskItems = [
  { label: '网络威胁', level: 72, color: '#FF6D00' },
  { label: '终端风险', level: 35, color: '#00E676' },
  { label: '数据泄露', level: 18, color: '#00E5FF' },
  { label: '合规风险', level: 45, color: '#2979FF' },
];

const assetStatus = [
  { icon: Server, label: '服务器', count: '256', status: 'normal' },
  { icon: Shield, label: '终端', count: '1,024', status: 'normal' },
  { icon: Wifi, label: '网络设备', count: '89', status: 'warning' },
  { icon: Activity, label: '应用系统', count: '47', status: 'normal' },
];

function TypingLog() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= threatLogs.length) return 0;
        return prev + 1;
      });
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-1.5 font-mono text-[11px]">
      {threatLogs.slice(0, visibleLines).map((log, i) => (
        <motion.div
          key={`${log.time}-${i}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-2"
        >
          <span className="text-[#7B8BA6]/50 shrink-0">{log.time}</span>
          <span className={`shrink-0 px-1 rounded text-[9px] ${
            log.level === 'CRIT' ? 'bg-[rgba(255,109,0,0.15)] text-[#FF6D00]' :
            log.level === 'WARN' ? 'bg-[rgba(255,193,7,0.1)] text-[#FFC107]' :
            'bg-[rgba(0,229,255,0.08)] text-[#00E5FF]/60'
          }`}>
            {log.level}
          </span>
          <span className="text-[#7B8BA6]/80 truncate">{log.msg}</span>
        </motion.div>
      ))}
      <span className="inline-block w-1.5 h-3.5 bg-[#00E5FF]/60 animate-blink" />
    </div>
  );
}

function RadarDisplay() {
  return (
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
      {/* Rings */}
      <svg viewBox="0 0 160 160" className="w-full h-full">
        <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(0,229,255,0.06)" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="50" fill="none" stroke="rgba(0,229,255,0.06)" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="30" fill="none" stroke="rgba(0,229,255,0.06)" strokeWidth="0.5" />
        <line x1="80" y1="10" x2="80" y2="150" stroke="rgba(0,229,255,0.04)" strokeWidth="0.5" />
        <line x1="10" y1="80" x2="150" y2="80" stroke="rgba(0,229,255,0.04)" strokeWidth="0.5" />

        {/* Sweep */}
        <g className="animate-radar" style={{ transformOrigin: '80px 80px' }}>
          <path d="M80 80 L80 10 A70 70 0 0 1 130 30 Z" fill="url(#radarGrad)" />
        </g>

        {/* Blips */}
        <circle cx="55" cy="45" r="2" fill="#00E5FF" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="60" r="2" fill="#FF6D00" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="105" r="2" fill="#00E676" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="95" r="1.5" fill="#00E5FF" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
        </circle>

        <defs>
          <linearGradient id="radarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(0,229,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,229,255,0)" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
    </div>
  );
}

export default function SecurityOpsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="security-ops" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E5FF]/40" />
            <span className="text-[11px] font-mono text-[#00E5FF]/70 tracking-[0.2em] uppercase">
              Security Operation Center
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8EDF5] mb-4">
            安全运营中心
          </h2>
          <p className="max-w-xl text-[#7B8BA6] text-[15px]">
            7×24 小时实时监控，威胁智能检测与自动响应
          </p>
        </motion.div>

        {/* SOC Dashboard */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-[rgba(0,229,255,0.06)] bg-[rgba(0,229,255,0.02)]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6D00]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00E676]/60" />
              </div>
              <span className="text-[11px] font-mono text-[#7B8BA6]/60">SOC Dashboard v3.2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00E676]" />
              </span>
              <span className="text-[10px] font-mono text-[#00E676]/80">LIVE</span>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0">
            {/* Left: Threat log */}
            <div className="lg:col-span-4 p-5 border-b lg:border-b-0 lg:border-r border-[rgba(0,229,255,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-3.5 h-3.5 text-[#FF6D00]/70" />
                <span className="text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase">威胁情报日志</span>
              </div>
              <TypingLog />
            </div>

            {/* Center: Radar + Network topology */}
            <div className="lg:col-span-4 p-5 border-b lg:border-b-0 lg:border-r border-[rgba(0,229,255,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-3.5 h-3.5 text-[#00E5FF]/70" />
                <span className="text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase">态势感知</span>
              </div>
              <RadarDisplay />
              {/* Network nodes */}
              <div className="mt-4 flex items-center justify-center gap-3">
                {['防火墙', 'IDS', 'WAF', 'SOC'].map((node, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      i === 1 ? 'bg-[rgba(255,109,0,0.1)] border border-[rgba(255,109,0,0.2)]' : 'bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.1)]'
                    }`}>
                      <Shield className={`w-3.5 h-3.5 ${i === 1 ? 'text-[#FF6D00]/70' : 'text-[#00E5FF]/60'}`} />
                    </div>
                    <span className="text-[9px] text-[#7B8BA6]/60">{node}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Risk + Assets */}
            <div className="lg:col-span-4 p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-3.5 h-3.5 text-[#00E676]/70" />
                <span className="text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase">风险 & 资产</span>
              </div>

              {/* Risk bars */}
              <div className="space-y-3 mb-5">
                {riskItems.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[#7B8BA6]">{item.label}</span>
                      <span className="text-[11px] font-mono" style={{ color: item.color }}>{item.level}%</span>
                    </div>
                    <div className="h-1 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <div
                        style={{ width: `${item.level}%`, backgroundColor: item.color }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Asset status */}
              <div className="grid grid-cols-2 gap-2">
                {assetStatus.map((asset, i) => {
                  const Icon = asset.icon;
                  return (
                    <div key={i} className="p-2.5 rounded-lg bg-[rgba(0,229,255,0.03)] border border-[rgba(0,229,255,0.05)]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className="w-3 h-3 text-[#00E5FF]/50" />
                        <span className="text-[10px] text-[#7B8BA6]">{asset.label}</span>
                      </div>
                      <div className="text-sm font-mono font-semibold text-[#E8EDF5]">{asset.count}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
