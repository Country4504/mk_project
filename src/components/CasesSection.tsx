'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Building2,
  Landmark,
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
} from 'lucide-react';

const cases = [
  {
    icon: Landmark,
    industry: '金融行业',
    color: '#00E5FF',
    pain: '金融交易数据量大、安全合规要求高，面临高级持续性威胁和内部数据泄露风险。',
    solution: '部署终端防泄密 + 文档加密 + 准入网关组合方案，建立数据分级保护体系，实施 7×24 安全运营监控。',
    value: '实现核心数据资产全面加密保护，满足银保监会合规要求，安全事件响应时间缩短至分钟级。',
  },
  {
    icon: Building2,
    industry: '政务行业',
    color: '#2979FF',
    pain: '政务系统涉及大量敏感信息，需满足等保 2.0 三级以上要求，面临外部攻击和内部泄密双重风险。',
    solution: '构建网络安全 + 终端安全 + 运维安全三位一体防护体系，部署边界卫士全系列产品。',
    value: '通过等保三级测评，实现政务数据全生命周期安全管控，运维操作 100% 可审计。',
  },
  {
    icon: HeartPulse,
    industry: '医疗行业',
    color: '#00E676',
    pain: '患者隐私数据保护要求严格，医疗系统互联互通带来新的安全风险，勒索软件威胁日益严重。',
    solution: '实施数据安全 + 应用安全解决方案，部署文档加密和 USB 管控，建立安全应急响应机制。',
    value: '患者数据安全得到有效保障，满足《个人信息保护法》合规要求，业务连续性显著提升。',
  },
  {
    icon: GraduationCap,
    industry: '教育行业',
    color: '#BB86FC',
    pain: '科研数据价值高但保护意识薄弱，校园网络开放性强，终端设备种类繁多管理困难。',
    solution: '部署终端安全 + 移动安全方案，实施统一终端管控和文档加密，开展安全意识培训。',
    value: '科研数据泄露风险大幅降低，数千台终端实现统一管理，师生安全意识显著提升。',
  },
  {
    icon: Factory,
    industry: '制造行业',
    color: '#FF6D00',
    pain: '工控系统安全防护薄弱，核心设计图纸和工艺参数面临泄露风险，供应链安全管控难度大。',
    solution: '实施工控安全白名单 + 文档加密 + 终端防泄密方案，建立工控安全防护体系。',
    value: '工控系统运行安全得到保障，核心知识产权有效保护，供应链协作安全可控。',
  },
  {
    icon: ShoppingBag,
    industry: '电商行业',
    color: '#FFC107',
    pain: '用户数据量大、交易频繁，面临数据泄露、欺诈攻击等风险，需满足 PCI DSS 合规要求。',
    solution: '部署应用安全 + 数据安全解决方案，实施 API 安全防护和用户数据加密存储。',
    value: '用户数据安全得到有效保护，通过 PCI DSS 合规认证，安全事件发生率显著下降。',
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="relative py-24 lg:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E5FF]/40" />
            <span className="text-[11px] font-mono text-[#00E5FF]/70 tracking-[0.2em] uppercase">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8EDF5] mb-4">
            成功案例
          </h2>
          <p className="max-w-xl text-[#7B8BA6] text-[15px]">
            覆盖金融、政务、医疗、教育、制造、电商等多个行业
          </p>
        </motion.div>

        {/* Customer logo wall */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(16,32,57,0.55)] p-4 sm:p-6 lg:p-8"
        >
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#00E5FF]/65 uppercase">Trusted By</div>
              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#E8EDF5]">服务客户</h3>
            </div>
            <div className="hidden sm:block h-px flex-1 max-w-xs bg-gradient-to-r from-[#00E5FF]/30 to-transparent" />
          </div>
          <div className="overflow-hidden rounded-xl bg-white/95 px-3 py-4 sm:px-6 sm:py-5">
            <Image
              src="/成功案例Logo墙.png"
              alt="辉锐信息成功案例客户 Logo 墙"
              width={1836}
              height={926}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
        </motion.div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Scan line on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-scan-h w-1/3 bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.03)] to-transparent" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-base font-semibold text-[#E8EDF5]">{c.industry}</h3>
                </div>

                {/* Three-part structure */}
                <div className="space-y-4">
                  <div>
                    <div className="cn-ui-label text-[14px] !font-semibold tracking-wide mb-1.5 text-black">
                      行业痛点
                    </div>
                    <p className="text-[13px] text-[#7B8BA6] leading-relaxed">{c.pain}</p>
                  </div>
                  <div>
                    <div className="cn-ui-label text-[14px] !font-semibold tracking-wide mb-1.5 text-black">
                      解决方案
                    </div>
                    <p className="text-[13px] text-[#7B8BA6] leading-relaxed">{c.solution}</p>
                  </div>
                  <div className="pt-3 border-t border-[rgba(0,229,255,0.06)]">
                    <div className="cn-ui-label text-[14px] !font-semibold tracking-wide mb-1.5 text-black">
                      交付价值
                    </div>
                    <p className="text-[13px] text-[#E8EDF5] leading-relaxed">{c.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
