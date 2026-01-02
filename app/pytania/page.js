import styles from "./quest.module.css"

function quest() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Pytania</h1>
            <div className={styles.quest_cont}>
                <h2 className={styles.h2}>Czy będzie gwarancja i możliwość zwrotu?</h2>
                <div className={styles.text}>Gwarancję i możliwość zwrotu zapewnia sklep, w którym kupujesz podzespoły. Ja zajmuję się wyłącznie składaniem i doborem komponentów.</div>

                <h2 className={styles.h2}>Jak zamówić składanie?</h2>
                <div className={styles.text}>Napisz do mnie w dowolny sposób, opisz, czego potrzebujesz, razem dobierzemy odpowiednią konfigurację i dogadamy się co do składania</div>

                <h2 className={styles.h2}>Jak mogę być pewny, że wyślesz mi komputer?</h2>
                <div className={styles.text}>Przed zakupem komponentów podpisujemy umowę, zgodnie z którą zobowiązuję się wysłać gotowy komputer.</div>

                <h2 className={styles.h2}>Jaką umowę podpiszemy i jak?</h2>
                <div className={styles.text}>Podpiszemy umowę o świadczenie usług przy użyciu profilu zaufanego</div>

                <h2 className={styles.h2}>Ile trwa składanie komputera?</h2>
                <div className={styles.text}>Zazwyczaj składanie trwa od 1 do 3 dni roboczych po dostarczeniu wszystkich podzespołów</div>

                <h2 className={styles.h2}>Mam inne pytanie !</h2>
                <div className={styles.text}>Zapraszam do kontaktu</div>
            </div>
            
        </main>
    );
}

export default quest;