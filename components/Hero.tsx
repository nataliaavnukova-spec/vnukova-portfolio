"use client";

import Image from "next/image";
import { contactEmail } from "@/content/site";
import Button from "./Button";
import { useLanguage } from "./LanguageProvider";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.photo}>
        <Image
          src="/images/profile-photo.png"
          alt={hero.photoAlt}
          width={120}
          height={120}
          sizes="120px"
          priority
        />
      </div>

      <div className={styles.intro}>
        <h1 id="hero-title" className={styles.title}>
          {hero.greeting}
          <em>{hero.name}</em>,
          <br />
          {hero.role}
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
      </div>

      <div className={styles.actions}>
        <Button href="#work">{hero.primaryAction}</Button>
        <Button href={`mailto:${contactEmail}`} variant="secondary">
          {hero.secondaryAction}
        </Button>
      </div>
    </section>
  );
}
