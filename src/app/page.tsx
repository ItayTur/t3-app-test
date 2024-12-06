import Link from "next/link";

import { LatestPost } from "@app/app/_components/post";
import { api, HydrateClient } from "@app/trpc/server";
import styles from "./index.module.css";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            ניהול <span className={styles.pinkSpan}>פנסיוני</span> בקלות
          </h1>
          <div className={styles.cardRow}>
            <Link
              className={styles.card}
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h2 className={styles.cardTitle}>צעדים ראשונים </h2>
              <div className={styles.cardText}>
                רק הבסיס - כל מה שצריך לדעת בשביל להתחיל, מבטיחים זה צ׳יפס
              </div>
            </Link>
            <Link
              className={styles.card}
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h2 className={styles.cardTitle}>מדריכים למתקדמים</h2>
              <div className={styles.cardText}>
                רק אם בא לכם כאן אנחנו מסבירים תכונות מתקדמות שיכולים לעשות לכם
                חיים קלים עוד יותר
              </div>
            </Link>
          </div>
          <div className={styles.showcaseContainer}>
            <p className={styles.showcaseText}>
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <LatestPost />
        </div>
      </main>
    </HydrateClient>
  );
}
