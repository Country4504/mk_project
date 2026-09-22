import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@/lib/solutions';

export default function SolutionsIndexPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FB] px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl"><div className="mb-4 flex items-center gap-3"><div className="h-px w-8 bg-[#00A8C6]" /><span className="font-mono text-xs tracking-[0.2em] text-[#00A8C6]">SECURITY SOLUTIONS</span></div><h1 className="text-4xl font-bold text-[#17324A] sm:text-6xl">解决方案</h1><p className="mt-5 text-lg leading-8 text-[#52677F]">七大安全解决方案，分别覆盖企业信息安全建设的关键场景。</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{solutions.map((solution) => <Link key={solution.id} href={`/solutions/${solution.id}`} className="glass-card group rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-[#00A8C6]/40"><span className="font-mono text-xs tracking-[0.15em] text-[#00A8C6]">{solution.subtitle}</span><h2 className="mt-4 text-2xl font-bold text-[#17324A]">{solution.title}</h2><p className="mt-4 line-clamp-3 leading-7 text-[#60788B]">{solution.desc}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#00A8C6]">查看方案详情 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div>
      </div>
    </div>
  );
}
