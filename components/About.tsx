import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-heading">
          <span className="idx">03</span>
          <h2>About</h2>
        </div>

        <div className={styles.grid}>
          <p className={styles.bio}>
            Five years in, Ajay's work sits at the point where an app stops
            being code on a laptop and becomes something a customer
            downloads. That means owning the parts most frontend roles
            skip — provisioning profiles, store listings, release
            signing — alongside the React, React Native, Vue, and Flutter
            work that gets a product to that point. Recent focus has been
            fintech and insurance: admin consoles, KYC, and policy
            workflows that need to be both fast and exactly correct.
          </p>

          <div className={styles.side}>
            <div className={styles.block}>
              <p className={styles.blockLabel}>Education</p>
              <p className={styles.blockTitle}>
                B.Tech, Electronics &amp; Communication Engineering
              </p>
              <p className={styles.blockMeta}>
                Jyothi Engineering College, Cheruthuruthy, Kerala
              </p>
              <p className={styles.blockMeta}>2016 — 2020</p>
            </div>

            <div className={styles.block}>
              <p className={styles.blockLabel}>Certifications</p>
              <ul className={styles.badgeList}>
                <li className={styles.badge}>
                  Internship, BSNL — Thrissur
                </li>
                <li className={styles.badge}>
                  BEC, Cambridge language assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
