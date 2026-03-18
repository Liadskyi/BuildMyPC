import s from "./promocja.module.css"
import styles from "./promocja.module.css"

function quest() {
    return (
        <main className={s.main}>
            <div className={s.name}>
                Zaproś kolegę i zgarnij bonus 50 zł
            </div>
            <div className={s.info_cont}>
            <div className={styles.left}>
                <h1 className={styles.h1}>Jak dostać kod ?</h1>
                <p className={styles.text}>
                    
                Aby otrzymać unikalny kod, za pomocą którego będziesz mógł zapraszać innych, wypełnij formularz: <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6ZMV0fSN9trTpd3ZF2l9wbhLS_Zp3h3M2AbRSBR4XXDqtjg/viewform?usp=header">Link</a>. A ja skontaktuję się z Tobą
                <br/><br/>
Udział w programie mogą brać osoby niepełnoletnie za zgodą rodziców lub opiekunów prawnych.
               
<br/>
<br/>
WAŻNE!!!
<br/>
Program ma charakter promocyjny i nie stanowi oferty zatrudnienia ani współpracy.
<br/>
Udział jest dobrowolny i nie zobowiązuje do podejmowania żadnych działań.
<br/>
Bonus ma charakter nagrody w ramach programu poleceń.<br/>
<br/>
Za każdego klienta otrzymasz rabat w wysokości 50 zł na zakupy u mnie lub voucher(allegro, steam, itp..) o wartości 50 zł

                </p>
            </div>
            <div className={styles.left}>
                <h1 className={styles.h1}>Zasady</h1>
                <p className={styles.text}>
                Dostajesz 50 zł za każdego klienta, który dokona zakupu, używając Twojego kodu.<br/><br/>

                Aby skorzystać z kodu, klient musi go podać podczas składania zamówienia. <br/><br/>

Klient zyskuje 50 zł zniżki na swoje zamówienie, korzystając z Twojego kodu.<br/><br/>

Kodów nie można używać do własnych zakupów ani łączyć z innymi promocjami.<br/><br/>

Kody możesz udostępniać w dowolnym miejscu: Instagram, TikTok, YouTube itp.<br/><br/>

Wszystkie kody są aktualne do 01.07.2026. Organizator zastrzega sobie prawo do indywidualnego skrócenia lub wydłużenia ważności kodów.<br/><br/>

Regulamin: <a href="https://docs.google.com/document/d/1s4FUYflR3ElGHO5Kn-RALS6qd9PdBxgyrHD8KzaKYtA/edit?usp=sharing">Link</a>

                    
                </p>
            </div>
            </div>
        </main>
    );
}

export default quest;