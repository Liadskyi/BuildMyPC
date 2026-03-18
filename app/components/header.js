"use client";

import styles from "./header.module.css";
import { useState } from "react";
import Contactel from "./contact";
function Header() {
    let contact_cont
    const [isVis, setIsVis] = useState(false)
    const [opacity, setOpacity] = useState()
    const contact_open = () =>{
        if (isVis) {
            setOpacity(0)
            setTimeout(()=>{setIsVis(!isVis)}, 500)
        }
        else{
            setIsVis(!isVis)
            setOpacity(0)
            setTimeout(()=>{setOpacity(100)}, 100)
            
            
        }
        
    
    };

    return (
        <main className={styles.main}>
            <div className={styles.links_cont}>
            <a className={styles.name} href="../">Build My PC</a>
            <a className={styles.promocja} href="../promocja">PROMOCJA</a>
            </div>
            <div className={styles.contact} onClick={contact_open}>Kontakt</div>
            
            {isVis && <Contactel opac={opacity}/>}
        </main>
    );
    
    
}

export default Header;