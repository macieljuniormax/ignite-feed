import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Maciel Júnior"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, adipisci suscipit, provident sequi facilis unde rerum soluta architecto excepturi iste animi harum porro quis voluptatem tempora voluptatum exercitationem accusantium doloribus?"
          />
          <Post author="Diego Fernandes" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
