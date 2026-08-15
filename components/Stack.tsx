import styles from "./Stack.module.css";

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Dart"],
  },
  {
    label: "Frameworks",
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
    label: "Mobile",
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
    label: "Tooling",
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
    label: "Delivery",
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

        <div className={styles.grid}>
          {GROUPS.map((group) => (
            <div key={group.label} className={styles.card}>
              <h3>{group.label}</h3>
              <div className={styles.chips}>
                {group.items.map((item) => (
                  <span key={item} className={styles.chip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
