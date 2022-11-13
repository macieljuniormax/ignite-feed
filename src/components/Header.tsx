import styles from "./Header.module.css";
import igniteLogo from "../assets/igniteLogo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <p>Ignite Feed</p>
    </header>
  );
}
