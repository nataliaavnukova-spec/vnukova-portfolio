"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitch from "./LanguageSwitch";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="/" className={styles.brand} aria-label={t.homeLabel}>
          <span className={styles.logo}>
            <Image src="/images/logo-n.svg" alt="" width={44} height={48} priority />
          </span>
        </a>

        <nav className={styles.nav} aria-label={t.navLabel}>
          {t.nav.map((item, index) => {
            const active = index === 0;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className={styles.language}>
          <LanguageSwitch />
        </div>
      </div>
      <div className={styles.hairline} />
    </header>
  );
}
