import faqHeaderBG from 'shared/images/faqHeaderBG.png'
import styles from './FaqHeader.module.scss';
import {Title} from "../../shared/ui/Title/Title";

export function FaqHeader() {
    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div className={styles.redLine}/>
                    <div className={styles.image}/>
                </div>
                <div className={styles.textContent}>
                    <Title>KKK - arendage koos meiega!</Title>
                    <p className={styles.subtitle}>Kuidas allhanked toimivad?</p>
                    <ul className={styles.list}>
                        <li>Valime kvaliteetsed töötajad olemasolevate töötajate seast või oma andmebaasist, et täita
                            äriülesannete komplekti
                        </li>
                        <li>Teie projektile määratakse vastutav juht, kes jälgib täielikult personali tööd vastavalt
                            kindlaksmääratud kriteeriumidele
                        </li>
                        <li>Me hoolitseme kõigi küsimuste eest, mis puudutavad töötajate registreerimist, palgamakseid,
                            maksusoodustusi ja asendamist. Saate etteantud aja jooksul valmis ärilahenduse.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
