import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <p className={`eyebrow ${styles.eyebrow}`}>
            build 2247 · main · status: shipped
          </p>
          <h1 className={styles.h1}>
            Hi, I’m Ajay T S.
          </h1>
            <h1 className={`${styles.h1} ${styles.nowrap}`}>
            I build mobile apps that ship.
            </h1>
          <p className={styles.sub}>
            Senior Frontend Engineer with 5 years taking React Native and
            React apps from first commit to production — KYC flows and
            policy renewals for an insurer, admin consoles that run a
            mobile ecosystem, and fintech portals tuned for Core Web
            Vitals.
          </p>
          <div className={styles.ctaRow}>
            <a href="#log" className={styles.primaryBtn}>
              See the release log
            </a>
            <a href="mailto:ajayts2697@gmail.com" className={styles.secondaryBtn}>
              ajayts2697@gmail.com
            </a>
          </div>
          <div className={styles.metaRow}>
            <span>Thrissur, Kerala · Chennai, TN</span>
            <span className={styles.metaDivider}>/</span>
            <a href="https://github.com/ajayts97" className={styles.metaLink}>
              github.com/ajayts97
            </a>
            <span className={styles.metaDivider}>/</span>
            <a
              href="https://linkedin.com/in/ajay-t-s"
              className={styles.metaLink}
            >
              linkedin.com/in/ajay-t-s
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
