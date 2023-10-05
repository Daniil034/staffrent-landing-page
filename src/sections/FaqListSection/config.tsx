import {FaqListItemProps} from "./FaqListItem/FaqListItem";
import faqBenefitImg from 'shared/images/faqBenefitImage.png';
import faqPricesImg from 'shared/images/faqPricesImage.png';
import faqTaxesImg from 'shared/images/faqTaxesImage.png';
import faqContractsImg from 'shared/images/faqContractsImage.png';
import styles from './config.module.scss';

export const FAQ_LIST: FaqListItemProps[] = [
    {
        title: 'Millised on personali allhanke eelised?',
        body: <>
            <p className={styles.paragraph}>Allhanked on üldiselt atraktiivsemad kui traditsiooniline palkamine. Selle
                protsessi pädeva joondamise tingimustes vähendavad ettevõtted püsikulusid ja lahendavad oma olulised
                personaliülesanded.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><span>Maksukoormus</span> väheneb.</li>
                <li className={styles.listItem}><span>On</span> võimalus teha koostööd spetsialistidega ilma neid
                    alaliselt palkamata
                    (eriti kui see ei ole majanduslikult elujõuline).
                </li>
                <li className={styles.listItem}><span>The</span> area of responsibility is clearly limited with the
                    provision of
                    additional guarantees.
                </li>
                <li className={styles.listItem}><span>Optimeeritud</span> tööaeg.</li>
                <li className={styles.listItem}><span>Organisatsioonilised</span> küsimused lahendatakse tõhusamalt.
                </li>
                <li className={styles.listItem}><span>Lisaks</span> on allhanketöötajad motiveeritumad ja paremini ette
                    valmistatud
                    kui ettevõttesisesed töötajad.
                </li>
            </ul>
        </>,
        imageSrc: faqBenefitImg,
        imagePosition: 'left'
    },
    {
        title: 'Millised on teenuste keskmised hinnad?',
        body: <>
            <p className={styles.paragraph}>
                Allhanketeenuste maksumus sõltub tegurite kombinatsioonist ja on igal juhul individuaalne. Need tegurid
                hõlmavad järgmist:
            </p>
            <ul className={styles.list} style={{marginBottom: '1rem'}}>
                <li className={styles.listItem}>
                    <span>Tegevussuund</span>, mille raames allhanketeenuseid osutatakse;
                </li>
                <li className={styles.listItem}>
                    <span>Periood</span>, mille jooksul leping sõlmitakse (reeglina, mida pikem on lepingu tähtaeg, seda
                    soodsamad on
                    kliendiettevõttele tingimused);
                </li>
                <li className={styles.listItem}>
                    <span>piirkond</span>, kus osutatakse allhanketeenuseid;
                </li>
                <li className={styles.listItem}>
                    <span>Töö</span> keerukus;
                </li>
            </ul>
            <p>
                Ja muud tegurid. Selleks, et saaksime teie ettevõttega seotud teenuste maksumuse ja tingimused välja
                arvutada, võtke meiega ühendust ning meie spetsialistid teevad detailse arvutuse ja valivad teile
                sobivaima lahenduse.
            </p>
        </>,
        imageSrc: faqPricesImg,
        imagePosition: 'right'
    },
    {
        title: 'Kui ettevõte tellib allhanketeenuseid, kes siis maksab töötajatele makse?',
        body: <p>
            Euroopa Liidu tööõiguse kohaselt langeb kogu maksukoormus ettevõttele, kus töötajad on seaduslikult
            registreeritud. Seega, kui teie ettevõte tellib meilt allhanketeenuse, langevad maksud ja kõik töötajate
            registreerimisega seotud küsimused meie õlgadele. Samas on oluline mõista, et meie töötajate palgast
            makstavad maksud sisalduvad kliendi ettevõttega sõlmitud lepingu alusel teenuste maksumuses ja neid
            makstakse G-konto kaudu.
        </p>,
        imageSrc: faqTaxesImg,
        imagePosition: 'left'
    },
    {
        title: 'Millised lepingud sõlmitakse personali allhankel?',
        body: <ul className={styles.list}>
            <li className={styles.listItem}>
                <span>Otsene</span> tööjõurendileping sõlmitakse Tellija - Teie ja Töövõtja - Meie vahel.
            </li>
            <li className={styles.listItem}>
                <span>Kolmepoolne</span> leping sõlmitakse kliendi - teie, töövõtja - meie ja vahendaja / usaldusisiku -
                OrganizedFlex B.V. vahel, kes on meie palgaarvestuse agent.
            </li>
            <li className={styles.listItem}>
                <span>Kliendile</span> antakse juurdepääs Oflex CRM-süsteemile, mis kajastab ajakohast teavet kõigi
                projektide,
                renditud töötajate, maksusoodustuste, lubade, töötundide, palgatõendite jms kohta
            </li>
        </ul>,
        imageSrc: faqContractsImg,
        imagePosition: 'right'
    }
]
