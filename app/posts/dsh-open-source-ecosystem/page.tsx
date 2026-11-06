import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/SiteChrome";

const title = "对 DSH 做开源生态的理解";
const description = "DSH 建设 Agent 的通用能力，社区开发者将领域知识和经验做成应用：我对这场分工与循环的理解。";
const url = "https://murmurlog.com/posts/dsh-open-source-ecosystem/";

export const metadata: Metadata = {
  title: `${title} · MurMur Log`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-11-06T12:03:11Z", authors: ["Murphy Wang"] },
};

export default function DshOpenSourceEcosystem() {
  return (
    <PageShell section="thoughts">
      <article className="post shell">
        <header className="post-header">
          <Link className="breadcrumb" href="/#thoughts">← 个人思考</Link>
          <h1>{title}</h1>
          <p className="post-meta"><time dateTime="2026-11-06">2026.11.06</time> · Murphy Wang</p>
        </header>
        <div className="post-body">
          <p>Deepseek 的核心目标肯定是做成 AGI，因此也应该从这个角度看 DSH 的开源生态。</p>
          <p>关于做 AGI，记得梁文峰表达过三个观点：</p>
          <ul>
            <li>AGI 足够大，所以最重要的是做成它。（目标单一、明确、一以贯之）</li>
            <li>AGI 足够大，所以分一杯羹也够了。（不限制具体分哪杯羹）</li>
            <li>以做成 AGI 为目标，有些事有人做好了就不需要亲自做了。（但只选自己该做的事）</li>
          </ul>
          <p><strong>目标可以高度集中，实现目标的工作则可以广泛分工。</strong></p>
          <p><strong>因此，我对 DSH 开源的</strong>核心理解是：<strong>DeepSeek 和应用层分工，共同扩大 AI 为人发挥的价值，做成 AGI 大家分。</strong></p>
          <p><strong>DSH 的开源是一种分工：DSH 建设 Agent 的通用能力，社区开发者将领域知识和经验做成应用。</strong></p>
          <p>如果扩大 AI 为人发挥的价值是 AGI 的一种定义，<strong>DSH 和社区开发者之间的分工就形成了一种指向 AGI 的正循环</strong>：应用让 Agent 进入更多真实场景，对 Agent 的通用能力提出新需求；通用能力的完善又支撑更多应用，扩大 AI 能产生的价值。</p>
          <p>要让这个循环成立，分散的应用实践需要能够回到 DSH 团队。 所以 DSH 的产品岗要求 “连接开源社区”。这样，DSH 可以从具体问题中识别共性缺口、为 Harness 和模型迭代提供线索、再利用真实场景检验。同时不需要亲自解决细分领域的用户需，专业的人做专业的事。</p>
          <p>这个循环对 DeepSeek 有什么用？我的一个猜想是，这种和应用层之间的循环可能在这个阶段对模型迭代格外有用。过去模型迭代主要依靠互联网已有数据和可验证对错的场景。而如果 AGI 意味着广泛帮助到更多人，模型的迭代则要在现实场景中，开始学习人类真实的习惯和需求。</p>
          <p>其次，这个循环可能会让更多应用选择付费调用 DeepSeek 模型形成收入；模型调用量增加可能带来上游的算力资源。</p>
          <p>总的来说，DeepSeek 不以取得即时的价值作为最核心的目标，而是先搞定那个能带来价值的点，类似把蛋糕做大的思路，我觉得还是很值得学习的。</p>
        </div>
      </article>
    </PageShell>
  );
}

