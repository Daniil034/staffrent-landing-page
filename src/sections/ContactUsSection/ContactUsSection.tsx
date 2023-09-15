import {Title} from "../../shared/ui/Title/Title";
import {Container} from "../../shared/ui/Container/Container";
import {ReactComponent as ContactUsTopLine} from "shared/icons/contactUsTopLine.svg";
import {ReactComponent as ContactUsBottomLine} from "shared/icons/contactUsBottomLine.svg";
import {ReactComponent as ContactUsBackground} from "shared/icons/contactUsBackground.svg";

import styles from './ContactUsSection.module.scss';
import classNames from "classnames";

export function ContactUsSection() {
    return (
        <section className={styles.root}>
            <ContactUsTopLine className={classNames(styles.line, styles.topLine)}/>
            <ContactUsBackground className={classNames(styles.line, styles.background)}/>
            <Container>
                <div className={styles.content}>
                    <Title className={styles.title}>Contact Us</Title>
                    <p className={styles.companyName}>STAFFRENT UAB / STAFFRENT SIA</p>
                    <p className={styles.requisites}>
                        KvK 91125170 / KvK 91150396
                        <br/>
                        Oude Trambaan 50, 2265 DA in Leidschendam
                        <br/>
                        info@staffrent.ee / offer@staffrent.nl
                        <br/>
                        +372 57856099 / + 31 97 010265013</p>
                </div>
            </Container>
            <ContactUsBottomLine className={classNames(styles.line, styles.bottomLine)}/>
        </section>
    );
}
