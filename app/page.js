import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.img_cont}>
            <div className={styles.img_pc}></div>
          </div>
          <div className={styles.text_cont}>
            <h1 className={styles.Mypc}>
              Build My PC
            </h1>
            <p className={styles.text}>
              Twój PC. Prosto, szybko, bez stresu.
            </p>
          </div>
        </div>
        <div className={styles.btn_block}>
          <a className={styles.btn} href="zamowic">Jak zamówić ?</a>
          <a className={styles.btn} href="konfiguracje">Konfiguracje</a>
          <a className={styles.btn} href="opinie">Opinie</a>
          <a className={styles.btn} href="pytania">Pytania</a>
        </div>
      </main>
    </div>
  );
}
