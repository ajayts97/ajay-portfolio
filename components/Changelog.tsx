import styles from "./Changelog.module.css";
import Reveal from "./Reveal";

type Entry = {
  type: "feat" | "perf" | "chore" | "docs";
  text: string;
};

type Release = {
  version: string;
  status: "current" | "past";
  role: string;
  company: string;
  location: string;
  dates: string;
  entries: Entry[];
};

const RELEASES: Release[] = [
  {
    version: "v3.0.0",
    status: "current",
    role: "Junior Consultant",
    company: "Xebia IT",
    location: "Chennai, Tamil Nadu",
    dates: "Jun 2024 — Present",
    entries: [
      {
        type: "feat",
        text: "Shipped the Chola Customer App to the App Store and Google Play as core developer for the React Native production build.",
      },
      {
        type: "feat",
        text: "Architected secure KYC modules and policy-renewal workflows for Cholamandalam Insurance customers.",
      },
      {
        type: "feat",
        text: "Built an Admin Console in React and TypeScript for end-to-end management of the mobile ecosystem.",
      },
      {
        type: "feat",
        text: "Added dynamic configuration tools to manage promotional banners, video assets, and user-specific displays in real time.",
      },
      {
        type: "feat",
        text: "Built the Chola SuperApp in React Native for agent-hierarchy communication and performance tracking.",
      },
      {
        type: "chore",
        text: "Owned APK/AAB signing, CI/CD, and TestFlight distribution for production releases.",
      },
      {
        type: "docs",
        text: "Ran Agile ceremonies in Jira and Confluence, bridging field leadership and the dev team.",
      },
    ],
  },
  {
    version: "v2.0.0",
    status: "past",
    role: "Solution Consultant",
    company: "Francium Tech",
    location: "Chennai, Tamil Nadu",
    dates: "Feb 2023 — Jun 2024",
    entries: [
      {
        type: "perf",
        text: "Optimized MoneySmart's web performance with Nuxt and TypeScript for faster SEO indexing and better Core Web Vitals.",
      },
      {
        type: "feat",
        text: "Built FRSQL, a query-editing tool for manipulating PostgreSQL tables, in React.",
      },
      {
        type: "feat",
        text: "Developed Forward SMS on a React Native-to-Java bridge for native background SMS processing.",
      },
      {
        type: "feat",
        text: 'Built "Francium AI," a cross-platform chatbot in React Native with consistent UI across iOS and Android.',
      },
    ],
  },
  {
    version: "v1.0.0",
    status: "past",
    role: "Software Analyst",
    company: "Turqosoft Solutions",
    location: "Kochi, Kerala",
    dates: "Jul 2021 — Jan 2023",
    entries: [
      {
        type: "feat",
        text: "Built HRMS software for integrated employee-lifecycle management using Vue and Vuetify.",
      },
      {
        type: "feat",
        text: "Built ERP software to improve departmental coordination, using Vue and JavaScript.",
      },
    ],
  },
];

export default function Changelog() {
  return (
    <section id="log">
      <div className="wrap">
        <Reveal>
          <div className="section-heading">
            <span className="idx">01</span>
            <h2>Release log</h2>
          </div>
        </Reveal>

        <div className={styles.list}>
          {RELEASES.map((r, i) => (
            <Reveal as="article" key={r.version} className={styles.release} delay={i * 90}>
              <div className={styles.rail}>
                <span
                  className={
                    r.status === "current" ? styles.dotCurrent : styles.dot
                  }
                />
                <span className={styles.railLine} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.version}>{r.version}</span>
                  {r.status === "current" && (
                    <span className={styles.liveTag}>latest</span>
                  )}
                  <span className={styles.dates}>{r.dates}</span>
                </div>
                <h3 className={styles.role}>
                  {r.role} <span className={styles.at}>@</span> {r.company}
                </h3>
                <p className={styles.location}>{r.location}</p>

                <ul className={styles.entries}>
                  {r.entries.map((e, idx) => (
                    <li key={idx} className={styles.entry}>
                      <span className={`tag tag--${e.type}`}>{e.type}</span>
                      <span>{e.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
