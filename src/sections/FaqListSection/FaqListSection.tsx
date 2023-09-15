import {Container} from "../../shared/ui/Container/Container";
import {FAQ_LIST} from "./config";
import {FaqListItem} from "./FaqListItem/FaqListItem";
import {ReactComponent as FaqLine1} from "shared/icons/faqLine1.svg";
import {ReactComponent as FaqLine2} from "shared/icons/faqLine2.svg";
import {ReactComponent as FaqLine3} from "shared/icons/faqLine3.svg";
import {ReactComponent as FaqLine4} from "shared/icons/faqLine4.svg";
import {ReactComponent as FaqLine5} from "shared/icons/faqLine5.svg";
import styles from './FaqListSection.module.scss'
import classNames from "classnames";

export function FaqListSection() {
    return (
        <section className={styles.root}>
            <FaqLine1 className={classNames(styles.line, styles.line1)}/>
            <FaqLine2 className={classNames(styles.line, styles.line2)}/>
            <FaqLine3 className={classNames(styles.line, styles.line3)}/>
            <FaqLine4 className={classNames(styles.line, styles.line4)}/>
            <FaqLine5 className={classNames(styles.line, styles.line5)}/>
            <Container>
                <ul className={styles.list}>
                    {FAQ_LIST.map(faq => (
                        <FaqListItem
                            title={faq.title}
                            body={faq.body}
                            imageSrc={faq.imageSrc}
                            imagePosition={faq.imagePosition}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
}
