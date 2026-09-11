'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    need: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
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
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8EDF5] mb-4">
            联系我们
          </h2>
          <p className="max-w-xl text-[#7B8BA6] text-[15px]">
            如需了解更多信息安全解决方案，请联系我们的安全专家
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-5"
          >
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,229,255,0.08)] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase">公司地址</span>
              </div>
              <p className="text-[14px] text-[#E8EDF5]">深圳市</p>
              <p className="text-[13px] text-[#7B8BA6] mt-1">深圳市辉锐信息科技有限公司</p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,229,255,0.08)] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase">联系电话</span>
              </div>
              <p className="text-[14px] text-[#7B8BA6]">待补充</p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,229,255,0.08)] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase">电子邮箱</span>
              </div>
              <p className="text-[14px] text-[#7B8BA6]">待补充</p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase mb-2">服务范围</div>
              <div className="flex flex-wrap gap-1.5">
                {['安全咨询', '方案设计', '产品部署', '安全运营', '培训服务'].map((s, i) => (
                  <span key={i} className="text-[11px] px-2 py-1 rounded bg-[rgba(0,229,255,0.05)] text-[#7B8BA6] border border-[rgba(0,229,255,0.06)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase mb-2">
                    公司名称 *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入公司名称"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase mb-2">
                    联系人 *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入姓名"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase mb-2">
                    联系电话 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入联系电话"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase mb-2">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入邮箱地址"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[11px] font-mono text-[#7B8BA6] tracking-wider uppercase mb-2">
                  安全需求
                </label>
                <select
                  name="need"
                  value={formData.need}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300 appearance-none"
                >
                  <option value="" className="bg-[#2A4A70]">请选择需求类型</option>
                  <option value="consulting" className="bg-[#2A4A70]">安全咨询</option>
                  <option value="solution" className="bg-[#2A4A70]">解决方案</option>
                  <option value="product" className="bg-[#2A4A70]">产品采购</option>
                  <option value="service" className="bg-[#2A4A70]">安全运营</option>
                  <option value="training" className="bg-[#2A4A70]">培训服务</option>
                  <option value="other" className="bg-[#2A4A70]">其他</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] text-[#060B14] rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    提交成功
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    提交咨询
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
