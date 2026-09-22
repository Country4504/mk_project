import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { solutions } from '@/lib/solutions';

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.id === slug);
  return { title: solution ? `${solution.title}解决方案` : '解决方案' };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.id === slug);
  if (!solution) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F9FB]">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
        <Link href="/#solutions" className="inline-flex items-center gap-2 text-sm text-[#17324A]/70 transition-colors hover:text-[#00A8C6]"><ArrowLeft className="h-4 w-4" />返回解决方案</Link>
        <div className="mt-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3"><div className="h-px w-8 bg-[#00A8C6]" /><span className="font-mono text-xs tracking-[0.2em] text-[#00A8C6]">{solution.subtitle}</span></div>
          <h1 className="text-4xl font-bold text-[#17324A] sm:text-6xl">{solution.title}<span className="text-[#00A8C6]">解决方案</span></h1>
          <p className="mt-7 text-lg leading-8 text-[#52677F]">{solution.desc}</p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <section className="glass-card rounded-2xl p-7"><div className="mb-6 flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#00A8C6]" /><h2 className="text-lg font-semibold text-[#17324A]">重点建设方向</h2></div><div className="space-y-3">{solution.scenarios.map((item) => <div key={item} className="rounded-xl border border-[#00A8C6]/15 bg-white/50 px-4 py-3 text-[#52677F]">{item}</div>)}</div></section>
          <section className="solution-core-value rounded-2xl bg-[#17324A] p-7"><div className="mb-6 text-xs tracking-[0.2em] text-white">CORE VALUE</div><h2 className="text-lg font-semibold text-white">核心价值</h2><p className="mt-5 leading-8 text-white">{solution.value}</p><Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00E5FF] px-5 py-3 text-sm font-medium text-[#17324A] hover:bg-white">咨询该解决方案 <ArrowRight className="h-4 w-4" /></Link></section>
        </div>
        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#D9E2EA] sm:p-8">
          <div className="mb-6"><div className="font-mono text-xs tracking-[0.2em] text-[#00A8C6]">SOLUTION MATERIALS</div><h2 className="mt-2 text-2xl font-bold text-[#17324A]">方案架构与能力概览</h2></div>
          <div className={`grid gap-6 ${solution.images.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {solution.images.map((image) => <div key={image} className="overflow-hidden rounded-xl border border-[#D9E2EA] bg-[#F8FAFC]"><Image src={image} alt={`${solution.title}方案素材`} width={1600} height={900} className="h-auto w-full object-contain" /></div>)}
          </div>
        </section>
      </div>
    </div>
  );
}
