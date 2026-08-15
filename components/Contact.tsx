import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <div className="section-heading">
          <span className="idx">04</span>
          <h2>Contact</h2>
        </div>

        <div className={styles.panel}>
          <p className={styles.command}>
            <span className={styles.prompt}>$</span> npx contact ajay
          </p>
          <h3 className={styles.headline}>
            Open to Senior / Lead Frontend and React Native roles.
          </h3>
          <div className={styles.links}>
            <a href="mailto:ajayts2697@gmail.com" className={styles.link}>
              ajayts2697@gmail.com
            </a>
            <a href="tel:+919747278583" className={styles.link}>
              +91 97472 78583
            </a>
            <a
              href="https://linkedin.com/in/ajay-t-s"
              className={styles.link}
            >
              linkedin.com/in/ajay-t-s
            </a>
            <a href="https://github.com/ajayts97" className={styles.link}>
              github.com/ajayts97
            </a>
          </div>
        </div>

        <footer className={styles.footer}>
          <span>Ajay T S — Thrissur, Kerala</span>
        </footer>
      </div>
    </section>
  );
}
