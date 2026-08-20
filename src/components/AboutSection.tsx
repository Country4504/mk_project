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

const timeline = [
  { year: '成立', event: '深圳市辉锐信息科技有限公司成立，聚焦企业信息安全领域' },
  { year: '发展', event: '推出边界卫士产品线，覆盖终端安全、数据安全核心场景' },
  { year: '深耕', event: '服务金融、政务、医疗、教育等多行业客户，积累丰富行业经验' },
  { year: '未来', event: '持续创新安全技术与服务，助力企业构建弹性安全架构' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,229,255,0.08)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,229,255,0.15)] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#00E5FF]" />
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-[#E8EDF5] mb-8 text-center">发展历程</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[rgba(0,229,255,0.1)]" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} text-center`}
                >
                  <div className="flex-1">
                    <div className={`glass-card rounded-xl p-4 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-[11px] font-mono text-[#00E5FF]/60 tracking-wider mb-1">{item.year}</div>
                      <p className="text-[13px] text-[#7B8BA6]">{item.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-3 h-3 rounded-full bg-[#060B14] border-2 border-[#00E5FF]/40 shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
