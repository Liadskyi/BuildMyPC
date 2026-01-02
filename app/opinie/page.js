import styles from "./opin.module.css"

function opin() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>
                Opinie
            </h1>
            <div className={styles.container}>
                <div className={styles.opin_cont}>
                    <div className={styles.pc_img}></div>
                    <div className={styles.opin_img}></div>
                </div>
            </div>
        </main>
    );
}

export default opin;