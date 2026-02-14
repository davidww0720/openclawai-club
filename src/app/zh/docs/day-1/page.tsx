import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function ZhDay1() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh" day={1}>
        <h1>Day 1｜1 小时跑通 OpenClaw + Telegram（网站精简版）</h1>
        <p>
          目标：跑通“能对话”的最小闭环，并知道配置/日志在哪里。完整小白版详见飞书文档。
        </p>
        <h2>验收清单</h2>
        <ul>
          <li>Telegram bot 能回复</li>
          <li>VPS 上 OpenClaw 正常运行</li>
          <li>知道配置与日志位置</li>
        </ul>
        <h2>步骤概览</h2>
        <ol>
          <li>SSH 登录 VPS</li>
          <li>安装 Node.js（推荐 nvm）</li>
          <li>安装 OpenClaw</li>
          <li>创建 Telegram bot（BotFather）</li>
          <li>验证对话</li>
        </ol>
        <PrevNext locale="zh" day={1} />
      </DocsLayout>
    </SiteShell>
  );
}
