import styles from "./page.module.css";
import MainNavigation from "@/components/MainMenu";
import ServersList from "@/components/ServersList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Fufel`s HLDS server.</h1>
        <MainNavigation />
        <ServersList />
      </main>
    </div>
  );
}
