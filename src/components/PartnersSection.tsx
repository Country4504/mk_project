'use client';

import { motion } from 'framer-motion';

const partnerCategories = [
  {
    label: '安全厂商',
    partners: ['深信服', '奇安信', '天融信', '启明星辰', '绿盟科技', '安恒信息'],
  },
  {
    label: '云平台',
    partners: ['阿里云', '腾讯云', '华为云', 'AWS', 'Azure'],
  },
  {
    label: '技术合作',
    partners: ['微软', '赛门铁克', 'Palo Alto', 'Fortinet', 'Cisco'],
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 lg:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E5FF]/40" />
            <span className="text-[11px] font-mono text-[#00E5FF]/70 tracking-[0.2em] uppercase">
              Partners & Ecosystem
            </span>
            <div className="h-px w-8 bg-[#00E5FF]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8EDF5] mb-4">
            合作伙伴
          </h2>
          <p className="max-w-xl mx-auto text-[#7B8BA6] text-[15px]">
            与全球领先的安全厂商和技术平台建立深度合作
          </p>
        </motion.div>

        {/* Partner categories */}
        <div className="space-y-10">
          {partnerCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="text-[11px] font-mono text-[#00E5FF]/50 tracking-wider uppercase mb-4 text-center">
                {cat.label}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {cat.partners.map((partner, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: pi * 0.05 }}
                    className="px-5 py-3 rounded-xl glass-card text-[13px] text-[#7B8BA6] hover:text-[#00E5FF] hover:border-[rgba(0,229,255,0.2)] transition-all duration-300 cursor-default"
                  >
                    {partner}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
