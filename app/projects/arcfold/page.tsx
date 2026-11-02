import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/SiteChrome";

const title = "Arcfold 希望从共同经历中学习，帮助人形成并实现自己的方向";
const description = "Arcfold 探索一种从共同经历中持续改进理解与行动的个人 AI 助手，帮助人逐渐形成并实现自己认可的方向。";
const url = "https://murmurlog.com/projects/arcfold/";

export const metadata: Metadata = {
  title: `${title} · MurMur Log`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-11-02T13:04:30Z", authors: ["Murphy Wang"] },
};

export default function ArcfoldProject() {
  return (
    <PageShell section="projects">
      <article className="post shell">
        <header className="post-header">
          <Link className="breadcrumb" href="/projects/">← 项目</Link>
          <h1>{title}</h1>
          <p className="post-meta"><time dateTime="2026-11-02">2026.11.02</time> · Murphy Wang</p>
        </header>
        <div className="post-body">
<section className="article-section">
<h2>出发点</h2>
<p>与 AI 的合作已经可以覆盖思考与执行：模糊的想法可以在对话中逐渐清晰，具体工作可以交由助手完成。两者结合，使 AI 有机会持续参与一个人从形成方向到付诸行动的过程。</p>
<p>这一过程中的目标并不总是预先确定。人可能被一个想法吸引，却还不知道它能通向哪里；也可能想改变现状，却说不清真正的阻碍。通过交流、尝试和现实反馈，人逐渐弄清自己想做什么、能做什么，并据此继续、调整或结束一条路径。我们把这个过程称为<strong>人的意图形成、行动与反馈循环（Human Loop）</strong>。</p>
<p className="process-line">模糊想法 → 暂定方向 → 探索与行动 → 现实反馈 → 确认、修正或结束方向 → 继续探索</p>
<p>然而，在以单次请求为中心的合作中，这个连续过程被拆成了分别交给不同会话的任务。用户需要持续连接各次工作的目的、背景和结果，并检查助手是否偏离。此前的交流、尝试和纠正，未必能减轻下一次合作的负担。</p>
<p>例如，我原本要比较 DeepSeek 与 GPT 模型加工历史资料、建立信息库的成本和后续使用效果，让助手挑选几个有区分度的实验节点。它却优先选择需要处理大量历史的节点，把范围扩大到整个系统的验证。当前子任务得到了响应，但整体目的没有约束具体选择。类似的问题还包括：已有要求未用于当前工作，方向改变后旧理解继续生效，同一种合作问题在纠正后再次出现。</p>
<p>这些失效共同指向一个缺口：<strong>共同经历尚未可靠地转化为后续判断与行动的依据。</strong> 要支持持续合作，助手需要把当前请求放回正在推进的事情中，利用已有目的与经验作出选择，再根据新的表达和现实结果修正理解与做法。</p>
</section>
<section className="article-section">
<h2>目标</h2>
<p>Arcfold 探索一种<strong>从共同经历中持续改进理解与行动的个人 AI 助手</strong>，帮助人逐渐形成并实现自己认可的方向。</p>
<p>它要回答的核心问题是：</p>
<blockquote><p><strong>如何让此前的交流、尝试与纠正，持续改善下一次帮助？</strong></p></blockquote>
<p>这要求系统在同一探索过程的不同阶段承担相应工作：</p>
<div className="article-table"><table><thead><tr><th scope="col">用户正在经历什么</th><th scope="col">系统需要做到什么</th></tr></thead><tbody><tr><td><strong>方向尚未形成</strong></td><td>联系个人经历与外部信息，帮助辨认问题、发现可能性，并找到可以核实或尝试的一步。</td></tr><tr><td><strong>已有暂定方向，正在推进</strong></td><td>理解当前工作服务的整体目的，据此确定要求与取舍，主动完成自己承担的部分，并检查交付是否支持下一步。</td></tr><tr><td><strong>出现新表达或现实反馈</strong></td><td>判断哪些理解仍然成立、哪些需要修正，使变化影响后续帮助，同时保留仍适用的经验。</td></tr></tbody></table></div>
<p>长期合作还需要改进方法：怎样寻找材料、理解需要、选择介入时机和承担分工，都应接受后续效果的检验。用户保有对方向与取舍的决定权，系统形成的理解始终允许被纠正。</p>
</section>
<section className="article-section">
<h2>用户价值</h2>
<p>上述能力最终需要体现为三种用户收益：</p>
<p><strong>更容易形成自己的判断。</strong> 从个人经历和外部信息中辨认与自己有关的可能性，有依据地选择、修改、排除或暂缓一个方向。</p>
<p><strong>更容易把想法带进现实。</strong> 助手按整体目的承担具体工作，交付能用于下一步的结果，减少用户反复指挥和检查偏离的负担。</p>
<p><strong>后续合作需要更少的重复投入。</strong> 已有经验能够继续发挥作用，新的表达与结果能够修正旧理解，用户因而少做重复解释、纠错和重新磨合。</p>
</section>
<section className="article-section">
<h2>价值检验</h2>
<p>Arcfold 要验证的差异，是<strong>共同经历能否实际改变后续帮助中的判断、取舍、执行与合作方式</strong>。以下四项分别检验，均须以行为和结果为依据。</p>
<p><strong>① 共同经历能否帮助用户形成或辨认方向？</strong></p>
<p><strong>要证明：</strong>个人经历与外部信息之间的联系，能够帮助用户获得新认识，或更有依据地判断已有方向。</p>
<p><strong>通过标准：</strong>联系具有具体的个人依据和可靠的外部依据；用户能说明因此形成、修改或排除了什么判断，以及为什么；进一步核实或尝试的一步变得具体。</p>
<p>更多选项、复述背景或一句“有道理”均不足以通过。保留用户事前的不确定，后来形成的方向不能倒填为当时已有的意图。</p>
<p><strong>② 整体目的能否约束助手的执行？</strong></p>
<p><strong>要证明：</strong>用户只提出当前一步时，此前明确的目的、取舍和约束仍能影响具体工作。</p>
<p><strong>通过标准：</strong>整体目的实际改变选材、范围、顺序或交付要求；助手完成自己承担的部分，结果支持原定的下一步判断或行动；依据不足时，指出缺口和必要补充。</p>
<p>前述实验选点案例可直接检验这一点：选择应服务于 DeepSeek 与 GPT 的建库成本及后续效果比较，并说明所需历史范围、投入与取舍。大规模节点可以入选，但须说明必要性。复述目的、列出计划或自报完成，不能代替实际取舍与交付。</p>
<p><strong>③ 新表达与现实反馈能否改变后续帮助？</strong></p>
<p><strong>要证明：</strong>积累形成的理解能够被修正，用户不会被固定在过去的目标、偏好或系统的旧推断中。</p>
<p><strong>通过标准：</strong>新证据出现后，在后续独立请求中，失效前提停止影响建议和行动，仍有效的经验继续发挥作用；再次读取旧记录，也不会恢复已纠正的错误。</p>
<p>涉及现实尝试时，还须记录尝试是否发生、结果带来了什么信息，以及它如何改变下一次判断。当轮承认纠正或改写一条记录，均不足以通过。</p>
<p><strong>④ 合作经验能否改善新任务中的帮助方式？</strong></p>
<p><strong>要证明：</strong>一次合作中形成的改进，能够在另一件事情上减少同类障碍，并随条件调整。</p>
<p><strong>通过标准：</strong>先根据真实问题形成并固定改进做法，再在未参与改进的新任务中检验：障碍减少，判断或交付改善，负担未转移给用户；不适用时能够变通。</p>
<p>对照方案须保留相同的历史与反馈，并允许更新普通记忆。只有在此基础上仍有收益，才能将差异归于额外的方法改进；同一题重答变好，不能代替新任务验证。</p>
</section>
        </div>
      </article>
    </PageShell>
  );
}
