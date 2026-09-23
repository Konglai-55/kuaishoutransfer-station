const destination = "http://06re.lnfni.cn";

const advantages: Array<[string, string, string]> = [
  ["01", "安全可靠", "清晰展示入口和目标地址，访问前可先核对域名与页面用途。"],
  ["02", "极速响应", "移动端页面轻量加载，入口信息集中呈现，减少寻找服务的步骤。"],
  ["03", "真实说明", "服务内容、访问方式和注意事项公开展示，方便用户自行判断。"],
  ["04", "贴心售后", "如需订单或服务支持，请通过目标平台提供的官方客服渠道咨询。"]
];

const packages: Array<[string, string, string, string, string[]]> = [
  ["入门", "基础点赞", "适合新手起步", "100 赞", ["100个点赞", "24小时内完成", "支持常见作品类型"]],
  ["热销", "热门点赞", "快速提升人气", "500 赞", ["500个点赞", "6-12小时内完成", "按目标平台规则执行"]],
  ["进阶", "爆款点赞", "打造热门作品", "1000 赞", ["1000个点赞", "3-6小时内完成", "适合阶段性推广"]],
  ["旗舰", "至尊点赞", "全网热门推荐", "5000 赞", ["5000个点赞", "1-3小时内完成", "可咨询目标平台客服"]]
];

const feedback: Array<[string, string, string]> = [
  ["张", "张小凡", "用了快手点赞之后，入口清楚，服务进度也比较容易查看。"],
  ["李", "李欣怡", "客服响应比较快，下单后能及时看到处理状态，体验很顺畅。"],
  ["王", "王思远", "之前找入口总要反复确认，这次页面把目标地址直接展示出来了。"],
  ["陈", "陈雅婷", "作为新手创作者，先了解说明再继续操作，整个流程比较安心。"],
  ["刘", "刘浩宇", "页面访问稳定，服务说明也比较完整，后续查找入口很方便。"],
  ["赵", "赵雪晴", "入口简单明了，手机上打开和确认地址都很快。"]
];

const guarantees: Array<[string, string]> = [
  ["24小时售后", "客服时间以目标平台公布的信息为准，遇到订单问题可及时咨询。"],
  ["订单说明", "套餐数量、处理时间和具体规则以目标平台最终页面为准。"],
  ["隐私保护", "请勿在中转页填写密码、验证码等敏感信息，谨防冒用页面。"],
  ["高效执行", "入口页只负责信息展示和跳转，具体执行由外部目标平台完成。"],
  ["地址确认", "点击前可查看完整目标域名，确认无误后再打开外部页面。"],
  ["长期支持", "如需长期合作或批量服务，请直接联系目标平台的客服团队。"]
];

const faqs: Array<[string, string]> = [
  ["下单后多久能完成点赞？", "页面只提供外部平台入口，具体处理时间以目标平台的套餐说明、订单量和作品情况为准。"],
  ["点赞是真实的吗？会不会被封号？", "请以目标平台公开的服务说明和快手平台规则为准。任何第三方服务都无法在中转页保证账号结果或平台处置风险。"],
  ["支持哪些作品类型？", "支持范围以目标平台页面公布的服务类型为准，进入前请先阅读相关规则和限制。"],
  ["支付方式有哪些？安全吗？", "支付方式和安全提示以目标平台最终页面为准。中转页不会要求你提交支付密码、验证码或账号密码。"],
  ["如果效果不理想可以退款吗？", "退款条件、时限和审核方式以目标平台的服务条款为准，请在操作前先确认相关规则。"],
  ["如何联系客服？", "请进入目标平台后，通过其页面展示的在线客服、QQ或邮箱等官方渠道联系。"]
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "快手点赞平台中转站", description: "快手点赞、涨粉服务入口和目标地址确认。", inLanguage: "zh-CN" },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
  ]
};

export default function HomePage() {
  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="shell">
        <div className="search" aria-label="平台入口搜索提示"><span className="search-badge" aria-hidden="true">✓</span><span className="search-text">快手点赞平台入口</span><span className="search-icon" aria-hidden="true" /><span className="search-more" aria-hidden="true">⋮</span></div>
        <div className="brand" aria-label="快手点赞平台"><span className="brand-mark" aria-hidden="true">ϟ</span><span>快手点赞</span></div>

        <section id="home" className="hero" aria-labelledby="page-title">
          <div className="status"><span className="status-dot" aria-hidden="true" /><span>24小时在线 · 快速响应</span></div>
          <h1 id="page-title"><span className="headline-gradient">快手点赞</span><span className="headline-dark">24小时快手涨粉</span><span className="headline-gradient">在线自助平台</span></h1>
          <p className="intro">专业提供<strong>快手点赞购买</strong>、涨粉服务，<br />安全快速稳定，助力您的快手账号人气提升。</p>
          <div className="actions"><a className="primary" href={destination} target="_blank" rel="noopener noreferrer">点击前往地址</a><div className="hint">即将打开外部平台 · 目标地址：06re.lnfni.cn</div></div>
        </section>

        <section id="advantages" className="content-section" aria-labelledby="advantages-title">
          <div className="section-heading"><span className="eyebrow">WHY US</span><h2 id="advantages-title">为什么选择我们</h2><p>四大核心优势</p><span className="section-note">专业、安全、高效，为您的快手账号赋能。</span></div>
          <div className="advantage-grid">{advantages.map(([index, title, text]) => <article className="advantage-card" key={title}><span className="card-index">{index}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section id="packages" className="content-section" aria-labelledby="packages-title">
          <div className="section-heading"><span className="eyebrow">POPULAR PACKAGES</span><h2 id="packages-title">热门套餐</h2><p>快手点赞购买套餐</p><span className="section-note">灵活选择，具体数量、时间和规则以目标平台页面为准。</span></div>
          <div className="package-grid">{packages.map(([tag, title, subtitle, amount, details]) => <article className="package-card" key={title}><span className="package-tag">{tag}</span><h3>{title}</h3><p className="package-subtitle">{subtitle}</p><strong className="package-amount">{amount}</strong><ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul><a className="package-link" href={destination} target="_blank" rel="noopener noreferrer">立即前往</a></article>)}</div>
        </section>

        <section id="reviews" className="content-section" aria-labelledby="reviews-title">
          <div className="section-heading"><span className="eyebrow">USER FEEDBACK</span><h2 id="reviews-title">用户口碑</h2><p>用户反馈展示</p><span className="section-note">以下内容用于展示页面信息结构，实际评价请以真实、授权的用户反馈为准。</span></div>
          <div className="review-grid">{feedback.map(([initial, name, quote]) => <article className="review-card" key={name}><div className="review-person"><span>{initial}</span><strong>{name}</strong></div><p>“{quote}”</p><time dateTime="2026-08-20">2026-08-20</time></article>)}</div>
        </section>

        <section className="promo" aria-labelledby="promo-title"><div><span className="eyebrow">限时特惠</span><h2 id="promo-title">立即提升您的快手人气</h2><p>选择快手点赞，让您的作品获得更多曝光与互动；具体效果以平台规则和作品情况为准。</p></div><a className="promo-link" href={destination} target="_blank" rel="noopener noreferrer">立即前往购买 ↗</a></section>

        <section id="guarantees" className="content-section" aria-labelledby="guarantees-title"><div className="section-heading"><span className="eyebrow">SERVICE NOTES</span><h2 id="guarantees-title">六大保障 安心无忧</h2><p>我们承诺提供清晰的服务说明与支持</p></div><div className="guarantee-grid">{guarantees.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section id="faq" className="faq" aria-labelledby="faq-title"><div className="section-heading"><span className="eyebrow">FAQ</span><h2 id="faq-title">常见问题</h2><p>您可能关心的问题</p><span className="section-note">任何疑问，欢迎进入目标平台后联系其客服。</span></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

        <section id="contact" className="contact" aria-labelledby="contact-title"><span className="eyebrow">CONTACT</span><h2 id="contact-title">联系我们</h2><p>随时为您服务。请进入目标平台，通过其公开的客服渠道获取帮助。</p><a className="contact-link" href={destination} target="_blank" rel="noopener noreferrer">打开在线客服入口 ↗</a></section>

        <div className="trust" aria-label="服务说明"><span>清晰入口</span><span>隐私保护</span><span>7×24h</span></div>
        <footer><nav aria-label="页面导航"><a href="#home">首页</a><a href="#advantages">核心优势</a><a href="#packages">热门套餐</a><a href="#reviews">用户反馈</a><a href="#faq">常见问题</a></nav><span>快手点赞 · 24小时快手涨粉在线自助平台</span></footer>
      </div>
    </main>
  );
}
