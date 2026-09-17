'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAE56foQjB4O9A_-s';
const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || 'https://phaeray-contact-api.jkuufo.workers.dev';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void; 'error-callback': () => void }) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    need: '',
  });

  useEffect(() => {
    const siteKey = TURNSTILE_SITE_KEY;
    if (!turnstileRef.current) return;
    const render = () => {
      if (!window.turnstile || !turnstileRef.current || widgetId.current) return;
      widgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      });
    };
    if (window.turnstile) render();
    else {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.onload = render;
      document.head.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    const phonePattern = /^(?:1[3-9]\d{9}|0\d{2,3}[- ]?\d{7,8})$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.company.trim().length < 2) errors.company = '请输入至少 2 个字符的公司名称';
    if (formData.contact.trim().length < 2) errors.contact = '请输入联系人姓名';
    if (!phonePattern.test(formData.phone.trim())) errors.phone = '请输入有效的手机或座机号码';
    if (formData.email.trim() && !emailPattern.test(formData.email.trim())) errors.email = '请输入有效的电子邮箱';
    if (formData.need.trim().length < 10) errors.need = '请详细描述您的安全需求（至少 10 个字符）';
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    if (!turnstileToken) {
      setSubmitError('请先完成安全验证');
      return;
    }
    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${CONTACT_API_URL}/contact`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
          website: '',
          _subject: '官网收到新的安全咨询',
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result?.errors?.[0]?.message || '提交失败，请稍后重试');
      }

      setSubmitted(true);
      setFormData({ company: '', contact: '', phone: '', email: '', need: '' });
      setTurnstileToken('');
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : '提交失败，请稍后重试');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldErrors((prev) => {
      if (!prev[e.target.name]) return prev;
      const next = { ...prev };
      delete next[e.target.name];
      return next;
    });
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
            className="lg:col-span-4 flex flex-col gap-5 lg:h-full"
          >
            <div className="glass-card rounded-2xl p-5 lg:flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,229,255,0.08)] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="cn-ui-label text-[12px] text-[#7B8BA6] tracking-wide">公司地址</span>
              </div>
              <p className="text-[14px] text-[#E8EDF5]">广东省深圳市宝安区西乡华源科技创新园B座1区502</p>
              <p className="text-[13px] text-[#7B8BA6] mt-1">深圳市辉锐信息科技有限公司</p>
            </div>

            <div className="glass-card rounded-2xl p-5 lg:flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,229,255,0.08)] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="cn-ui-label text-[12px] text-[#7B8BA6] tracking-wide">联系电话</span>
              </div>
              <p className="text-[14px] text-[#7B8BA6]">18665355986</p>
            </div>

            <div className="glass-card rounded-2xl p-5 lg:flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,229,255,0.08)] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <span className="cn-ui-label text-[12px] text-[#7B8BA6] tracking-wide">电子邮箱</span>
              </div>
              <p className="text-[14px] text-[#7B8BA6]">ganqihui@phaeray.com</p>
            </div>

            <div className="glass-card rounded-2xl p-5 lg:flex-1">
              <div className="cn-ui-label text-[12px] text-[#7B8BA6] tracking-wide mb-2">服务范围</div>
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
            className="lg:col-span-8 lg:h-full"
          >
            <form onSubmit={handleSubmit} className="glass-card h-full rounded-2xl p-6 lg:p-8">
              <input type="hidden" name="_subject" value="官网收到新的安全咨询" readOnly />
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-px w-px opacity-0" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="contact-form-label block text-[13px] text-[#AAB8CC] tracking-wide mb-2">
                    公司名称 *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-form-control w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入公司名称"
                    minLength={2}
                    aria-invalid={Boolean(fieldErrors.company)}
                  />
                  {fieldErrors.company && <p className="mt-1 text-xs text-[#FF8A80]">{fieldErrors.company}</p>}
                </div>
                <div>
                  <label className="contact-form-label block text-[13px] text-[#AAB8CC] tracking-wide mb-2">
                    联系人 *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="contact-form-control w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入姓名"
                    minLength={2}
                    aria-invalid={Boolean(fieldErrors.contact)}
                  />
                  {fieldErrors.contact && <p className="mt-1 text-xs text-[#FF8A80]">{fieldErrors.contact}</p>}
                </div>
                <div>
                  <label className="contact-form-label block text-[13px] text-[#AAB8CC] tracking-wide mb-2">
                    联系电话 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-form-control w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入联系电话"
                    pattern="(?:1[3-9]\d{9}|0\d{2,3}[- ]?\d{7,8})"
                    aria-invalid={Boolean(fieldErrors.phone)}
                  />
                  {fieldErrors.phone && <p className="mt-1 text-xs text-[#FF8A80]">{fieldErrors.phone}</p>}
                </div>
                <div>
                  <label className="contact-form-label block text-[13px] text-[#AAB8CC] tracking-wide mb-2">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-form-control w-full px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                    placeholder="请输入邮箱地址"
                    aria-invalid={Boolean(fieldErrors.email)}
                  />
                  {fieldErrors.email && <p className="mt-1 text-xs text-[#FF8A80]">{fieldErrors.email}</p>}
                </div>
              </div>

              <div ref={turnstileRef} className="mb-5 min-h-[65px]" aria-label="安全验证" />

              <div className="mb-5">
                <label className="contact-form-label block text-[13px] text-[#AAB8CC] tracking-wide mb-2">
                  安全需求
                </label>
                <textarea
                  name="need"
                  required
                  value={formData.need}
                  onChange={handleChange}
                  className="contact-form-control w-full min-h-32 resize-y px-4 py-3 rounded-xl bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.2)] text-[14px] text-[#E8EDF5] placeholder-[#7B8BA6]/40 focus:outline-none focus:border-[rgba(0,229,255,0.3)] focus:shadow-[0_0_20px_rgba(0,229,255,0.06)] transition-all duration-300"
                  placeholder="请描述您遇到的安全问题、保护对象或希望了解的解决方案"
                  minLength={10}
                  maxLength={1000}
                  aria-invalid={Boolean(fieldErrors.need)}
                >
                </textarea>
                {fieldErrors.need && <p className="mt-1 text-xs text-[#FF8A80]">{fieldErrors.need}</p>}
              </div>

              {submitError && (
                <p role="alert" className="mt-4 text-sm text-[#FF8A80]">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={submitted || submitting}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] text-[#060B14] rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? (
                  <>提交中...</>
                ) : submitted ? (
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
