# openclawai.club 周 UV 破 1000 运营方案（可执行版）

目标：4 周内把 openclawai.club 周 UV 稳定 > 1000（可复用的“内容→收录→分发→回流”机器）。

## 0. 关键指标（每周复盘）
- 周 UV（总目标）
- Google 收录页数（site:openclawai.club）
- GSC：曝光/点击/平均排名（Top 20 query）
- 站内：/docs 与 /blog 的访问占比

## 1. 这周必须完成（P0）
1) GSC 收录闭环
- 站点验证（DNS TXT 最稳）
- 提交 sitemap.xml
- 每天观察 Pages / Coverage

2) 站内 SEO 基础
- robots.txt + sitemap.xml（已做）
- 全站 metadata（已做基础版）
- 为 2–3 篇“支柱页”补足内容与内链

3) 内容供给（每周最低配额）
- Blog：3 篇（热点/观点 1 + 实战/教程 2）
- Docs：2 篇（可复现步骤，带命令）
- Changelog：持续记录（每次关键变更必写）

4) 分发矩阵（每篇必做）
- 公众号：发文（或草稿→发布）
- X：Thread（5–9 条）
- 社区：Reddit/HN/掘金/知乎（择一）

## 2. 内容策略（能带搜索流量的写法）
- 主题选择：优先“问题型关键词”
  - OpenClaw 安装/部署/Telegram 接入/Cloudflare Workers/OpenNext
  - DeepV Gateway/Claude Opus 4.6/模型降级链
  - 微信草稿箱 API/排版/封面比例/稳定管线
- 文章结构：结论先行 + 可复现步骤 + FAQ（3–5 个）
- 内链：每篇至少链接 2 个相关页面（/docs <-> /blog 互相导流）

## 3. 增长杠杆（最快拉 UV 的 3 招）
1) 支柱页（Pillar Pages）
- /docs/openclaw-install
- /docs/deepv-gateway
- /docs/fallback-chain

2) 可复制资源（利于收藏/转发）
- 配置模板、检查清单、部署命令合集

3) 分发节奏
- 热点当天发 Blog（抢收录）
- 公众号当天发（强曝光）
- 次日补 Docs（吃长尾）

## 4. 执行清单（我来跑）
- 站内：补页面、补内链、生成 sitemap、保证 build/deploy 通过
- 内容：把公众号稿同步到 /blog（带 slug），并生成对应用于分享的摘要/Thread
- 监控：每周给一份 GSC + UV 复盘摘要

