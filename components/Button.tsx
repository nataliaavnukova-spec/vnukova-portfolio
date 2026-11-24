import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ href, variant = "primary", children }: ButtonProps) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
}
