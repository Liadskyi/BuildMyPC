import styles from "./header.module.css"
function Contact(props) {
    console.log(props.opac)
    return (<>
    <div className={styles.contact_cont} id="contact_cont" style={{opacity: props.opac}}>
        <p className={`${styles.contact_inf} ${styles.whatsapp}`}>Whatsapp/Sms/Zadzwoń: +48730067418</p>
        <p className={`${styles.contact_inf} ${styles.fb}`}>Facebook: <a href="https://www.facebook.com/share/1bJiAygM8X/" className={styles.cl}>kliknij</a></p>
        <p className={`${styles.contact_inf} ${styles.inst}`}>Instagram: <a href="https://www.instagram.com/build_my_pc256?igsh=MWpzZG81N29yeTcxZA=="className={styles.cl}>kliknij</a></p>
        <p className={`${styles.contact_inf} ${styles.tg}`}>TikTok: <a href="https://www.tiktok.com/@build_my_pc?is_from_webapp=1&sender_device=pc"className={styles.cl}>kliknij</a></p>
    </div>
    </>);
}

export default Contact;