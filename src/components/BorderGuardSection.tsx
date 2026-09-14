'use client';

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
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const Icon = product.icon;
  return (
    <div
      data-product-index={index}
      className="product-card rounded-xl p-6 sm:p-7"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 rounded-xl bg-[#F0EAFE] flex items-center justify-center">
          <Icon className="w-7 h-7 text-[#8B5CF6]" strokeWidth={1.7} />
        </div>
        <span className="text-2xl font-medium text-[#8B5CF6]">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <span className="text-[10px] font-mono text-[#8B5CF6] tracking-[0.16em]">{product.subtitle}</span>
      <h3 className="mt-2 text-xl font-bold text-[#111827]">{product.title}</h3>
      <p className="mt-3 text-[13px] text-[#4B5563] leading-6">{product.desc}</p>
      <div className="mt-5 grid grid-cols-1 gap-2">
        {product.features.map((f, j) => (
          <div key={j} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
            <span className="text-[12px] text-[#4B5563]">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BorderGuardSection() {
  return (
    <section
      id="border-guard"
      className="relative bg-[#F7F9FB]"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
