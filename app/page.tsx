"use client";
/* eslint-disable @next/next/no-img-element -- Pre-compressed local WebP assets preserve the supplied portrait and certificate exactly. */

import { useEffect } from "react";

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
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" id="tong-quan" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#tong-quan" aria-label="Về đầu trang">
            Phạm Quang Vinh
          </a>

          <nav className="desktop-nav" aria-label="Điều hướng chính">
            <a className="is-active" href="#tong-quan">
              Tổng quan
            </a>
            <a href="#nang-luc">Năng lực</a>
            <a href="#kinh-nghiem">Kinh nghiệm</a>
            <a href="#chung-chi">Chứng chỉ</a>
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
              Phạm Quang Vinh
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
                  <strong>100,000</strong>
                  <sup>+</sup>
                </dt>
                <dd>dòng dữ liệu</dd>
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
                src="/images/pham-quang-vinh.webp"
                alt="Phạm Quang Vinh"
                width="1000"
                height="1172"
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
              Phân tích, kiểm soát và báo cáo hơn 100.000 dòng dữ liệu với hơn
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
              <span>2022</span>
              <i />
              <span>2026</span>
            </div>
            <div className="timeline-place">
              <span>ECCO (Việt Nam)</span>
              <h3>Warehouse Controller</h3>
              <p>Nhân viên giám sát kho &amp; xử lý dữ liệu</p>
            </div>
            <ul>
              <li>Quản lý, theo dõi xuất - nhập nguyên vật liệu và thành phẩm.</li>
              <li>
                Xây dựng báo cáo kiểm kê ngày, tuần, tháng bằng Excel, SAP và
                biểu đồ theo từng nhóm vật liệu.
              </li>
              <li>
                Kiểm soát hao hụt đầu vào, mức độ an toàn và rủi ro kho vật
                liệu.
              </li>
              <li>
                Xử lý sai lệch dữ liệu giữa hệ thống và thực tế cùng các phòng
                ban liên quan.
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

        <a
          className="project-card reveal"
          data-reveal
          href="https://pqvinh99-glory.github.io/Inventory-FG/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <span className="card-index">Selected project / 01</span>
            <h3>Inventory FG Dashboard</h3>
            <p>
              Báo cáo phân tích tồn kho tự động được xây dựng bằng TypeScript.
            </p>
          </div>
          <div className="project-arrow">
            Xem dự án <Arrow diagonal />
          </div>
        </a>
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
