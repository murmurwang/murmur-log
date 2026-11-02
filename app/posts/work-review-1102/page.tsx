import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/SiteChrome";

const title = "研究方法的不断细化让我偏离了最初的研究目标";
const description = "研究 DeepSeek Harness 时，方法怎样逐渐偏离了目标，以及目标如何在与 AI 的协作中淡出。";
const url = "https://murmurlog.com/posts/work-review-1102/";

export const metadata: Metadata = {
  title: `${title} · MurMur Log`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    publishedTime: "2026-11-02T10:38:24Z",
    authors: ["Murphy Wang"],
  },
};

export default function WorkReview1102() {
  return (
    <PageShell section="reviews">
      <article className="post shell">
        <header className="post-header">
          <Link className="breadcrumb" href="/reviews/">← 工作复盘</Link>
          <h1>{title}</h1>
          <p className="post-meta"><time dateTime="2026-11-02">2026.11.02</time> · Murphy Wang</p>
        </header>
        <div className="post-body">
          <p>DeepSeek Harness 团队发布 Super-agent 架构讨论并开源实现后，我发现，他们还公开了一部分开发讨论和决策记录。这让研究有了更具体的入口：除了看系统怎么实现，还能追踪他们为什么做这些工作、考虑过哪些方案，以及怎样作出选择。</p>
          <p>这次研究最想回答的是：他们是否也在探索我关心的问题，尝试过什么，与我的项目有什么异同，哪些值得借鉴或进一步交流。了解他们的协作方式和系统架构，都是为了让这个对照更有依据。</p>
          <p>最初的思路是自下而上：找到最小的工作记录，提炼目标，再逐层归并，尝试还原整个项目的目标体系。由于没有找到完整的公开 Issue 记录，我转向了记录设计讨论和决策的 Agent Note。同时，还让 AI 按系统部件做另一套分类，看看这些工作分别落在哪里。</p>
          <p>这里踩了第一个坑：还没充分看清团队已有的组织方式，就先让 AI 自己归纳。后来才发现，仓库已经通过代码包组提供了一套部件划分，可以直接作为研究起点。前面自行搭出的层级，反而增加了核对和返工。</p>
          <p>第二个坑更深一些。随着分析展开，注意力逐渐转向分类是否合理、目标是否遗漏、层级是否完整。即使这些都做好了，最初的问题仍可能没有答案：哪些工作与我的项目有关？它们会改变我的什么判断？下一步因此有什么不同？</p>
          <p><strong>两个坑其实连在一起：原本用来辅助研究的方法，慢慢变成了研究的中心。</strong> 第一个坑，是先搭自己的框架，再回头理解公开材料；第二个坑，是不断完善这个框架，却没有及时回到项目对照。材料整理得越来越完整，与最初问题的联系却越来越弱。</p>
          <p>这也让我重新理解了他们为什么重视清楚地陈述问题、记录决策依据。在这次研究中，我交给 AI 的任务逐渐变成了提炼、分类和归并，后续讨论也围绕这些结果展开。<strong>“这项分析会怎样帮助我判断自己的项目”，没有持续进入每一步的要求。</strong> AI 接到的局部任务越来越清楚，整项研究的目的却逐渐淡出了讨论。目标就是这样丢掉的。</p>
        </div>
      </article>
    </PageShell>
  );
}
