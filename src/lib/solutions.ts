export type Solution = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  scenarios: string[];
  value: string;
  images: string[];
};

export const solutions: Solution[] = [
  { id: 'cloud-security', title: '云安全', subtitle: 'Cloud Security', desc: '以云防护平台为核心，覆盖网站监测、网站防护、漏洞检测、服务质量监测、安全事件监测、DDoS 防护、CDN 加速与可视化安全防护。', scenarios: ['网站监测与防护', '漏洞与安全事件检测', 'DDoS 防护与 CDN 加速'], value: '从基础信息采集到人工监测服务，形成云上持续监测、防护和响应闭环，帮助客户降低网站攻击与业务中断风险。', images: ['/Solution/云安全解决方案.png'] },
  { id: 'data-security', title: '数据安全', subtitle: 'Data Security', desc: '围绕终端安全区域和数据全流程，提供 U 盘、磁盘、外设加密，网络传输控制，以及非法外带、审批外带、出差外带的授权管控。', scenarios: ['分类、识别、监控、保护、处置', '自然语言与指纹识别', '关键词、正则、词典组合检测'], value: '通过“分类—识别—监控—保护—处置”闭环精准发现敏感数据，并以授权外带和全流程审计降低数据泄露风险。', images: ['/Solution/数据安全解决方案01.png', '/Solution/数据安全解决方案02.png'] },
  { id: 'application-security', title: '应用安全', subtitle: 'Application Security', desc: '以 WAF 为核心，覆盖 Web 攻击、恶意代码、未授权访问、应用合规和 Web 应用交付等关键防护场景。', scenarios: ['SQL 注入、XSS、Web 恶意扫描防护', 'CSRF、Cookie 篡改与网站盗链防护', 'URL 访问控制、HTTP 合规与文件上传控制'], value: '在应用入口集中识别和拦截常见攻击，同时兼顾访问控制、合规检查、应用加速和负载均衡，保障 Web 业务稳定交付。', images: ['/Solution/应用安全解决方案.png'] },
  { id: 'network-security', title: '网络安全', subtitle: 'Network Security', desc: '以新一代防火墙为核心，构建高性能、可视化、智能化的网络防护体系，兼顾 IPv4/IPv6 双栈和多样化合规要求。', scenarios: ['多核平台并行处理与高效转发', '未知威胁防御与 APT 联动沙箱检测', '深度识别管控、内容过滤与数据中心可视化'], value: '提升高级防护能力的同时洞察网络业务情况，实现威胁检测、精细管控和安全运营可视化，优化运维管理效率。', images: ['/Solution/网络安全解决方案.png'] },
  { id: 'endpoint-security', title: '终端安全', subtitle: 'Endpoint Security', desc: '覆盖文档操作、打印、屏幕、设备、移动存储、通信、邮件、网页、网络流量、资产和应用程序等终端行为。', scenarios: ['文档操作与打印管控', '屏幕、设备及移动存储控制', '通信、网页、网络流量和资产管理'], value: '将终端上的文件、设备、网络和应用行为纳入统一管控，并通过审计报表形成可追溯的终端安全管理体系。', images: ['/Solution/终端安全解决方案.png'] },
  { id: 'operations-security', title: '运维安全', subtitle: 'Operations Security', desc: '以堡垒机为核心连接总部员工、分支机构员工、第三方代理人员和厂商支持人员，统一管控云主机、服务器、网络设备、数据库和企业应用。', scenarios: ['支持公有云与私有云', '安全运维公有云资源', '全球云加速与 API 扩展'], value: '将用户访问与 IT 资产集中纳入堡垒机审计和权限控制，支持多类人员安全接入，降低特权运维风险并提升运维效率。', images: ['/Solution/运维安全解决方案.png'] },
  { id: 'mobile-security', title: '移动安全', subtitle: 'Mobile Security', desc: '通过沙箱技术隔离个人数据与企业数据，覆盖数据存储、数据传输和数据访问安全，支持互联网与企业内网之间的安全连接。', scenarios: ['个人数据与企业数据分离', 'VPN、AppTunnel 及 TCP/UDP 流量接入', '基于业务权限的应用访问与可控分享'], value: '在移动设备上实现企业数据安全加密存储、传输和访问控制，兼顾移动办公体验与企业数据可控性。', images: ['/Solution/移动安全解决方案.png'] },
];
