export function ContactLinks() {
  return (
    <div className="contact-links" aria-label="联系方式">
      <details className="contact-item" name="contact">
        <summary aria-label="查看微信号" title="微信">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14.8 10.2c0-3.4-3-6.2-6.6-6.2S1.5 6.8 1.5 10.2c0 1.9 1 3.6 2.6 4.7l-.7 2.3 2.6-1.3c.7.2 1.4.3 2.2.3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M22.5 14.7c0-2.9-2.6-5.2-5.8-5.2s-5.8 2.3-5.8 5.2 2.6 5.2 5.8 5.2c.7 0 1.3-.1 1.9-.3l2.5 1.1-.7-2c1.3-1 2.1-2.4 2.1-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <circle cx="5.9" cy="8.6" r=".9" fill="currentColor" /><circle cx="10.4" cy="8.6" r=".9" fill="currentColor" />
            <circle cx="14.7" cy="13.4" r=".8" fill="currentColor" /><circle cx="18.7" cy="13.4" r=".8" fill="currentColor" />
          </svg>
        </summary>
        <div className="contact-card">
          <span className="contact-label">微信</span>
          <p className="contact-value">MurphyWangWZT</p>
          <button type="button" data-copy-contact="MurphyWangWZT">复制微信号</button>
          <span className="contact-feedback" role="status" aria-live="polite" />
        </div>
      </details>
      <details className="contact-item" name="contact">
        <summary aria-label="查看电话号码" title="电话">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
          </svg>
        </summary>
        <div className="contact-card">
          <span className="contact-label">电话</span>
          <p className="contact-value"><a href="tel:+8613029230181">+86 13029230181</a></p>
          <button type="button" data-copy-contact="+8613029230181">复制电话号码</button>
          <span className="contact-feedback" role="status" aria-live="polite" />
        </div>
      </details>
      <a className="contact-github" href="https://github.com/murmurwang" target="_blank" rel="noopener noreferrer" aria-label="打开 GitHub 个人主页" title="GitHub">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
        </svg>
      </a>
    </div>
  );
}
