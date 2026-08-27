# 梦剧场官方发布页

纯 HTML/CSS/JavaScript 静态站点，可直接部署到 GitHub Pages。

## 本地预览

直接打开 `index.html`，或在当前目录运行：

```bash
python3 -m http.server 4174
```

然后访问 <http://localhost:4174>。

## 修改内容

日常内容只需要编辑 [`site.config.js`](./site.config.js)：

- `siteName`：站点名称
- `tagline`：首屏介绍
- `primaryUrl`：主站地址
- `creatorUrl`：创作页地址
- `stats`：数据或能力指标
- `entrances`：官方入口和备用入口
- `notice`：最新公告

页面结构在 `index.html`，视觉样式在 `styles.css`。

## 发布到 GitHub Pages

### 方式一：用户主页

仓库必须命名为：

```text
你的GitHub用户名.github.io
```

发布地址为：

```text
https://你的GitHub用户名.github.io/
```

### 方式二：普通项目

仓库可以命名为：

```text
meng-theatre-pages
```

发布地址为：

```text
https://你的GitHub用户名.github.io/meng-theatre-pages/
```

### 推送命令

先在 GitHub 创建一个空仓库，不要勾选自动创建 README。然后执行：

```bash
cd /Users/bytedance/ai_workspace/ai_sexxx/meng-theatre-pages
git init
git add .
git commit -m "feat: add official landing page"
git branch -M main
git remote add origin git@github.com:你的GitHub用户名/仓库名.git
git push -u origin main
```

### 开启 Pages

1. 打开 GitHub 仓库。
2. 进入 `Settings`。
3. 左侧选择 `Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/(root)`。
6. 点击 `Save`。
7. 等待一至三分钟，刷新 Pages 页面查看发布地址。

## 自定义域名

1. 在仓库根目录创建名为 `CNAME` 的文件，内容只写域名，例如：

```text
go.example.com
```

2. 在域名服务商处添加 CNAME 解析：

```text
go -> 你的GitHub用户名.github.io
```

3. 回到 GitHub Pages 设置，填写自定义域名并开启 `Enforce HTTPS`。

## 发布前检查

- 替换 `site.config.js` 中全部 `example.com`
- 确认主入口和备用入口可访问
- 将示例指标替换为真实数据，或保留能力型描述
- 手机和桌面浏览器各检查一次
- 不要在仓库中提交账号密码、Token 或 `.env`
