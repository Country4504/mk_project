import { ShieldAlert, FileLock, DoorOpen, FileKey, Factory, Usb } from 'lucide-react';

export const borderGuardProducts = [
  { slug: 'endpoint-dlp', icon: ShieldAlert, title: '终端防泄密', subtitle: 'ENDPOINT DLP', desc: '对终端设备进行全面管控，防止企业核心数据通过各种途径泄露。监控文件操作、网络传输、外设使用等行为，实时预警异常操作。', features: ['文件操作审计', '网络外发管控', '屏幕水印追溯', '异常行为预警'] },
  { slug: 'document-protection', icon: FileLock, title: '文档防扩散', subtitle: 'DOCUMENT PROTECTION', desc: '对企业内部文档流转进行精细化管控，确保文档在授权范围内安全流转，防止未经授权的复制、传播和外发。', features: ['文档权限管理', '安全区域划分', '外发审批控制', '版本追溯管理'] },
  { slug: 'admission-gateway', icon: DoorOpen, title: '准入网关', subtitle: 'ADMISSION GATEWAY', desc: '对接入企业网络的终端进行身份认证和安全合规检查，确保只有合规设备才能接入网络，防止非法设备带来的安全风险。', features: ['身份认证', '合规检查', '网络隔离', '访客管理'] },
  { slug: 'document-encryption', icon: FileKey, title: '文档加密', subtitle: 'DOCUMENT ENCRYPTION', desc: '采用透明加密技术，对企业的核心文档进行强制加密保护。加密文档在授权环境中自动解密使用，非授权环境无法打开。', features: ['透明加解密', '多格式支持', '权限细粒度控制', '离线办公支持'] },
  { slug: 'industrial-whitelist', icon: Factory, title: '工控安全白名单', subtitle: 'INDUSTRIAL CONTROL SECURITY', desc: '面向工业控制系统的安全防护方案，通过白名单机制确保工控环境只运行经过认证的程序，防止恶意软件和未授权操作。', features: ['程序白名单', '工控协议审计', '环境完整性保护', '安全基线管理'] },
  { slug: 'usb-control', icon: Usb, title: '企业 U 盘控制', subtitle: 'USB CONTROL', desc: '对企业 USB 存储设备进行全面管控，实现 U 盘的注册授权、加密使用、读写控制和操作审计，防止通过移动存储介质泄密。', features: ['U盘注册授权', '加密 U 盘管理', '读写权限控制', '使用日志审计'] },
] as const;

export const borderGuardHref = (slug: string) => `/border-guard/${slug}`;
