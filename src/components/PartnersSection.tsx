'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: '安恒信息', logo: '杭州安恒信息技术股份有限公司.png', url: 'https://www.dbappsecurity.com.cn' },
  { name: '亿格云', logo: '杭州亿格云科技有限公司.svg', url: 'https://www.eaglecloud.com/' },
  { name: '盈高科技', logo: '杭州盈高科技有限公司.png', url: 'https://www.infogo.com.cn' },
  { name: '鸿翼软件', logo: '上海鸿翼软件技术股份有限公司.png', url: 'https://www.macrowing.com' },
  { name: '派拉软件', logo: '上海派拉软件股份有限公司.png', url: 'https://www.paraview.cn' },
  { name: '深信服', logo: '深信服科技股份有限公司.png', url: 'https://www.sangfor.com.cn' },
  { name: '深信达', logo: '苏州深信达信息技术有限公司.svg', url: 'https://www.shenxinda.com/' },
  { name: '360', logo: '三六零安全科技股份有限公司.svg', url: 'https://360.net/' },
  { name: '鼎甲科技', logo: '广州鼎甲计算机科技有限公司.svg', url: 'https://www.scutech.com/' },
  { name: '山石网科', logo: '山石网科通信技术股份有限公司.svg', url: 'https://www.hillstonenet.com.cn/' },
  { name: '联软科技', logo: '深圳市联软科技股份有限公司.png', url: 'https://www.leagsoft.com' },
  { name: '杉岩数据', logo: '深圳市杉岩数据技术有限公司.png', url: 'https://www.szsandstone.com' },
  { name: '亚信科技', logo: '亚信科技（成都）有限公司.png', url: 'https://www.asiainfo-sec.com' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 lg:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
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
            携手行业伙伴，共建可信赖的信息安全生态
          </p>
        </motion.div>

        <div className="partner-card-grid">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.logo}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="phaeray-partner-card"
            >
              <div className="phaeray-partner-card__content">
                <div className="phaeray-partner-card__back">
                  <div className="phaeray-partner-card__back-content">
                    <img src={`/Partners/${partner.logo}`} alt={partner.name} />
                  </div>
                </div>
                <div className="phaeray-partner-card__front">
                  <div className="phaeray-partner-card__front-content">
                    <div className="partner-card__img">
                      <div className="partner-card__circle" />
                      <div className="partner-card__circle partner-card__circle--right" />
                      <div className="partner-card__circle partner-card__circle--bottom" />
                    </div>
                    <div className="partner-card__description">
                      <img src={`/Partners/${partner.logo}`} alt={partner.name} />
                      <span>{partner.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
