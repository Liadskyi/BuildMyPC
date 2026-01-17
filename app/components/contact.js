import styles from "./header.module.css"
function Contact(props) {
    console.log(props.opac)
    return (<>
    <div className={styles.contact_cont} id="contact_cont" style={{opacity: props.opac}}>
        <p className={`${styles.contact_inf} ${styles.whatsapp}`}>Whatsapp/Sms/Zadzwon: +48730067418</p>
        <p className={`${styles.contact_inf} ${styles.fb}`}>Facebook: <a href="https://www.facebook.com/profile.php?id=100040926966441" className={styles.cl}>kliknij</a></p>
        <p className={`${styles.contact_inf} ${styles.inst}`}>Instagram: <a href="https://www.instagram.com/build_my_pc256?igsh=MWpzZG81N29yeTcxZA=="className={styles.cl}>kliknij</a></p>
        <p className={`${styles.contact_inf} ${styles.tg}`}>Telegram: <a href="https://t.me/Mykhailo_256"className={styles.cl}>kliknij</a></p>
        
    </div>
    </>);
}

export default Contact;