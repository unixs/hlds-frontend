import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Fufel`s HLDS server.</h1>
        <section aria-label="servers list">
          <ul>
            <li>Private server - <code>127.0.0.1:27015</code></li>
            <li>Public default server - <code>127.0.0.1:27016</code></li>
            <li>Public rats server - <code>127.0.0.1:27017</code></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
