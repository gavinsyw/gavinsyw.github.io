# Academic personal site (Jekyll)

Personal academic homepage built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme, hosted on GitHub Pages.

## 本地运行

```bash
cd gavinsyw.github.io
bundle install
bundle exec jekyll serve
```

浏览器打开 <http://localhost:4000>。

## 项目结构

| 路径 | 说明 |
|------|------|
| `_config.yml` | 站点与 Jekyll Scholar 等配置；`icon` 为 favicon 表情（如 🎓、📄） |
| `_layouts/` | 页面模板：`about.html`（首页）、`bib.html`（单条文献）、`default.html`、`page.html`、`post.html` 等 |
| `_includes/` | 公共片段：`news.html`（时间轴新闻）、`selected_papers.html`（Featured Works）、`social.html`、`header/footer` 等 |
| `_pages/` | 主页面：`about.md`（首页）、`publications.md`（论文列表）、`projects.md`、`cv.md` |
| `_sass/` | 样式：`_base.scss`（About / News / Featured Works / Publications）、`_variables.scss`、`_layout.scss` |
| `_bibliography/papers.bib` | 论文 BibTeX；`selected=true` 的条目会出现在首页 Featured Works |
| `_data/coauthors.yml` | 合作者姓名 → 个人页链接，用于 `bib.html` 中的作者链接 |
| `_news/` | 新闻条目（layout: post），首页 Recent News 取最新若干条 |

## 定制说明

### 首页 About

- **文案与头像**：编辑 `_pages/about.md` 正文；头像由 front matter 的 `profile.image` 指定（如 `self_photo.jpg`，对应 `assets/img/` 下）。
- **Research 标签**：在 `about.md` 的 `research_keywords` 里增减或修改。
- **Education**：在 `about.md` 的 `education` 列表里修改学位、学校、专业。
- **区块间距**：在 `_sass/_variables.scss` 中可调 `$section-spacing`；Contact 区块上边距在 `_sass/_layout.scss` 的 `.contact-section`。

### Featured Works（首页）

- 由 **BibTeX** 驱动：在 `_bibliography/papers.bib` 中给需要展示的条目加上 `selected = {true}`。
- 每条可设 `thumbnail = {covers/xxx.jpg}`，图片放在 `assets/img/` 下；无 `thumbnail` 时使用占位图。
- 列表模板：`_includes/selected_papers.html`；单条样式由 `_layouts/bib.html` 与 `_sass/_base.scss` 中的 `.publications.featured-works` 控制。

### Publications 页（论文列表）

- 列表来自 `papers.bib`，按年份分组，时间轴样式。
- 样式：`_sass/_base.scss` 中 `.publications:not(.featured-works)` 及 `.timeline-year-group` 等变量（如 `$timeline-line`、`$timeline-padding`）可调对齐与间距。

### Recent News

- 在 `_news/` 下新增或修改 Markdown 文章（layout: post）；首页显示条数由 `_config.yml` 的 `news_limit` 控制。
- 时间轴样式在 `_includes/news.html` 和 `_sass/_base.scss`（`.news-timeline`、`.timeline-node` 等）。

### 其他

- **Projects**：在导航中已隐藏（在对应 collection 或 nav 配置中设 `nav: false`）；项目内容仍在 `_projects/` 与 `_pages/projects.md`。
- **合作者链接**：编辑 `_data/coauthors.yml`，格式见 Jekyll Scholar 文档。
- **会议/期刊链接**：若需在论文条目中为 venue 添加链接，可在 `_data/` 下新增 `venues.yml`，并在 `_layouts/bib.html` 中通过 `site.data.venues[entry.abbr]` 使用（当前未配置则仅显示缩写）。

## 依赖与部署

- 依赖见 `Gemfile`；部署到 GitHub Pages 时使用仓库默认的 Jekyll 构建即可（或本地 `bundle exec jekyll build` 后推送 `_site`，视仓库设置而定）。
