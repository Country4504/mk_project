'use client';

import { ChevronRight } from 'lucide-react';
import { borderGuardHref, borderGuardProducts } from '@/lib/border-guard-products';

/* ─── 单个产品卡片 ─── */
function ProductCard({
  product,
  index,
}: {
  product: (typeof borderGuardProducts)[number];
  index: number;
}) {
  const Icon = product.icon;
  return (
    <a href={borderGuardHref(product.slug)}
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
    </a>
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
        {borderGuardProducts.map((product, index) => (
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
