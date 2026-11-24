import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <LanguageProvider>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <Hero />
        </main>
      </div>
    </LanguageProvider>
  );
}
