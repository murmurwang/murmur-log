import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import humanLoop from "../../../../public/images/arcfold/human-loop-1520.webp";
import continuousLearning from "../../../../public/images/arcfold/continuous-learning-1520.webp";
import humanLoopSmall from "../../../../public/images/arcfold/human-loop-760.webp";
import continuousLearningSmall from "../../../../public/images/arcfold/continuous-learning-760.webp";
import { PageShell } from "../../../components/SiteChrome";

const title = "Arcfold 希望在共同经历中持续学习，支持人的意图形成与实现";
const description = "Arcfold 是一个以促进人的意图形成与实现为目标，在共同经历中持续学习和改进的个人 AI 系统。";
const url = "https://murmurlog.com/projects/arcfold/introduction/";

export const metadata: Metadata = {
  title: `${title} · MurMur Log`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-11-04T07:07:57Z", authors: ["Murphy Wang"] },
};

export default function ArcfoldProject() {
  return (
    <PageShell section="projects">
      <article className="post shell">
        <header className="post-header">
          <Link className="breadcrumb" href="/#projects">← 开源项目</Link>
          <h1>{title}</h1>
          <p className="post-meta"><time dateTime="2026-11-03">2026.11.03</time> · Murphy Wang</p>
        </header>
        <div className="post-body">
<p>以 Coding Agent 为代表的任务型 Agent，正在承担越来越复杂的执行工作。Super Agent 进一步打破单次会话的限制，使 AI 能够持续响应事件变化、自主组织上下文并同时推进多项任务。这推动了人的第一次角色上移：<strong>从亲自执行和持续协调，转向作出决策与判断结果。</strong></p>
<p>随着更多执行工作被交给 AI，决策质量愈发重要：<strong>执行能力决定想法能落实到什么程度，决策能力则影响人能看见哪些可能、实现多大的改变。</strong></p>
<p>但决策并非从一开始就是清晰的。人常常从模糊的想法和感受出发，在交流与尝试中形成选择，通过行动获得反馈，再据此调整认识。我们把这个<strong>决策从无到有、付诸行动，并在反馈中持续发展的连续性过程，称为 Human Loop。</strong></p>
<figure className="article-figure"><a href="/images/arcfold/human-loop.png" target="_blank" rel="noopener noreferrer" aria-label="查看 Human Loop 循环图原图"><picture><source type="image/webp" srcSet={`${humanLoopSmall.src} 760w, ${humanLoop.src} 1520w`} sizes="(max-width: 800px) calc(100vw - 40px), 760px" /><Image src={humanLoop} alt="Human Loop：想法与感受、交流与尝试、形成决策、付诸行动、现实反馈、新的认识与选择，循环推进。" unoptimized loading="eager" fetchPriority="high" /></picture></a></figure>
<p>AI 已经具备支持 Human Loop 的基础能力。对话式 AI 能帮助人理清想法，引入新的知识与视角；能够调用工具的 Agent，则可以开展研究、制作原型，让设想得到实际检验。</p>
<p>然而，会思考、能执行还不够。要让这些基础能力持续支持 Human Loop，AI 还需要跟上共同经历带来的两方面变化：</p>
<ul>
<li>认知的递进：人不断积累经验、修正认识，后续工作也在此基础上推进，Agent 需要随之更新理解与判断。</li>
<li>协作方式的改进：人与 AI 在合作和反馈中逐渐发现更好的工作方法，Agent 需要主动将这些方法沉淀下来，用于后续行动，并根据效果继续调整。<strong>这两方面的变化能够持续积累，AI 才能在长期合作中越来越理解人和有效地帮助人。</strong></li>
</ul>
<figure className="article-figure"><a href="/images/arcfold/continuous-learning.png" target="_blank" rel="noopener noreferrer" aria-label="查看共同经历与持续改进图原图"><picture><source type="image/webp" srcSet={`${continuousLearningSmall.src} 760w, ${continuousLearning.src} 1520w`} sizes="(max-width: 800px) calc(100vw - 40px), 760px" /><Image src={continuousLearning} alt="共同经历带来认知积累与修正、发现更好的协作方式；Agent 更新理解与判断、沉淀并采用改进，用于下一次协作；新的经历与反馈回到共同经历。" unoptimized loading="eager" fetchPriority="auto" /></picture></a></figure>
<p>然而，在我们的实际使用中，这两方面的积累仍不可靠：已经形成的认识，未必影响后续执行中的取舍；已经纠正的做法，也可能在之后的工作中再次出现。<strong>共同经历在增加，AI 的理解与工作方式却未必随之改善。</strong></p>
<p>Arcfold 希望让这种改善能够持续发生，是<strong>一个以促进人的意图形成与实现为目标，在共同经历中持续学习和改进的个人 AI 系统。</strong> 通过支持完整的 Human Loop，Arcfold 希望推动人的第二次角色上移：从独自形成决策、再交给 AI 执行，走向借助 AI 扩展自身的决策能力、并获得更准确贯彻自身意图的长期支持。</p>
        </div>
      </article>
    </PageShell>
  );
}
