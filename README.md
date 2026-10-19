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
| `_includes/` | 公共片段：`news.html`（时间轴新闻）、`research.html`（交互式 Research）、`social.html`、`header/footer` 等 |
| `_pages/` | 主页面：`about.md`（首页）、`publications.md`（论文列表）、`projects.md`、`cv.md` |
| `_sass/` | 样式：`_base.scss`（About / News / Research / Publications）、`_variables.scss`、`_layout.scss` |
| `_bibliography/papers.bib` | 论文 BibTeX；`research_field` 控制首页 Research 论文分类 |
| `_data/coauthors.yml` | 合作者姓名 → 个人页链接，用于 `bib.html` 中的作者链接 |
| `_news/` | 新闻条目（layout: post），首页 Recent News 取最新若干条 |

## 定制说明

### 首页 About

- **文案与头像**：编辑 `_pages/about.md` 正文；头像由 front matter 的 `profile.image` 指定（如 `self_photo.jpg`，对应 `assets/img/` 下）。
- **Education**：在 `about.md` 的 `education` 列表里修改学位、学校、专业；`icon` 指定相对 `assets/img/` 的学校徽标路径。来源记录在 `assets/img/universities/sources.txt`。
- **Work Experience**：在 `about.md` 的 `work_experience` 列表里修改职位（`title`）、时间（`period`）、团队（`group`）、机构（`organization`）、地点（`location`）和徽标（`icon`）。显示于 Education 之后，沿用两行文字和 48px 徽标布局。
- **区块间距**：在 `_sass/_variables.scss` 中可调 `$section-spacing`；Contact 区块上边距在 `_sass/_layout.scss` 的 `.contact-section`。

### Research（首页）

- 用 `_pages/about.md` 的 `research: true` 开启。四个方向的名称和固定 ID 定义在 `_data/research_fields.yml`。
- 在 `_bibliography/papers.bib` 中填写 `research_field`（方向 ID）即可将论文加入首页 Research。列表显示完整的 `title`；`project_name` 可保留作可选项目备注，不影响首页展示。`selected` 不再决定首页展示。
- `research_field` 使用以下 ID，多个方向用分号或逗号分隔，例如 `research_field = {infrastructure; robotics}`：

| ID | 方向 |
|----|------|
| `infrastructure` | Infrastructure for Next-Gen Wireless Systems |
| `wellbeing` | Wireless for Human Wellbeing |
| `appliances` | Wireless-Enabled Smart Home Appliances |
| `robotics` | Mobile Soft Robotics |

```bibtex
project_name = {Your project name},
research_field = {infrastructure},
```

- 悬停或键盘聚焦物体后，网页按 `research_field` 精确匹配，按年份从新到旧显示完整论文标题、会议/期刊和年份。Venue 优先使用 `abbr`，否则使用 `journal` / `booktitle`；论文标题链接到 Publications 页对应论文。
- 未填写元数据的论文仍显示在 Publications 页；无匹配项目时显示待补充提示。
- 模板：`_includes/research.html`、`_layouts/research_entry.html`；交互：`assets/js/research.js`；样式：`_sass/_base.scss` 的 `.research-section`。场景为 AI 生成的写实客厅照片（`assets/img/research-living-room-v3.png`），通过 SVG 裁切照片中的四个物体实现交互：天花板传感器（infrastructure）、沙发上的人物（wellbeing）、架子上的微波炉（appliances）、地下塑料管道中的无足硅胶蠕虫机器人（robotics）。悬停或键盘聚焦时物体略微放大并发光，同时显示方向名称和论文列表；触屏设备支持轻触。离开物体后保留结果，方便点击论文链接。四个物体始终显示实线白色轮廓提示可交互，支持触屏和键盘；场景内无固定文字、编号或额外方向按钮；悬停或键盘聚焦时浮动面板显示方向名称。选择物体后在论文列表上方显示方向名称。系统开启减少动态效果时关闭过渡。

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

柔性机器人视觉参考：[RFact / Nature Communications 2025](https://www.nature.com/articles/s41467-025-62313-9)，Fig. 5 的管内爬行演示。地下住宅剖面为概念性应用场景。图片编辑提示词保存在 `assets/img/research-living-room-v3.prompt.txt`。
