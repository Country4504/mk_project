'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { borderGuardHref, borderGuardProducts } from '@/lib/border-guard-products';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: '首页', href: '#hero' },
  // { label: '服务', href: '#capabilities' },
  { label: '解决方案', href: '/solutions' },
  { label: '边界卫士', href: '#border-guard' },
  { label: '成功案例', href: '#cases' },
  { label: '合作伙伴', href: '#partners' },
  { label: '关于我们', href: '#about' },
  // { label: '联系我们', href: '#contact' },
];

const solutionItems = [
  { label: '云安全解决方案', href: '#cloud-security' },
  { label: '数据安全解决方案', href: '#data-security' },
  { label: '应用安全解决方案', href: '#application-security' },
  { label: '网络安全解决方案', href: '#network-security' },
  { label: '终端安全解决方案', href: '#endpoint-security' },
  { label: '运维安全解决方案', href: '#operations-security' },
  { label: '移动安全解决方案', href: '#mobile-security' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#102039]/88 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('#hero'); }}
            className="flex items-center group -translate-x-3 translate-y-1"
          >
            <Image
              src="/logo.png"
              alt="深圳市辉锐信息科技有限公司"
              width={173}
              height={71}
              className="h-16 w-auto group-hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] transition-shadow duration-300"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => item.href === '/solutions' ? (
              <div key={item.href} className="group relative">
                <a href="/solutions" onClick={(e) => { e.preventDefault(); handleClick('/solutions'); }} className="flex items-center gap-1 px-3.5 py-2.5 text-[15px] font-medium tracking-wide text-[#AAB8CC] hover:text-[#00E5FF] transition-all duration-200 rounded-lg">
                  {item.label}<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 rounded-xl bg-[#102039]/98 p-2 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,.35)] backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {solutionItems.map((subItem) => <a key={subItem.href} href={`/solutions${subItem.href}`} onClick={(e) => { e.preventDefault(); window.location.href = `/solutions${subItem.href}`; }} className="block rounded-lg px-3 py-2.5 text-sm text-[#AAB8CC] transition-colors hover:text-[#00E5FF]">{subItem.label}</a>)}
                </div>
              </div>
            ) : item.label === '边界卫士' ? (
              <div key={item.href} className="group relative">
                <a href="#border-guard" onClick={(e) => { e.preventDefault(); handleClick('#border-guard'); }} className="flex items-center gap-1 px-3.5 py-2.5 text-[15px] font-medium tracking-wide text-[#AAB8CC] hover:text-[#00E5FF] transition-all duration-200 rounded-lg">边界卫士<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" /></a>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 rounded-xl bg-[#102039]/98 p-2 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,.35)] backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {borderGuardProducts.map((subItem) => <a key={subItem.slug} href={borderGuardHref(subItem.slug)} className="block rounded-lg px-3 py-2.5 text-sm text-[#AAB8CC] transition-colors hover:text-[#00E5FF]">{subItem.title}</a>)}
                </div>
              </div>
            ) : (
              <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); handleClick(item.href); }} className="px-3.5 py-2.5 text-[15px] font-medium tracking-wide text-[#AAB8CC] hover:text-[#00E5FF] transition-all duration-200 rounded-lg">{item.label}</a>
            ))}
            <div className="ml-3">
              <Button
                asChild
                className="rounded-full bg-black text-white hover:bg-[#1f1f1f] hover:text-white"
              >
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
                >
                  安全咨询
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-[#7B8BA6] hover:text-[#00E5FF] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#102039]/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-4 space-y-0.5 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => item.href === '/solutions' ? (
                <div key={item.href}>
                  <a href="/solutions" onClick={(e) => { e.preventDefault(); handleClick('/solutions'); }} className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium tracking-wide text-[#AAB8CC] hover:text-[#00E5FF]">{item.label}<ChevronDown className="h-4 w-4" /></a>
                  <div className="ml-4 border-l border-[#00E5FF]/15 pl-3">
                    {solutionItems.map((subItem) => <a key={subItem.href} href={`/solutions${subItem.href}`} onClick={(e) => { e.preventDefault(); window.location.href = `/solutions${subItem.href}`; }} className="block px-3 py-2 text-sm text-[#7B8BA6] hover:text-[#00E5FF]">{subItem.label}</a>)}
                  </div>
                </div>
              ) : item.label === '边界卫士' ? (
                <div key={item.href}><a href="#border-guard" onClick={(e) => { e.preventDefault(); handleClick('#border-guard'); }} className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium tracking-wide text-[#AAB8CC] hover:text-[#00E5FF]">边界卫士<ChevronDown className="h-4 w-4" /></a><div className="ml-4 border-l border-[#00E5FF]/15 pl-3">{borderGuardProducts.map((subItem) => <a key={subItem.slug} href={borderGuardHref(subItem.slug)} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-[#7B8BA6] hover:text-[#00E5FF]">{subItem.title}</a>)}</div></div>
              ) : (
                <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); handleClick(item.href); }} className="block rounded-lg px-4 py-3 text-base font-medium tracking-wide text-[#AAB8CC] hover:text-[#00E5FF]">{item.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
