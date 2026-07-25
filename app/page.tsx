"use client";
/* eslint-disable @next/next/no-img-element -- Pre-compressed local WebP assets preserve the supplied portrait and certificate exactly. */

import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "tong-quan", label: "Tổng quan" },
  { id: "nang-luc", label: "Năng lực" },
  { id: "kinh-nghiem", label: "Kinh nghiệm" },
  { id: "du-an", label: "Dự án" },
  { id: "chung-chi", label: "Chứng chỉ" },
];

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg
    aria-hidden="true"
    className="arrow-icon"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14m-5-5 5 5-5 5"} />
  </svg>
);

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("tong-quan");
  const [navIndicator, setNavIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));

    const updateScrollState = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, progress))),
      );

      let currentSection = navItems[0].id;
      const activationLine = window.innerHeight * 0.35;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      const activeLink = nav?.querySelector<HTMLElement>(
        `[data-section="${activeSection}"]`,
      );

      if (!nav || !activeLink) return;
      setNavIndicator({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  return (
    <main>
      <div className="page-progress" aria-hidden="true" />

      <section className="hero" id="tong-quan" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#tong-quan" aria-label="Về đầu trang">
            Phạm Quang Vinh
          </a>

          <nav
            className="desktop-nav"
            aria-label="Điều hướng chính"
            ref={navRef}
          >
            <span
              className="nav-glider"
              aria-hidden="true"
              style={{
                width: `${navIndicator.width}px`,
                transform: `translateX(${navIndicator.left}px)`,
              }}
            />
            {navItems.map(({ id, label }) => (
              <a
                data-section={id}
                className={activeSection === id ? "is-active" : undefined}
                href={`#${id}`}
                aria-current={activeSection === id ? "page" : undefined}
                key={id}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#lien-he">
            Liên hệ <Arrow />
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="editorial-index hero-reveal delay-1">
              <span>01</span>
              <i />
            </div>

            <h1 className="hero-title hero-reveal delay-2" id="hero-title">
              <span>Phạm Quang</span>
              <span>Vinh</span>
            </h1>

            <p className="hero-role hero-reveal delay-3">
              Chuyên viên xử lý dữ liệu &amp; tự động hóa
            </p>

            <p className="hero-intro hero-reveal delay-4">
              Biến quy trình kho vận phức tạp thành hệ thống dữ liệu rõ ràng,
              nhanh và chính xác.
            </p>

            <div className="hero-actions hero-reveal delay-5">
              <a className="button button-primary" href="#nang-luc">
                Xem hồ sơ <Arrow />
              </a>
              <a className="text-link" href="#lien-he">
                Liên hệ <Arrow />
              </a>
            </div>

            <dl className="metrics hero-reveal delay-5" aria-label="Thành tựu nổi bật">
              <div>
                <dt>
                  <strong>6</strong>
                </dt>
                <dd>năm kinh nghiệm</dd>
              </div>
              <div>
                <dt>
                  <strong>70</strong>
                  <sup>%</sup>
                </dt>
                <dd>thời gian được cắt giảm</dd>
              </div>
              <div>
                <dt>
                  <strong>150K</strong>
                  <sup>+</sup>
                </dt>
                <dd>dòng dữ liệu</dd>
              </div>
              <div>
                <dt>
                  <strong>10K</strong>
                  <sup>+</sup>
                </dt>
                <dd>SKU được quản lý</dd>
              </div>
            </dl>

            <div className="hero-progress" aria-hidden="true">
              <span />
              <i />
            </div>
          </div>

          <div className="portrait-stage" aria-label="Ảnh chân dung Phạm Quang Vinh">
            <div className="portrait-gold-rule" aria-hidden="true" />
            <div className="portrait-blue" aria-hidden="true" />
            <div className="portrait-mask">
              <img
                src="/images/pham-quang-vinh-cutout.png"
                alt="Phạm Quang Vinh"
                width="1024"
                height="1536"
              />
            </div>
            <div className="portrait-markers" aria-hidden="true">
              <span>01</span>
              <i />
              <span>02</span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-note" aria-hidden="true">
          Scroll to explore
        </div>
      </section>

      <div className="motion-marquee" aria-hidden="true">
        <div>
          <span>DATA OPERATIONS</span>
          <i>✦</i>
          <span>WAREHOUSE AUTOMATION</span>
          <i>✦</i>
          <span>AI VISION</span>
          <i>✦</i>
          <span>PROCESS EXCELLENCE</span>
          <i>✦</i>
          <span>DATA OPERATIONS</span>
          <i>✦</i>
          <span>WAREHOUSE AUTOMATION</span>
          <i>✦</i>
          <span>AI VISION</span>
          <i>✦</i>
          <span>PROCESS EXCELLENCE</span>
          <i>✦</i>
        </div>
      </div>

      <section className="manifesto section-shell" id="nang-luc">
        <div className="section-kicker reveal" data-reveal>
          <span>02</span>
          <p>Năng lực cốt lõi</p>
        </div>

        <div className="manifesto-grid">
          <h2 className="section-display reveal" data-reveal>
            Từ dữ liệu thô
            <br />
            đến <em>quyết định rõ ràng.</em>
          </h2>

          <div className="manifesto-copy reveal" data-reveal>
            <p>
              Gần 6 năm làm việc cùng dữ liệu và vận hành kho giúp tôi hiểu một
              hệ thống tốt không chỉ cần đúng - mà còn phải đủ nhanh, trực quan
              và dễ sử dụng trong thực tế.
            </p>
            <p>
              Tôi tập trung chuyển đổi quy trình thủ công thành luồng tự động,
              bán tự động; kết nối dữ liệu giữa các bộ phận và biến báo cáo phức
              tạp thành tín hiệu hành động cho người quản lý.
            </p>
          </div>
        </div>

        <div className="capability-grid">
          <article className="capability-card capability-featured reveal" data-reveal>
            <span className="card-index">01 / Automation</span>
            <h3>Tự động hóa quy trình</h3>
            <p>
              VBA Excel, SAP Scripting, PowerShell UI và ERP cho các tác vụ nhập
              liệu, đối chiếu và đồng bộ lặp lại.
            </p>
            <div className="capability-stamp">
              <strong>70%</strong>
              <span>thời gian được cắt giảm</span>
            </div>
          </article>

          <article className="capability-card reveal" data-reveal>
            <span className="card-index">02 / Data Operations</span>
            <h3>Xử lý dữ liệu quy mô lớn</h3>
            <p>
              Phân tích, kiểm soát và báo cáo gần 150.000 dòng dữ liệu với hơn
              10.000 SKU.
            </p>
            <ul>
              <li>Excel &amp; SAP</li>
              <li>Kiểm kê &amp; hao hụt</li>
              <li>Đối soát liên phòng ban</li>
            </ul>
          </article>

          <article className="capability-card reveal" data-reveal>
            <span className="card-index">03 / Intelligence</span>
            <h3>AI Agent &amp; AI Vision</h3>
            <p>
              Tự động hóa những tác vụ phức tạp và ứng dụng nhận diện hình ảnh
              cho linh kiện cơ khí.
            </p>
            <div className="card-orbit" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </article>

          <article className="capability-card reveal" data-reveal>
            <span className="card-index">04 / Visualization</span>
            <h3>Dashboard &amp; báo cáo</h3>
            <p>
              Trực quan hóa dữ liệu nhằm phát hiện rủi ro sớm và hỗ trợ quyết
              định nhanh, chính xác hơn.
            </p>
            <div className="mini-chart" aria-hidden="true">
              <span style={{ height: "32%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "46%" }} />
              <span style={{ height: "82%" }} />
              <span style={{ height: "68%" }} />
              <i />
            </div>
          </article>

          <article className="capability-card capability-code reveal" data-reveal>
            <span className="card-index">05 / Systems</span>
            <h3>Xây dựng hệ thống dữ liệu</h3>
            <p>
              Phát triển công cụ quản lý và trích xuất báo cáo với Java, Python,
              TypeScript, Vue và React.
            </p>
            <div className="code-line">
              <span>data</span>
              <i>→</i>
              <span>automation</span>
              <i>→</i>
              <span>impact</span>
            </div>
          </article>
        </div>
      </section>

      <section className="impact-band" aria-label="Giá trị tạo ra">
        <div className="section-shell impact-grid">
          <p className="impact-eyebrow reveal" data-reveal>
            Giá trị không nằm ở số lượng báo cáo.
          </p>
          <blockquote className="reveal" data-reveal>
            Giá trị nằm ở việc giúp đội ngũ nhìn thấy vấn đề{" "}
            <em>trước khi nó trở thành tổn thất.</em>
          </blockquote>
          <div className="impact-mark reveal" data-reveal aria-hidden="true">
            70
            <sup>%</sup>
          </div>
        </div>
      </section>

      <section className="experience section-shell" id="kinh-nghiem">
        <div className="section-kicker reveal" data-reveal>
          <span>03</span>
          <p>Kinh nghiệm &amp; học vấn</p>
        </div>

        <div className="experience-header">
          <h2 className="section-display reveal" data-reveal>
            Kinh nghiệm được đo bằng
            <br />
            <em>tác động thực tế.</em>
          </h2>
          <p className="reveal" data-reveal>
            Kết hợp hiểu biết vận hành kho với kỹ năng dữ liệu để xây dựng giải
            pháp phù hợp với công việc hằng ngày.
          </p>
        </div>

        <div className="timeline">
          <article className="timeline-row reveal" data-reveal>
            <div className="timeline-period">
              <span>2025</span>
              <i />
              <span>Hiện tại</span>
            </div>
            <div className="timeline-place">
              <span>Leggett &amp; Platt (Bàu Bàng)</span>
              <h3>Warehouse Controller</h3>
              <p>Quản lý vận hành kho &amp; phát triển hệ thống dữ liệu</p>
            </div>
            <ul>
              <li>
                Xây dựng hệ thống Bin Location, quy trình SOP và quản lý xuất -
                nhập - tồn kho nguyên vật liệu, kho thành phẩm.
              </li>
              <li>
                Xây dựng quy trình tạo đơn hàng, soạn hàng và xuất hàng từ lệnh
                sản xuất (Work Order).
              </li>
              <li>
                Kiểm soát độ chính xác tồn kho với gần 150.000 dòng dữ liệu.
              </li>
              <li>
                Tự động hóa báo cáo chênh lệch tồn kho và tỷ lệ hao hụt hàng phế
                theo từng đơn hàng sản xuất.
              </li>
              <li>
                Theo dõi tiến độ xuất hàng, sắp xếp container theo từng target
                của đơn hàng.
              </li>
              <li>
                Xây dựng thư viện tra cứu linh kiện bằng AI Vision và đồng bộ dữ
                liệu liên phòng ban, rút ngắn quy trình nhập liệu thủ công.
              </li>
            </ul>
          </article>

          <article className="timeline-row reveal" data-reveal>
            <div className="timeline-period">
              <span>2020</span>
              <i />
              <span>2025</span>
            </div>
            <div className="timeline-place">
              <span>Công ty TNHH ECCO (Việt Nam)</span>
              <h3>Warehouse Controller</h3>
              <p>Kiểm soát kho, dữ liệu và tự động hóa vận hành</p>
            </div>
            <ul>
              <li>Quản lý và đối soát dữ liệu cho hơn 10.000 SKU.</li>
              <li>
                Tự động hóa các thao tác nhập liệu thủ công, rút ngắn thời gian
                xử lý và giảm lỗi vận hành.
              </li>
              <li>
                Xây dựng hệ thống Bin Card, hỗ trợ giảm thiểu chênh lệch tồn
                kho giữa hệ thống và thực tế.
              </li>
              <li>
                Theo dõi xuất - nhập kho, kiểm kê và phối hợp xử lý sai lệch dữ
                liệu cùng các phòng ban liên quan.
              </li>
            </ul>
          </article>

          <article className="timeline-row timeline-education reveal" data-reveal>
            <div className="timeline-period">
              <span>2018</span>
              <i />
              <span>2020</span>
            </div>
            <div className="timeline-place">
              <span>Cao đẳng FPT Polytechnic</span>
              <h3>Công nghệ thông tin</h3>
              <p>Chuyên ngành Xử lý dữ liệu (Data Processing)</p>
            </div>
            <div className="education-seal" aria-hidden="true">
              <span>DATA</span>
              <i>•</i>
              <span>PROCESSING</span>
            </div>
          </article>
        </div>

        <div className="projects-showcase" id="du-an">
          <div className="projects-heading reveal" data-reveal>
            <span className="card-index">Selected systems / 03</span>
            <h3>Các hệ thống đã xây dựng</h3>
          </div>

          <div className="project-grid">
            <a
              className="project-card project-inventory reveal"
              data-reveal
              href="https://pqvinh99-glory.github.io/Inventory-FG/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-meta">
                <span>01</span>
                <small>Inventory / TypeScript</small>
              </div>
              <div>
                <h4>Inventory FG Dashboard</h4>
                <p>
                  Báo cáo phân tích tồn kho thành phẩm tự động, hỗ trợ theo dõi
                  biến động và sai lệch.
                </p>
              </div>
              <div className="project-arrow">
                Xem dự án <Arrow diagonal />
              </div>
            </a>

            <a
              className="project-card project-dictionary reveal"
              data-reveal
              href="https://dictionary-dnw.pages.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-meta">
                <span>02</span>
                <small>AI Vision / Catalogue</small>
              </div>
              <div>
                <h4>Catalogue AI</h4>
                <p>
                  Thư viện tra cứu linh kiện và mã hàng bằng hình ảnh, kết nối
                  dữ liệu để rút ngắn thời gian tìm kiếm.
                </p>
              </div>
              <div className="project-arrow">
                Xem dự án <Arrow diagonal />
              </div>
            </a>

            <a
              className="project-card project-container reveal"
              data-reveal
              href="https://containerai.pages.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-meta">
                <span>03</span>
                <small>Logistics / Planning</small>
              </div>
              <div>
                <h4>ContainerAI</h4>
                <p>
                  Theo dõi tiến độ soạn hàng, kế hoạch container và target xuất
                  hàng theo từng đơn hàng.
                </p>
              </div>
              <div className="project-arrow">
                Xem dự án <Arrow diagonal />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="certificate" id="chung-chi">
        <div className="section-shell certificate-grid">
          <div className="certificate-copy">
            <div className="section-kicker section-kicker-light reveal" data-reveal>
              <span>04</span>
              <p>Chứng chỉ chuyên môn</p>
            </div>

            <p className="certificate-label reveal" data-reveal>
              Certificate No. 080925-011
            </p>
            <h2 className="reveal" data-reveal>
              ISO 9001:2015
              <br />
              <em>Awareness &amp; Internal Auditor</em>
            </h2>
            <p className="certificate-description reveal" data-reveal>
              Hoàn thành khóa đào tạo nhận thức và đánh giá viên nội bộ vào ngày
              17/04/2026 tại Leggett &amp; Platt (Bàu Bàng).
            </p>
            <a
              className="certificate-link reveal"
              data-reveal
              href="/files/iso-9001-certificate-pham-quang-vinh.pdf"
              target="_blank"
            >
              Xem chứng chỉ gốc <Arrow diagonal />
            </a>
          </div>

          <a
            className="certificate-frame reveal"
            data-reveal
            href="/files/iso-9001-certificate-pham-quang-vinh.pdf"
            target="_blank"
            aria-label="Mở chứng chỉ ISO 9001:2015"
          >
            <img
              src="/images/iso-certificate.webp"
              alt="Chứng chỉ ISO 9001:2015 của Phạm Quang Vinh"
              width="900"
              height="1273"
            />
            <span>
              Open document <Arrow diagonal />
            </span>
          </a>
        </div>
      </section>

      <section className="contact section-shell" id="lien-he">
        <div className="section-kicker reveal" data-reveal>
          <span>05</span>
          <p>Kết nối</p>
        </div>

        <div className="contact-grid">
          <div>
            <p className="contact-overline reveal" data-reveal>
              Có một quy trình cần làm tốt hơn?
            </p>
            <h2 className="section-display reveal" data-reveal>
              Hãy cùng biến dữ liệu
              <br />
              thành <em>lợi thế vận hành.</em>
            </h2>
          </div>
          <div className="contact-list reveal" data-reveal>
            <a href="mailto:pquangvinh1999@gmail.com">
              <span>Email</span>
              <strong>pquangvinh1999@gmail.com</strong>
              <Arrow diagonal />
            </a>
            <a href="tel:+84382878953">
              <span>Điện thoại</span>
              <strong>0382 878 953</strong>
              <Arrow diagonal />
            </a>
            <div>
              <span>Khu vực</span>
              <strong>TP. Hồ Chí Minh, Việt Nam</strong>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-mark">PV</div>
          <p>© 2026 Phạm Quang Vinh. Built around clarity &amp; impact.</p>
          <div className="footer-links">
            <a
              href="https://github.com/pquangvinh1999-arch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="#tong-quan">
              Về đầu trang <Arrow />
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
