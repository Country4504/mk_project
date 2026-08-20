'use client';

import { useRef, useState, useEffect } from 'react';
import {
  ShieldAlert,
  FileLock,
  DoorOpen,
  FileKey,
  Factory,
  Usb,
  ChevronRight,
} from 'lucide-react';

const products = [
  {
    icon: ShieldAlert,
    title: '终端防泄密',
    subtitle: 'ENDPOINT DLP',
    desc: '对终端设备进行全面管控，防止企业核心数据通过各种途径泄露。监控文件操作、网络传输、外设使用等行为，实时预警异常操作。',
    features: ['文件操作审计', '网络外发管控', '屏幕水印追溯', '异常行为预警'],
  },
  {
    icon: FileLock,
    title: '文档防扩散',
    subtitle: 'DOCUMENT PROTECTION',
    desc: '对企业内部文档流转进行精细化管控，确保文档在授权范围内使用范围内流转，防止未经授权的复制、传播和外发。',
    features: ['文档权限管理', '安全区域划分', '外发审批控制', '版本追溯管理'],
  },
  {
    icon: DoorOpen,
    title: '准入网关',
    subtitle: 'ADMISSION GATEWAY',
    desc: '对接入企业网络的终端进行身份认证和安全合规检查，确保只有合规设备才能接入网络，防止非法设备带来的安全风险。',
    features: ['身份认证', '合规检查', '网络隔离', '访客管理'],
  },
  {
    icon: FileKey,
    title: '文档加密',
    subtitle: 'DOCUMENT ENCRYPTION',
    desc: '采用透明加密技术，对企业的核心文档进行强制加密保护。加密文档在授权环境中自动解密使用，非授权环境无法打开。',
    features: ['透明加解密', '多格式支持', '权限细粒度控制', '离线办公支持'],
  },
  {
    icon: Factory,
    title: '工控安全白名单',
    subtitle: 'INDUSTRIAL CONTROL SECURITY',
    desc: '面向工业控制系统的安全防护方案，通过白名单机制确保工控环境只运行经过认证的程序，防止恶意软件和未授权操作。',
    features: ['程序白名单', '工控协议审计', '环境完整性保护', '安全基线管理'],
  },
  {
    icon: Usb,
    title: '企业 U 盘控制',
    subtitle: 'USB CONTROL',
    desc: '对企业 USB 存储设备进行全面管控，实现 U 盘的注册授权、加密使用、读写控制和操作审计，防止通过移动存储介质泄密。',
    features: ['U盘注册授权', '加密 U 盘管理', '读写权限控制', '使用日志审计'],
  },
];

/* ─── 单个产品卡片 ─── */
function ProductCard({
  product,
  index,
  total,
  isActive,
}: {
  product: (typeof products)[0];
  index: number;
  total: number;
  isActive: boolean;
}) {
  const Icon = product.icon;
  return (
    <div
      data-product-index={index}
      className={`py-16 sm:py-20 px-6 sm:px-10 transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-60'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-center">
        {/* 左侧视觉 */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[rgba(0,229,255,0.12)]" />
            <div className="absolute inset-5 rounded-full border border-[rgba(0,229,255,0.08)]" />
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_rgba(0,229,255,0.5)]" />
            </div>
            <div className="absolute inset-3 animate-[spin_20s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full bg-[#2979FF] shadow-[0_0_6px_rgba(41,121,255,0.5)]" />
            </div>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[rgba(0,229,255,0.12)] to-[rgba(41,121,255,0.06)] flex items-center justify-center">
              <Icon
                className="w-10 h-10 sm:w-12 sm:h-12 text-[#00E5FF]"
                strokeWidth={1.5}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#060B14] border border-[rgba(0,229,255,0.25)] flex items-center justify-center">
              <span className="text-[10px] font-mono text-[#00E5FF]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* 右侧文案 */}
        <div className="text-center lg:text-left">
          <div className="flex items-baseline gap-3 flex-wrap mb-3 justify-center lg:justify-start">
            <span className="text-[11px] font-mono text-[#00E5FF]/50 tracking-[0.2em] uppercase">
              {product.subtitle}
            </span>
            <span className="text-[10px] font-mono text-[#00E5FF]/30">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#E8EDF5] mb-4">
            {product.title}
          </h3>
          <p className="text-[14px] text-[#8896AB] leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
            {product.desc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 max-w-md mx-auto lg:mx-0">
            {product.features.map((f, j) => (
              <div key={j} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#00E5FF]/60 shrink-0" />
                <span className="text-[13px] text-[#8896AB]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BorderGuardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* 跟踪当前滚动到哪个产品 */
  useEffect(() => {
    const cards = document.querySelectorAll('[data-product-index]');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(
              entry.target.getAttribute('data-product-index') || '0',
              10,
            );
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.4 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  /* 点击圆点 → 跳转到对应卡片 */
  const scrollTo = (i: number) => {
    const card = document.querySelector(`[data-product-index="${i}"]`);
    card?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="border-guard"
      ref={sectionRef}
      className="relative bg-[#060B14]"
    >
      {/* 背景网格 */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* ─── 顶部标题区 ─── */}
      <div className="relative z-10 text-center pt-20 sm:pt-24 pb-2 px-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-[#00E5FF]/30" />
          <span className="text-[11px] font-mono text-[#00E5FF]/60 tracking-[0.2em] uppercase">
            Border Guard Products
          </span>
          <div className="h-px w-8 bg-[#00E5FF]/30" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E8EDF5]">
          边界卫士产品线
        </h2>
      </div>

      {/* ─── 产品卡片列表（纵向堆叠，无 min-h-screen） ─── */}
      <div className="relative z-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
            total={products.length}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      {/* ─── 底部圆点导航 ─── */}
      <div className="relative z-10 pb-12 sm:pb-16 px-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
          {products.map((p, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={p.title}
                className={`group relative h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-10 bg-[#00E5FF]'
                    : 'w-2 bg-[rgba(0,229,255,0.25)] hover:bg-[rgba(0,229,255,0.45)]'
                }`}
              >
                {/* 悬停 tooltip */}
                <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-[#0C1424] border border-[rgba(0,229,255,0.2)] text-[11px] text-[#E8EDF5] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-3 text-center text-[10px] font-mono text-[#00E5FF]/40 tracking-[0.2em]">
          {String(activeIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}
