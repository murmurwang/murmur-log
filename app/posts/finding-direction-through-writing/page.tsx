import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/SiteChrome";

const title = "在表达中找回方向";
const description = "用语音记录感受和困惑，在表达中重新看清自己，以及真正想去的方向。";
const url = "https://murmurlog.com/posts/finding-direction-through-writing/";

export const metadata: Metadata = {
  title: `${title} · MurMur Log`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-11-02T11:35:54Z", authors: ["Murphy Wang"] },
};

export default function FindingDirectionThroughWriting() {
  return (
    <PageShell>
      <article className="post shell">
        <header className="post-header">
          <Link className="breadcrumb" href="/#thoughts">← 个人思考</Link>
          <h1>{title}</h1>
          <p className="post-meta"><time dateTime="2026-11-02">2026.11.02</time> · Murphy Wang</p>
        </header>
        <div className="post-body">
          <p>最近发现，经常用语音输入写工作复盘和碎碎念，是一种很适合我的工作管理方式。把正在做的事、遇到的困惑和当下的感受说出来，能让我从混乱的执行中退一步，重新看清自己在做什么，以及真正想达成什么。</p>
          <p>之前尝试过设定目标、管理时间、列待办事项，却经常陷入自我控制的两难：完成了目标，也不一定感到满足，焦虑并没有因此消失；没有完成，反而多了一层自责。目标似乎也管不住自己，总有另一股力量拉着我改变方向。</p>
          <p>语音复盘给了这些拉扯一个表达的机会。说着说着，我会重新看见：原本为什么要做这件事，后来被什么吸引，又在哪里偏离了方向。有些目标需要继续，有些可能已经变了。把这些变化说清楚，比催促自己继续执行，更能帮助我找回下一步。</p>
          <p>再借助 AI，把口语整理成逻辑清楚的小文章，发到个人博客上，一天里零散的工作就有了一个可以回看的结果。发表这个小小的动作，也能带来一点正反馈。偶尔，一些原本模糊的想法，还会在表达中变得清楚，甚至长出新的灵感。</p>
          <p>我想开始更规律地更新博客里的工作复盘。它最有价值的地方，是让我在忙乱中留出一个时刻，看看自己走到了哪里，还想往哪里去。这也是我觉得它有一点“正念”的原因：先看见自己当下的状态，方向才有机会重新清楚起来。</p>
        </div>
      </article>
    </PageShell>
  );
}
