import styles from "./styles.module.css";
import igniteLogo from "../../../assets/igniteLogo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={igniteLogo}
        alt="Logo do ignite: dois triângulos verdes de tamanhos diferente inclinados para direita"
      />
      <strong className={styles.title}>Ignite Feed</strong>
    </header>
  );
}
