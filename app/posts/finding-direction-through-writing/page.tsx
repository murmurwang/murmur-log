import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/SiteChrome";

const title = "用语音输入写工作复盘有助于回归整体目标";
const description = "我发现，经常用语音输入写工作复盘和碎碎念，是一种很正念的工作管理方式。";
const url = "https://murmurlog.com/posts/finding-direction-through-writing/";

export const metadata: Metadata = {
  title: `${title} · MurMur Log`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-11-02T11:35:54Z", authors: ["Murphy Wang"] },
};

export default function FindingDirectionThroughWriting() {
  return (
    <PageShell section="thoughts">
      <article className="post shell">
        <header className="post-header">
          <Link className="breadcrumb" href="/thoughts/">← 个人思考</Link>
          <h1>{title}</h1>
          <p className="post-meta"><time dateTime="2026-11-02">2026.11.02</time> · Murphy Wang</p>
        </header>
        <div className="post-body">
          <p>我发现，经常用语音输入写工作复盘和碎碎念，是一种很正念的工作管理方式。</p>
          <p>之前尝试过设定目标、管理工作时间、设定 to do 等等，发现都会陷入自我控制的那种很痛苦的两难状态：如果目标达成了，也不能带给我满足感或者消除我的焦虑；如果目标没有达成，反而会极大加重我的焦虑。而且会出现一种目标管不住自己的状态，因为有另外一股力量总拉扯着我改变自己的目标。</p>
          <p>而用语音输入写类似小作文一样的工作复盘和碎碎念，它有一个好处：能够让你在迷失在混乱的执行工作当中、感觉丢失了方向的时候，重新看到当前的全貌和真正想达成的目标。</p>
          <p>与此同时，把这些口语表达借助 AI 整理成逻辑更加整齐的小文章，还可以发到个人博客上。通过一个对外输出和发表的动作，让自己每天小的工作能够得到一种轻微的正反馈。在表达的过程当中，偶尔还会出现新的灵感。我觉得可以开始尝试规律地更新博客当中的工作复盘。</p>
        </div>
      </article>
    </PageShell>
  );
}
