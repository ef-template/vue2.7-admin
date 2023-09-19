# 项目简介
一心堂后台通用模板（Vue2.7 + Element2 + TS + Vite）

# 环境要求
node >= 16.20

# 包管理
pnpm（如果未安装请先安装：npm install -g pnpm）

# 安装依赖
```bash
pnpm i
```

# 启动项目
```bash
pnpm run dev
```
# 构建项目
```bash
pnpm run build
```

# git规范
注意：每次写代码前务必执行 git pull 
<br/>
commit时请安装以下步骤执行
1. git pull （如果出现冲突先执行git stash缓存本地代码，在git pull拉取代码，最后执行git stash pop弹出缓存并解决冲突文件后执行第2步骤）（或者借助vscode等编辑器处理冲突）
2. git add .
3. pnpm run commit 
4. git push

# Vue2.7说明
本项目使用vue2.7版本，注意事项请参照官方文档[https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html)

# Element-Ui

# 路由与布局

# 其他插件

## prettier



# The Last Naruto

![The Last Naruto Logo](./public/logo.webp)

[中文](https://juejin.cn/post/7122016953593495560)

# Features

- 👍 Support IE11 by [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

- ⚡️ [Vue 2.7](https://github.com/vuejs/vue), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
  - IE11([partial support](./src/components/icons/README.md))

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config

# Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
  - IE11([partial support](./src/components/icons/README.md))
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router@3](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/luvletterldl/the-last-naruto/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit luvletterldl/the-last-naruto my-vue2.7
cd my-vue2.7
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

# Acknowledgement

[vitesse-lite](https://github.com/antfu/vitesse-lite)

[ie11CustomProperties](https://github.com/nuxodin/ie11CustomProperties)
