#  个人学习TodoList案例
基于Vue 3实现的我的世界风格待办事项应用

功能预览、试用（已经打包成静态文件并部署到线上）

[![访问网站](https://img.shields.io/badge/访问网站-点击进入-blue)](https://reach1020.github.io/TodoList_Minecraft_Style/)

[![技术文档](https://img.shields.io/badge/技术文档-点击进入-blue)](TECH_DOC.md)

![QQ20260315-174554-HD](READMEImage/TodoListPreview.gif)

## 1.本地部署

### 1.1 环境要求

- Node.js (v19+ 推荐)
- npm/pnpm/yarn (任意包管理器)

### 1.2 部署步骤

#### 1.2.1 克隆仓库

```powershell
git clone https://github.com/reach1020/TodoList_Minecraft_Style.git

cd TodoList_Minecraft_Style
```

#### 1.2.2 安装依赖

```powershell
npm install
pnpm i
```

#### 1.2.3 启动开发服务器

```powershell
npm run dev
pnpm dev
```

## 2.技术栈

- 核心框架：Vue 3
- 样式实现：HTML5 + CSS3
- 交互增强：vuedraggable（拖拽排序）、自定义 Vue 指令 
- 数据存储：localStorage（本地持久化） 
- 脚本规范：JavaScript ES6+
- 工程化工具：Vite  (项目构建 / 打包 / 热更新)
- 版本管理：Git
- 运行环境：Node.js  + pnpm (依赖安装、终端命令执行)

## 3.功能特性
1. MC 像素风格 UI：还原我的世界视觉风格，包含像素化按钮、红石质感复选框、3D 文字效果

2. Todolist任务管理：添加 / 编辑 / 删除任务、标记任务完成 / 未完成
3. 任务筛选：筛选已完成任务、一键清除已完成 / 所有任务
4. 拖拽排序：支持任务项拖拽调整顺序（基于 vuedraggable）
5. 本地持久化：使用 localStorage 保存任务数据，刷新 / 重启不丢失
6. 交互体验：编辑任务自动聚焦、hover 动效、完成态视觉反馈、空状态提示
7. 适配性：基础响应式布局，兼容主流桌面浏览器

## 3.项目目录结构

```
TodoList/
├── .vscode/                 # VS Code 编辑器配置（如工作区设置、插件推荐）
├── dist/                    # 生产构建产物目录（执行 build 后生成 !忽略）
├── docs/                    # 项目文档目录（用于部署静态网页至github）
├── node_modules/            # 项目依赖包（由 pnpm/npm 安装生成 !忽略）
├── public/                  # 静态资源目录（会被原封不动复制到 dist 根目录）
├── READMEImage/             # 存放 README.md 中用到的图片资源
├── src/                     # 源代码目录（!!核心开发目录）
│   ├── assets/              # 项目静态资源
│   │   ├── fonts/           # 字体文件
│   │   └── images/          # 图片文件
│   ├── components/          # 可复用 Vue 组件
│   │   ├── FooterInfo.vue   # 底部信息组件
│   │   ├── TodoFooter.vue   # Todo 列表底部组件
│   │   ├── TodoHeader.vue   # Todo 列表头部组件
│   │   ├── TodoItem.vue     # 单个 Todo 项组件
│   │   └── TodoList.vue     # Todo 列表容器组件
│   ├── App.vue              # 根组件（整个应用的入口组件）
│   └── main.js              # 应用入口文件（创建 Vue 实例、挂载到 DOM）
├── .gitignore               # Git 忽略文件配置（指定不提交的文件/目录）
├── index.html               # HTML 入口文件（Vite 会以此为模板构建）
├── package.json             # 项目配置文件（依赖管理、脚本命令等）
├── README.md                # 项目说明文档
├── TECH_DOC.md              # 项目技术文档
└── vite.config.js           # Vite 配置文件（构建、插件、代理等配置）
```

