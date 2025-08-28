# 我的中文博客

一个简洁、美丽的中文博客页面，采用现代化设计和响应式布局。

## 🌟 特性

- **现代化设计**: 采用简洁的设计风格，注重用户体验
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **中文优化**: 专为中文内容优化的字体和排版
- **平滑动画**: 丰富的交互动画和过渡效果
- **无框架依赖**: 纯HTML、CSS和JavaScript实现

## 📱 页面结构

- **导航栏**: 固定顶部导航，支持移动端汉堡菜单
- **主页横幅**: 渐变背景的欢迎区域
- **文章列表**: 网格布局展示博客文章
- **关于我**: 个人介绍和技能展示
- **联系方式**: 社交媒体链接
- **页脚**: 版权信息

## 🎨 设计特点

### 颜色主题
- 主色调: 渐变紫色 (#6366f1 到 #8b5cf6)
- 背景色: 纯白和浅灰搭配
- 文字颜色: 深灰色系，确保良好的可读性

### 字体
- 使用 Google Fonts 的 Noto Sans SC
- 针对中文显示优化
- 多种字重支持

### 动画效果
- 页面加载时的淡入动画
- 鼠标悬停的交互效果
- 平滑的滚动和过渡
- 移动端菜单切换动画

## 🚀 快速开始

1. 克隆或下载项目文件
2. 在浏览器中打开 `index.html`
3. 开始浏览您的博客！

## 📁 文件结构

```
new_blog/
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript交互文件
└── README.md           # 项目说明
```

## 🔧 自定义指南

### 修改个人信息
在 `index.html` 中找到以下区域并修改：
- 导航栏标题
- 主页横幅文本
- 关于我部分的内容
- 联系方式链接

### 添加文章
在 `articles-grid` 区域添加新的 `article-card` 元素：

```html
<article class="article-card">
    <div class="article-image">
        <div class="image-placeholder">
            <i class="fas fa-your-icon"></i>
        </div>
    </div>
    <div class="article-content">
        <div class="article-meta">
            <span class="date">发布日期</span>
            <span class="category">分类</span>
        </div>
        <h3 class="article-title">文章标题</h3>
        <p class="article-excerpt">文章摘要...</p>
        <a href="#" class="read-more">阅读全文</a>
    </div>
</article>
```

### 修改颜色主题
在 `styles.css` 的 `:root` 选择器中修改CSS变量：

```css
:root {
    --primary-color: #your-color;
    --primary-dark: #your-dark-color;
    /* 其他颜色变量... */
}
```

### 更换字体
修改 HTML 头部的字体链接和 CSS 中的字体族：

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## 📱 响应式设计

博客页面在以下设备上都能完美显示：
- 桌面电脑 (1200px+)
- 平板电脑 (768px - 1199px)
- 手机 (320px - 767px)

## 🌐 浏览器兼容性

支持所有现代浏览器：
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🚀 部署到 GitHub Pages

1. 将项目上传到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 您的博客将在 `https://your-username.github.io/repository-name` 上线

### Git 命令示例

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 创建中文博客页面"

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/your-username/your-repo-name.git

# 推送到 GitHub
git push -u origin main
```

## 📝 待办事项

- [ ] 添加文章详情页面
- [ ] 实现文章搜索功能
- [ ] 添加评论系统
- [ ] 集成CMS后台管理
- [ ] 添加RSS订阅功能
- [ ] 添加 SEO 优化
- [ ] 集成 Google Analytics

## 🤝 贡献

欢迎提交问题和改进建议！如果您想要贡献代码：

1. Fork 这个项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

MIT License - 可自由使用和修改

## 📞 联系方式

如有问题，请通过以下方式联系：
- 邮箱: your-email@example.com
- GitHub: [您的GitHub用户名]

---

**享受您的博客之旅！** ✨
