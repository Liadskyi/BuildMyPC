import styles from "./header.module.css"
function Contact(props) {
    console.log(props.opac)
    return (<>
    <div className={styles.contact_cont} id="contact_cont" style={{opacity: props.opac}}>
        <p className={`${styles.contact_inf} ${styles.whatsapp}`}>Whatsapp/Sms/Zadzwoń: +48730067418</p>
        <p className={`${styles.contact_inf} ${styles.fb}`}>Facebook: <a href="https://www.facebook.com/share/1bJiAygM8X/" className={styles.cl}>kliknij</a></p>
        <p className={`${styles.contact_inf} ${styles.tg}`}>Social media: <a href="/redirect"className={styles.cl}>kliknij</a></p>
    </div>
    </>);
}

export default Contact;