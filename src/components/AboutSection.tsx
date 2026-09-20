'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: '信息安全管理体系',
    desc: '长期致力于企业信息安全管理体系建设，深谙等保合规、ISO 27001 等标准要求，帮助企业建立完善的安全治理框架。',
  },
  {
    icon: Target,
    title: '技术架构建设',
    desc: '熟悉企业业务管理流程，能够精准把握业务和安全的平衡点，解决企业在信息安全建设过程中面临的痛点问题。',
  },
  {
    icon: Users,
    title: '资深专家团队',
    desc: '拥有资深信息安全专家服务团队，具备丰富的行业经验和专业技术能力，可提供一站式安全服务。',
  },
  {
    icon: Award,
    title: '一站式服务',
    desc: '从信息安全咨询、安全解决方案、安全运营到安全人才培养，提供覆盖安全全生命周期的一站式专业服务。',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E5FF]/40" />
            <span className="text-[11px] font-mono text-[#00E5FF]/70 tracking-[0.2em] uppercase">
              About Phaeray
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8EDF5] mb-4">
            关于我们
          </h2>
          <p className="max-w-2xl text-[#7B8BA6] text-[15px] leading-relaxed">
            深圳市辉锐信息科技有限公司专注于企业信息安全领域，致力于为用户提供高附加值的信息化解决方案。
            公司以专业的技术能力和丰富的行业经验，帮助企业构建全面的信息安全防护体系。
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#E8EDF5] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-[#7B8BA6] leading-relaxed">{item.desc}</p>
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
