# 六六手作

纯静态 React + TypeScript + Vite 网站，中文界面，无数据库、登录、后台或表单收集。

## 本地开发

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

## 内容维护

- `src/data/works.ts`：添加作品；`id` 为 URL 标识，`order` 为升序，`featured` 决定首页精选（最多三件）。价格支持数字或文字。图片、视频和平台链接填写可直接访问的 HTTPS 文件或页面地址。
- `src/data/site_settings.ts`：填写首屏图、关于照片、可信的关于正文 HTML、B 站和闲鱼链接。
- 未填素材显示占位，媒体加载失败可重试，未填平台链接保持禁用。
- 字体在 `public/fonts/` 自托管，不预加载；授权见同目录 LICENSE.md。

## 静态部署

部署 `dist/`。构建会生成 `/works/index.html`、`/about/index.html`、`/contact/index.html` 和 `404.html`，可直接访问。新增作品会自动生成 `works/:id/index.html`。
任意未知路由应由托管服务返回 `404.html`（或 SPA 回退到 `index.html`），页面会显示中文 404。

本站不收集留言，不在站内收款。外部平台链接使用独立标签页打开。
