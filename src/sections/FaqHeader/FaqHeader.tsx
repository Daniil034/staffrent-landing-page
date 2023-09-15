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
                    <Title>FAQ - develop together with us!</Title>
                    <p className={styles.subtitle}>How outsourcing works?</p>
                    <ul className={styles.list}>
                        <li>We select high-quality staff from existing employees or from our database, in order to carry
                            out the set of business tasks
                        </li>
                        <li>A responsible manager is assigned to your project, who fully oversees the work of the staff
                            according to the specified criteria
                        </li>
                        <li>We take care of all the issues concerning staff registration, salary payments, tax
                            deductions and substitution. You get a ready business solution in a given time.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
