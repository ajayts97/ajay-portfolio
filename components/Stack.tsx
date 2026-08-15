import styles from "./Stack.module.css";

const GROUPS: { key: string; items: string[] }[] = [
  {
    key: "languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Dart"],
  },
  {
    key: "frameworks",
    items: [
      "React Native",
      "React",
      "Vue",
      "Nuxt",
      "Flutter",
      "Redux Toolkit",
      "React Navigation",
      "Jest",
      "Vuetify",
    ],
  },
  {
    key: "mobile",
    items: [
      "Native modules / bridge",
      "Reanimated",
      "Push notifications",
      "APK/AAB signing",
      "Provisioning profiles",
      "App privacy",
    ],
  },
  {
    key: "tooling",
    items: [
      "VS Code",
      "Firebase",
      "App Store Connect",
      "Google Play Console",
      "TestFlight",
      "Postman",
    ],
  },
  {
    key: "versionControl",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Confluence"],
  },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-heading">
          <span className="idx">02</span>
          <h2>Stack</h2>
        </div>

        <div className={styles.terminal}>
          <div className={styles.termHead}>
            <div className={styles.termDots}>
              <span />
              <span />
              <span />
            </div>
            <span className={styles.termTitle}>stack.json</span>
          </div>
          <pre className={styles.termBody}>
            <code>
              {"{\n"}
              {GROUPS.map((g, gi) => (
                <span key={g.key}>
                  {"  "}
                  <span className={styles.key}>&quot;{g.key}&quot;</span>
                  {": ["}
                  {"\n"}
                  {g.items.map((item, i) => (
                    <span key={item}>
                      {"    "}
                      <span className={styles.str}>&quot;{item}&quot;</span>
                      {i < g.items.length - 1 ? "," : ""}
                      {"\n"}
                    </span>
                  ))}
                  {"  ]"}
                  {gi < GROUPS.length - 1 ? "," : ""}
                  {"\n"}
                </span>
              ))}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
