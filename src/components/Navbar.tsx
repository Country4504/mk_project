'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '服务', href: '#capabilities' },
  { label: '解决方案', href: '#solutions' },
  { label: '边界卫士', href: '#border-guard' },
  { label: '成功案例', href: '#cases' },
  { label: '合作伙伴', href: '#partners' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060B14]/85 backdrop-blur-2xl border-b border-[rgba(0,229,255,0.06)]'
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
          <div className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                className="px-3 py-2 text-[13px] text-[#7B8BA6] hover:text-[#00E5FF] transition-colors duration-200 rounded-md hover:bg-[rgba(0,229,255,0.04)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
              className="ml-3 px-5 py-2 text-[13px] font-medium bg-gradient-to-r from-[#00E5FF] to-[#2979FF] text-[#060B14] rounded-lg hover:shadow-[0_0_24px_rgba(0,229,255,0.35)] transition-all duration-300"
            >
              安全咨询
            </a>
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
            className="xl:hidden bg-[#060B14]/95 backdrop-blur-2xl border-b border-[rgba(0,229,255,0.06)]"
          >
            <div className="px-6 py-4 space-y-0.5 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                  className="block px-4 py-2.5 text-sm text-[#7B8BA6] hover:text-[#00E5FF] hover:bg-[rgba(0,229,255,0.04)] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
