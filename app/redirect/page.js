import styles from "./redirect.module.css"

function opin() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Gdzie chcesz trafić</h1>
            <div className={styles.btn_cont}>
                <div className={`${styles.btn} ${styles.str}`}>
                    <a href="../" className={styles.link}>Strona internetowa</a>
                </div>
                <div className={`${styles.btn} ${styles.tt}`}>
                    <a href="https://www.tiktok.com/@build_my_pc" className={styles.link}>TikTok</a>
                </div>
                <div className={`${styles.btn} ${styles.yt}`}>
                    <a href="https://www.youtube.com/@Build_My_PC" className={styles.link}>Youtube</a>
                </div>
                <div className={`${styles.btn} ${styles.inst}`}>
                    <a href="https://www.instagram.com/build_my_pc256/" className={styles.link}>Instagram</a>
                </div>
            </div>
        </main>
    );
}

export default opin;