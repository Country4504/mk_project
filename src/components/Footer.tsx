import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(0,229,255,0.06)] bg-[#040810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#2979FF] flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#060B14]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-sm font-bold font-[family-name:var(--font-display)] text-[#E8EDF5]">PHAERAY</div>
                <div className="text-[10px] text-[#7B8BA6]">辉锐信息科技</div>
              </div>
            </div>
            <p className="text-[13px] text-[#7B8BA6] leading-relaxed max-w-xs">
              专注企业信息安全管理体系与技术架构建设，提供一站式安全服务。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-mono text-[#00E5FF]/60 tracking-[0.15em] uppercase mb-4">服务领域</h4>
            <ul className="space-y-2">
              {['安全咨询', '解决方案', '安全运营', '人才培养', '边界卫士'].map((item, i) => (
                <li key={i}>
                  <span className="text-[13px] text-[#7B8BA6] hover:text-[#00E5FF] transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[11px] font-mono text-[#00E5FF]/60 tracking-[0.15em] uppercase mb-4">解决方案</h4>
            <ul className="space-y-2">
              {['云安全', '数据安全', '应用安全', '网络安全', '终端安全', '运维安全', '移动安全'].map((item, i) => (
                <li key={i}>
                  <span className="text-[13px] text-[#7B8BA6] hover:text-[#00E5FF] transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-mono text-[#00E5FF]/60 tracking-[0.15em] uppercase mb-4">公司信息</h4>
            <ul className="space-y-2">
              <li><span className="text-[13px] text-[#7B8BA6]">深圳市辉锐信息科技有限公司</span></li>
              <li><span className="text-[13px] text-[#7B8BA6]">联系电话：待补充</span></li>
              <li><span className="text-[13px] text-[#7B8BA6]">电子邮箱：待补充</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[rgba(0,229,255,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#7B8BA6]/60">
            &copy; {new Date().getFullYear()} 深圳市辉锐信息科技有限公司 版权所有
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[12px] text-[#7B8BA6]/60 hover:text-[#00E5FF] transition-colors cursor-default">
              粤ICP备xxxxxxxx号
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
