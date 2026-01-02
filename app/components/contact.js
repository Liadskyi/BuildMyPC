import styles from "./header.module.css"
function Contact(props) {
    console.log(props.opac)
    return (<>
    <div className={styles.contact_cont} id="contact_cont" style={{opacity: props.opac}}>
        <p className={styles.contact_inf}>Whatsapp/Sms/Zadzwon: +48730067418</p>
        <p className={styles.contact_inf}>Facebook: <a href="https://www.facebook.com/profile.php?id=100040926966441" className={styles.cl}>kliknij</a></p>
        <p className={styles.contact_inf}>Telegram: <a href="https://t.me/Mykhailo_256"className={styles.cl}>kliknij</a></p>
    </div>
    </>);
}

export default Contact;