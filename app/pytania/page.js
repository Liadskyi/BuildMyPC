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
                <div className={styles.text}>Podpiszemy umowę o świadczenie usług przy użyciu profilu zaufanego wzór: <a href="https://drive.google.com/file/d/1ZXGQywXTS4-wqKGl2T5L0gBxJNq1qJi8/view?usp=sharing"> umowa </a>
                <br/>Uwaga! Poniższy dokument jest jedynie wzorem umowy. Ostateczna treść umowy może ulec zmianie w zależności od indywidualnych ustaleń z Klientem. Prosimy o uważne zapoznanie się z treścią dokumentu przed jego podpisaniem.
                </div>

                <h2 className={styles.h2}>Ile trwa składanie komputera?</h2>
                <div className={styles.text}>Zazwyczaj składanie trwa od 1 do 3 dni roboczych po dostarczeniu wszystkich podzespołów</div>

                <h2 className={styles.h2}>Co mam zrobić przy odbiorze ?</h2>
                <div className={styles.text}>

                    1: Sprawdź paczkę przy kurierze<br/>
Zgodnie z naszą umową (§5 pkt 6), Twoim obowiązkiem jest sprawdzenie stanu zewnętrznego kartonu przy kurierze.

Jeśli widzisz wgniecenia, rozdarcia lub dziury w kartonie - koniecznie poproś kuriera o spisanie protokołu szkody (protokół szkody) na miejscu. Bez tego dokumentu kurier nie uzna reklamacji za uszkodzenia mechaniczne powstałe w transporcie.
<br/><br/>
2:Pierwsze uruchomienie <br/>
Zgodnie z umową, masz 24 godziny od momentu otrzymania przesyłki na zgłoszenie mi jakichkolwiek zastrzeżeń technicznych.

<br/>- Po rozpakowaniu usuń wszystkie materiały opakowaniowe ze środka (np. folię bąbelkową, pianki zabezpieczające kartę graficzną). Odczekaj ok. 1 godziny, aż komputer osiągnie temperaturę pokojową (szczególnie zimą), aby uniknąć kondensacji pary wodnej.
<br/>- Uruchomienie komputera z zabezpieczeniami wewnątrz może doprowadzić do trwałego uszkodzenia wentylatorów lub przegrzania podzespołów!
<br/>- Sprawdź, czy podczas transportu nie wypięły się kable lub podzespoły
<br/>- Podłącz monitor bezpośrednio do karty graficznej (nie do płyty głównej).
<br/>- Uruchom komputer i sprawdź, czy system startuje poprawnie.
<br/><br/>
Jeśli zauważysz uszkodzenia, niezwłocznie (w ciągu 24h) poinformuj mnie o tym. Pamiętaj, że masz 7 dni na wezwanie kuriera w celu spisania protokołu szkody "ukrytej". Bez tego dokumentu nie będę mógł pomóc Ci w uzyskaniu odszkodowania od firmy kurierskiej.


                </div>


                <h2 className={styles.h2}>Kto pokrywa koszty wysyłki</h2>
                <div className={styles.text}>Koszty dostawy komponentów ze sklepu do mnie pokrywa Klient<br/>Koszt wysyłki gotowego komputera pokrywam ja</div>

                <h2 className={styles.h2}>Czy składasz komputery z części używanych?</h2>
                <div className={styles.text}>Składam zestawy głównie z nowych części z pełną gwarancją sklepową. W przypadku części używanych nie biorę odpowiedzialności za ich ukryte wady i żywotność, a jedynie za poprawność ich montażu.</div>

                <h2 className={styles.h2}>Mam inne pytanie !</h2>
                <div className={styles.text}>Zapraszam do kontaktu</div>
            </div>
            
        </main>
    );
}

export default quest;