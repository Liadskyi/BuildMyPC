"use client"

import { useState } from "react";
import styles from "./config.module.css"
function config() {
    const gameConf1 = {
        "1" :{
            name: "Cyberpunk",
            color: "rgb(0, 156, 34)",
            bar: "70%",
            fps: "85",

            bar0: "60%",
            fps0: "60",
            color0: "rgb(10, 156, 0)",
            sett:"1080p ultra, rt off, dlss off"

        },
        "2" :{
            name: "Mine",
            color: "green",
            bar: "90%",
            fps: "150",
            bar0: "70%",
            fps0: "90",
            color0: "green",
            sett:"1080p low"
        },
        "3":{
            name: "CS",
            color: "rgb(0, 156, 34)",
            bar: "84%",
            fps: "195",
            bar0: "55%",
            fps0: "100",
            color0: "rgb(88, 156, 0)",
            sett:"1080p low"
        },
        "4":{
            name: "gta",
            fps: "47",
            bar: "40%",
            color: "rgb(156, 151, 0)",
            
            fps0: "31",
            bar0: "33%",
            color0: "rgb(156, 125, 0)",
            sett:"1080p, ultra, rt ultra, dlss off"
        },
        "5":{
            name: "val",
            fps: "320",
            bar: "93%",
            color: "rgb(0, 156, 34)",
            
            fps0: "180",
            bar0: "72%",
            color0: "rgb(42, 156, 0)",
            sett:"1080p, low"
        },
        "6":{
            name: "al2",
            fps: "48",
            bar: "42%",
            color: "rgb(70, 156, 0)",
            
            fps0: "37",
            bar0: "38%",
            color0: "rgb(88, 156, 0)",
            sett:"1080p, medium, rt off, dlss off"
        },
        


    }




    const gameConf2 = {
        "1" :{
            name: "Cyberpunk",
            color: "rgb(0, 156, 42)",
            bar: "79%",
            fps: "114",

            bar0: "69%",
            fps0: "80",
            color0: "rgb(10, 156, 0)",
            sett:"1080p ultra, rt off, dlss off"

        },
        "2" :{
            name: "Mine",
            color: "green",
            bar: "90%",
            fps: "150",
            
            bar0: "70%",
            fps0: "90",
            color0: "green",
            sett:"1080p low"
        },
        "3":{
            name: "CS",
            color: "rgb(0, 156, 34)",
            bar: "90%",
            fps: "225",

            bar0: "63%",
            fps0: "112",
            color0: "rgb(65, 156, 0)",
            sett:"1080p low"
        },
        "4":{
            name: "gta",
            fps: "81",
            bar: "55%",
            color: "rgb(26, 156, 0)",
            
            fps0: "50",
            bar0: "43%",
            color0: "rgb(135, 156, 0)",
            sett:"1080p, ultra, rt ultra, dlss off"
        },
        "5":{
            name: "val",
            fps: "432",
            bar: "96%",
            color: "rgb(0, 176, 38)",
            
            fps0: "245",
            bar0: "79%",
            color0: "rgb(18, 182, 0)",
            sett:"1080p, low"
        },
        "6":{
            name: "al2",
            fps: "59",
            bar: "51%",
            color: "rgb(57, 156, 0)",
            
            fps0: "43",
            bar0: "42%",
            color0: "rgb(73, 156, 0)",
            sett:"1080p, medium, rt off, dlss off"
        },
    }
    




    const gameConf3 = {
        "1" :{
            name: "Cyberpunk",
            color: "rgb(29, 156, 0)",
            bar: "67%",
            fps: "79",

            bar0: "58%",
            fps0: "48",
            color0: "rgb(62, 156, 0)",
            sett:"1440p ultra, rt off, dlss off"

        },
        "2" :{
            name: "Mine",
            color: "green",
            bar: "90%",
            fps: "150",
            
            bar0: "70%",
            fps0: "90",
            color0: "green",
            sett:"1080p low"
        },
        "3":{
            name: "CS",
            color: "rgb(0, 156, 34)",
            bar: "92%",
            fps: "279",

            bar0: "65%",
            fps0: "121",
            color0: "rgb(49, 156, 0)",
            sett:"1440p low"
        },
        "4":{
            name: "gta",
            fps: "61",
            bar: "53%",
            color: "rgb(73, 156, 0)",
            
            fps0: "41",
            bar0: "40%",
            color0: "rgb(148, 156, 0)",
            sett:"1440p, ultra, rt ultra, dlss off"
        },
        "5":{
            name: "val",
            fps: "443",
            bar: "98%",
            color: "rgb(0, 176, 38)",
            
            fps0: "195",
            bar0: "74%",
            color0: "rgb(85, 182, 0)",
            sett:"1440p, low"
        },
        "6":{
            name: "al2",
            fps: "58",
            bar: "50%",
            color: "rgb(57, 156, 0)",
            
            fps0: "52",
            bar0: "47%",
            color0: "rgb(42, 156, 0)",
            sett:"1440p, high, rt off, dlss off"
        },
    }



    const gameConf4 = {
        "1" :{
            name: "Cyberpunk",
            color: "rgb(0, 156, 57)",
            bar: "72%",
            fps: "108",

            bar0: "65%",
            fps0: "68",
            color0: "rgb(62, 156, 0)",
            sett:"1440p ultra, rt off, dlss off"

        },
        "2" :{
            name: "Mine",
            color: "green",
            bar: "90%",
            fps: "150",
            
            bar0: "70%",
            fps0: "90",
            color0: "green",
            sett:"1080p low"
        },
        "3":{
            name: "CS",
            color: "rgb(0, 186, 40)",
            bar: "100%",
            fps: "593",

            bar0: "79%",
            fps0: "238",
            color0: "rgb(54, 171, 0)",
            sett:"1440p low"
        },
        "4":{
            name: "gta",
            fps: "102",
            bar: "59%",
            color: "rgb(36, 156, 0)",
            
            fps0: "60",
            bar0: "49%",
            color0: "rgb(81, 156, 0)",
            sett:"1440p, ultra, rt ultra, dlss off"
        },
        "5":{
            name: "val",
            fps: "734",
            bar: "100%",
            color: "rgb(0, 176, 38)",
            
            fps0: "315",
            bar0: "89%",
            color0: "rgb(58, 182, 0)",
            sett:"1440p, low"
        },
        "6":{
            name: "al2",
            fps: "65",
            bar: "58%",
            color: "rgb(8, 156, 0)",
            
            fps0: "58",
            bar0: "52%",
            color0: "rgb(3, 156, 0)",
            sett:"1440p, high, rt off, dlss off"
        },
    }
    // const [currgame1, setcurrgame1] = useState(gameConf1[1])
    const [game, setGame] = useState(1)
    const currgame1 = gameConf1[game]
    const currgame2 = gameConf2[game]
    const currgame3 = gameConf3[game]
    const currgame4 = gameConf4[game]
    const Change = (event) =>{
        setGame(event.target.value)
    }
    return (
        <main className={styles.main}>
            <div className={styles.upper}>
                <h1 className={styles.h1}>
                    Gotowe kofiguracje 
                </h1>
                <div className={styles.game_cont}>
                    <div className={styles.test_game_name}>
                        Przetestowana gra:
                    </div>
                    <select className={styles.select} name="options" onChange={Change}>
                        <option value="1" className={styles.option}>Cyberpunk 2077</option>
                        
                        <option value="3" className={styles.option}>CS 2</option>
                        <option value="4" className={styles.option}>GTA V online</option>
                        <option value="5" className={styles.option}>Valorant</option>
                        <option value="6" className={styles.option}>Alan Wake 2</option>
                    </select>
                </div>
            </div>
            <div className={styles.config_cont}>


                {/* CONFIG1 */}
                <div className={styles.config1}>
                    <h2>RTX 5060 + R5 5500 ddr4</h2>
                    <h3>Settings: {currgame1.sett}</h3>
                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>avg fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame1.bar, background: currgame1.color}}>
                                {currgame1.fps}
                            </div>
                        </div>
                    </div>

                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>1% low fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame1.bar0, background: currgame1.color0}}>
                                {currgame1.fps0}
                            </div>
                        </div>
                    </div>
                    <div className={styles.cena}>
                        Cena: 3800zl-4500zl + 300zl
                    </div>
                </div>




                {/* CONFIG2 */}
                <div className={styles.config1}>
                    <h2>RTX 5060TI 16G + R7 5700X ddr4</h2>
                    <h3>Settings: {currgame2.sett}</h3>
                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>avg fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame2.bar, background: currgame2.color}}>
                                {currgame2.fps}
                            </div>
                        </div>
                    </div>

                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>1% low fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame2.bar0, background: currgame2.color0}}>
                                {currgame2.fps0}
                            </div>
                        </div>
                    </div>
                    <div className={styles.cena}>
                        Cena: 4500zl-5000zl + 8% ceny
                    </div>
                </div>



                {/* CONFIG3 */}
                <div className={styles.config1}>
                    
                    <h2>RTX 5070 + R7 5800X ddr4</h2>
                    <h3>Settings: {currgame3.sett}</h3>
                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>avg fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame3.bar, background: currgame3.color}}>
                                {currgame3.fps}
                            </div>
                        </div>
                    </div>

                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>1% low fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame3.bar0, background: currgame3.color0}}>
                                {currgame3.fps0}
                            </div>
                        </div>
                    </div>
                    <div className={styles.cena}>
                        Cena: 6000zl-6500zl + 8% ceny
                    </div>
                </div>





                <div className={styles.config1}>
                    <h2>RTX 5070 TI + R7 7800X3d ddr5</h2>
                    <h3>Settings: {currgame4.sett}</h3>
                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>avg fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame4.bar, background: currgame4.color}}>
                                {currgame4.fps}
                            </div>
                        </div>
                    </div>

                    <div className={styles.fps_cont}>
                        <div className={styles.fps}>1% low fps</div>
                        <div className={styles.progress}>
                            <div className={styles.bar} style={{ width: currgame4.bar0, background: currgame4.color0}}>
                                {currgame4.fps0}
                            </div>
                        </div>
                    </div>
                    <div className={styles.cena}>
                        Cena: 9000zl-10000zl + 8% ceny
                    </div>
                </div>
            </div>
        </main>
    );
}

export default config;