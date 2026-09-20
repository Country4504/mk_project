'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Cloud,
  Database,
  Globe,
  Network,
  Monitor,
  Settings,
  Smartphone,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

const solutions = [
  {
    id: 'cloud-security',
    icon: Cloud,
    title: '云安全',
    subtitle: 'Cloud Security',
    desc: '为公有云、私有云、混合云环境提供全面的安全防护，涵盖负载保护、云安全态势管理、容器安全与微服务安全。',
    scenarios: ['多云环境统一管理', '云原生应用防护', '合规审计与态势感知'],
    value: '实现云环境安全可视化，降低配置风险，保障业务连续性与数据合规。',
  },
  {
    id: 'data-security',
    icon: Database,
    title: '数据安全',
    subtitle: 'Data Security',
    desc: '覆盖数据全生命周期的安全保护，从数据分类分级、加密存储、脱敏处理到安全传输与销毁，构建数据安全防护体系。',
    scenarios: ['敏感数据识别与分级', '数据库审计与防护', '数据防泄漏 (DLP)'],
    value: '确保核心数据资产安全可控，满足等保与行业监管合规要求。',
  },
  {
    id: 'application-security',
    icon: Globe,
    title: '应用安全',
    subtitle: 'Application Security',
    desc: '从需求分析到上线运营，提供贯穿应用全生命周期的安全服务，包括漏洞扫描、渗透测试与 WAF 防护。',
    scenarios: ['Web 应用防火墙', 'API 安全防护', 'DevSecOps 集成'],
    value: '在开发阶段消除安全隐患，降低修复成本，保障业务应用安全稳定运行。',
  },
  {
    id: 'network-security',
    icon: Network,
    title: '网络安全',
    subtitle: 'Network Security',
    desc: '构建多层次网络安全防御体系，包括边界防护、入侵检测与防御、流量分析、零信任网络架构设计与实施。',
    scenarios: ['下一代防火墙部署', '网络分段与微隔离', '威胁检测与响应 (NDR)'],
    value: '实现网络威胁实时感知与自动响应，构建弹性网络安全架构。',
  },
  {
    id: 'endpoint-security',
    icon: Monitor,
    title: '终端安全',
    subtitle: 'Endpoint Security',
    desc: '为企业提供终端安全防护解决方案，涵盖终端防病毒、EDR、终端管控、文档加密与防泄漏，保护企业核心信息资产。',
    scenarios: ['终端威胁检测与响应', '文档加密与权限管控', '外设管控与准入'],
    value: '全面保护终端设备与数据安全，防止内部泄密与外部攻击。',
  },
  {
    id: 'operations-security',
    icon: Settings,
    title: '运维安全',
    subtitle: 'Operations Security',
    desc: '提供 IT 运维安全审计与管控方案，包括堡垒机、运维审计、自动化运维安全、配置基线核查等。',
    scenarios: ['运维操作审计', '特权账号管理', '自动化安全巡检'],
    value: '规范运维操作流程，实现运维行为可追溯，降低内部操作风险。',
  },
  {
    id: 'mobile-security',
    icon: Smartphone,
    title: '移动安全',
    subtitle: 'Mobile Security',
    desc: '面向移动办公场景的安全解决方案，包括移动设备管理 (MDM)、移动应用安全、企业移动办公安全网关。',
    scenarios: ['移动设备统一管理', '企业应用安全加固', '移动办公安全接入'],
    value: '保障移动办公场景下的数据安全与合规，实现灵活与安全的平衡。',
  },
];

export default function SolutionsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const active = solutions[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(41,121,255,0.04)_0%,transparent_70%)] pointer-events-none" />

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
              Security Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8EDF5] mb-4">
            解决方案
          </h2>
          <p className="max-w-xl text-[#7B8BA6] text-[15px]">
            七大安全解决方案，覆盖企业信息安全全场景。选择方案查看完整内容
          </p>
        </motion.div>

        {/* Interactive Matrix */}
        <div className="grid items-stretch lg:grid-cols-12 gap-6">
          {/* Left: selector tabs */}
          <div className="hidden lg:col-span-4 lg:flex lg:h-full lg:flex-col lg:justify-between gap-2 pb-2 lg:pb-0">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              const isActive = i === activeIdx;
              return (
                <motion.button
                  key={i}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                  className={`solution-selector group flex min-w-0 w-full cursor-pointer items-center gap-2 px-3 py-3.5 rounded-xl text-left transition-all duration-300 whitespace-normal lg:min-w-0 lg:w-full lg:flex-1 ${
                    isActive
                      ? 'bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.2)] shadow-[0_0_20px_rgba(0,229,255,0.05)]'
                      : 'border border-transparent hover:bg-[rgba(0,229,255,0.03)] hover:border-[rgba(0,229,255,0.08)]'
                  }`}
                  whileHover={{ x: 0 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="solution-selector-icon w-9 h-9 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-black" />
                  </div>
                  <div>
                    <div className={`text-sm font-medium transition-colors ${isActive ? 'text-[#00E5FF]' : 'text-[#E8EDF5]'}`}>
                      {sol.title}
                    </div>
                    <div className="text-[10px] font-mono text-[#7B8BA6]/60 tracking-wider hidden lg:block">
                      {sol.subtitle}
                    </div>
                  </div>
                  <div className="ml-auto hidden items-center gap-2 lg:flex">
                    {/* <span className={`text-[10px] transition-all ${isActive ? 'text-[#00E5FF]/70' : 'text-transparent group-hover:text-[#00E5FF]/60'}`}>查看详情</span> */}
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#00E5FF]/80' : 'text-[#7B8BA6]/40 group-hover:text-[#00E5FF]/70'} group-hover:translate-x-1`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div
            className="lg:col-span-8 h-full"
            onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const startX = touchStartX.current;
              const endX = event.changedTouches[0]?.clientX;
              touchStartX.current = null;
              if (endX === undefined) return;
              const deltaX = endX - startX;
              if (Math.abs(deltaX) < 45) return;
              setActiveIdx((current) => (deltaX < 0 ? (current + 1) % solutions.length : (current - 1 + solutions.length) % solutions.length));
            }}
          >
            <div className="mb-3 flex items-center justify-between px-1 lg:hidden">
              <span className="font-mono text-xs tracking-[0.18em] text-[#17324A]">
                SOLUTION {String(activeIdx + 1).padStart(2, '0')} / {String(solutions.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1.5" aria-label={`第 ${activeIdx + 1} 个，共 ${solutions.length} 个解决方案`}>
                {solutions.map((solution, i) => (
                  <button
                    key={solution.id}
                    type="button"
                    aria-label={`切换到第 ${i + 1} 个解决方案`}
                    onClick={() => setActiveIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${i === activeIdx ? 'w-6 bg-black' : 'w-1.5 bg-[#AAB8CC]'}`}
                  />
                ))}
              </div>
            </div>
            <div className="relative h-full">
              <motion.div
                key={activeIdx}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="glass-card min-h-[520px] rounded-2xl p-6 lg:min-h-[560px] lg:p-8 h-full relative overflow-hidden"
              >
                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 animate-scan-h w-1/4 bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.02)] to-transparent" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <ActiveIcon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#E8EDF5]">{active.title}</h3>
                    <span className="text-[11px] font-mono text-[#00E5FF]/50 tracking-wider">{active.subtitle}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 h-[84px] overflow-hidden">
                  <p className="text-[14px] text-[#7B8BA6] leading-relaxed">{active.desc}</p>
                </div>

                {/* Scenarios */}
                <div className="mb-6">
                    <div className="cn-ui-label text-[12px] text-[#00E5FF]/50 tracking-wide mb-3">适用场景</div>
                  <div className="flex flex-wrap gap-2">
                    {active.scenarios.map((s, j) => (
                      <span
                        key={j}
                        className="text-[12px] px-3 py-1.5 rounded-lg bg-[rgba(0,229,255,0.05)] text-[#7B8BA6] border border-[rgba(0,229,255,0.06)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core value */}
                <div className="pt-5 border-t border-[rgba(0,229,255,0.06)]">
                  <div className="cn-ui-label text-[12px] text-[#00E5FF]/50 tracking-wide mb-2">核心价值</div>
                  <p className="text-[14px] text-[#E8EDF5] leading-relaxed">{active.value}</p>
                </div>

                <a
                  href={`/solutions#${active.id}`}
                  onClick={(e) => { e.preventDefault(); window.location.href = `/solutions#${active.id}`; }}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all hover:gap-3 hover:bg-[#1f1f1f]"
                >
                  {active.title}解决方案
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                    <path d="M80 0 L80 20 L60 0 Z" fill="rgba(0,229,255,0.05)" />
                    <path d="M80 0 L80 40 L40 0 Z" stroke="rgba(0,229,255,0.08)" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </motion.div>
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between lg:hidden">
                <button
                  type="button"
                  aria-label="上一个解决方案"
                  onClick={() => setActiveIdx((current) => (current - 1 + solutions.length) % solutions.length)}
                  className="pointer-events-auto -ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-black bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="下一个解决方案"
                  onClick={() => setActiveIdx((current) => (current + 1) % solutions.length)}
                  className="pointer-events-auto -mr-4 flex h-9 w-9 items-center justify-center rounded-full border border-black bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
