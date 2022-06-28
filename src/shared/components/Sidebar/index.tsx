import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";
import background from "../../../assets/background.jpeg";
import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={background} alt="Imagem de background definida pelo usuário" className={styles.backgroundImg}/>
      <header className={styles.profile}>
        <Avatar
          src="https://github.com/andersonnascimentoafsn.png"
          alt="Foto do perfil do usuário"
        />
        <strong className={styles.name}>Anderson Nascimento</strong>
        <span className={styles.role}>Web Developer</span>
      </header>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
