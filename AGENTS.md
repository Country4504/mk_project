# AGENTS.md - 辉锐信息科技官网

## 项目概览
深圳市辉锐信息科技有限公司（Phaeray）官方网站，高端网络安全/信息安全科技公司官网，深色科技主题。

## 技术栈
- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI**: shadcn/ui + Tailwind CSS 4
- **Animation**: Framer Motion + GSAP (ScrollTrigger)
- **Smooth Scroll**: Lenis
- **Canvas**: 原生 Canvas API（粒子网络动画）
- **Icons**: Lucide React

## 目录结构
```
src/
├── app/
│   ├── globals.css          # 全局样式、CSS 变量、动画定义
│   ├── layout.tsx           # 根布局（Navbar + Footer）
│   └── page.tsx             # 首页（组合所有板块）
├── components/
│   ├── ui/                  # shadcn/ui 组件库
│   ├── Navbar.tsx           # 导航栏（滚动毛玻璃效果 + 锚点跳转）
│   ├── HeroSection.tsx      # 首屏 Hero（Canvas 粒子网络 + 数据流）
│   ├── CapabilitiesSection.tsx  # 能力总览（SOC 大屏风格）
│   ├── SolutionsSection.tsx # 解决方案（交互式安全矩阵，7 大方案）
│   ├── BorderGuardSection.tsx   # 边界卫士（sticky scroll 叙事，6 大产品）
│   ├── SecurityOpsSection.tsx   # 安全运营中心（模拟 SOC 大屏）
│   ├── CasesSection.tsx     # 成功案例（行业卡片，三段式表达）
│   ├── PartnersSection.tsx  # 合作伙伴
│   ├── AboutSection.tsx     # 关于我们（时间线 + 能力矩阵）
│   ├── ContactSection.tsx   # 联系我们（表单 + 信息）
│   └── Footer.tsx           # 页脚
```

## 开发命令
- 安装依赖: `pnpm install`
- 开发: `pnpm dev`
- 构建: `pnpm build`
- 启动: `pnpm start`
- 类型检查: `pnpm ts-check`
- Lint: `pnpm lint`

## 设计规范
- 详见 `DESIGN.md`
- 主色: 电光青 `#00E5FF`，背景: 深石墨黑 `#060B14`
- 玻璃态卡片: `.glass-card` 类
- 渐变文字: `.gradient-text` 类
- 网格背景: `.grid-bg` 类
- 扫描线: `.animate-scan-h` / `.animate-scan-v`
- 雷达扫描: `.animate-radar`

## 高级交互模块
1. **Hero 首屏**: Canvas 粒子网络动画，鼠标交互连线，深度层次
2. **边界卫士**: Framer Motion useScroll + useTransform 驱动的 sticky scroll 叙事
3. **安全运营中心**: 模拟 SOC 大屏，实时日志流、雷达扫描、风险条动画

## 注意事项
- 所有组件使用 `'use client'` 指令（涉及动画/交互）
- 字体使用 Google Fonts CN 域名 `fonts.googleapis.cn`
- 端口通过环境变量 `DEPLOY_RUN_PORT` 读取
- 联系方式中电话/邮箱标注"待补充"，不编造数据
- 公司信息为"深圳市辉锐信息科技有限公司"，不是"艾迈克集团"
