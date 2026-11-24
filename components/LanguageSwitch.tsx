"use client";

import { languages } from "@/content/site";
import { useLanguage } from "./LanguageProvider";
import styles from "./LanguageSwitch.module.css";

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={styles.switch} role="group" aria-label={t.languageLabel}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`${styles.option} ${language === code ? styles.selected : ""}`}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
