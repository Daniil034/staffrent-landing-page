import {Title} from "../../shared/ui/Title/Title";
import {Container} from "../../shared/ui/Container/Container";
import {ReactComponent as ContactUsTopLine} from "shared/icons/contactUsTopLine.svg";
import {ReactComponent as ContactUsBottomLine} from "shared/icons/contactUsBottomLine.svg";
import {ReactComponent as ContactUsBackground} from "shared/icons/contactUsBackground.svg";

import styles from './ContactUsSection.module.scss';
import classNames from "classnames";
import {
    en_address,
    en_company_name,
    en_email,
    en_phone_number,
    en_title
} from "../../content/en/MainPage/ContactUsSectionContent";

export function ContactUsSection() {
    return (
        <section className={styles.root}>
            <ContactUsTopLine className={classNames(styles.line, styles.topLine)}/>
            <ContactUsBackground className={classNames(styles.line, styles.background)}/>
            <Container>
                <div className={styles.content}>
                    <Title className={styles.title}>{en_title}</Title>
                    <p className={styles.companyName}>{en_company_name}</p>
                    <p className={styles.requisites}>
                        {en_address}
                        <br/>
                        {en_email}
                        <br/>
                        {en_phone_number}
                        </p>
                </div>
            </Container>
            <ContactUsBottomLine className={classNames(styles.line, styles.bottomLine)}/>
        </section>
    );
}
