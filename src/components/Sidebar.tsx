import styles from "./Sidebar.module.css";
import imagemCapa from "../assets/imagemCapa.jpeg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={imagemCapa} />
      <div className={styles.profile}>
        <Avatar src="https://github.com/macieljuniormax.png" />
        <strong>Maciel Júnior</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
