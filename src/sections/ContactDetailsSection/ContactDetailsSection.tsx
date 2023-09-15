import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";
import {ReactComponent as ContactDetailsLine} from "shared/icons/contactDetailsLine.svg";
import styles from './ContactDetailsSection.module.scss';
import {GoogleMapBlock} from "../../shared/ui/GoogleMapBlock/GoogleMapBlock";

export function ContactDetailsSection() {
    return (
        <section className={styles.root}>

            <Container className={styles.container}>
                <ContactDetailsLine className={styles.contactDetailsLine}/>
                <div className={styles.containerBg}>
                    <div className={styles.details}>
                        <Title className={styles.title}>CONTACT DETAILS</Title>
                        <div className={styles.body}>
                            <p>
                                <span className={styles.strong}>STAFFRENT UAB</span>
                                <br/>
                                <span className={styles.strong}>STAFFRENT SIA</span>
                            </p>
                            <p>
                                <span className={styles.strong}>KvK</span> 91125170
                                <br/>
                                <span className={styles.strong}>KvK</span> 91150396
                            </p>
                            <p>
                                <a className={styles.underlined}
                                   href="mailto:info@staffrent.ee">info@staffrent.ee</a> {' '}
                                <a
                                    className={styles.underlined}
                                    href="mailto:offer@staffrent.nl">offer@staffrent.nl</a>
                            </p>
                        </div>
                    </div>
                    <div className={styles.mapBlock}>
                        <div className={styles.address}>
                            <div className={styles.addressBlockItem}>
                                <h3 className={styles.addressBlockTitle}>Address</h3>
                                <p className={styles.addressBlockBody}>Netherlands, Oude <br/>
                                    Trambaan 50, 2265 <br/>
                                    DA in Leidschendam</p>
                            </div>
                            <div className={styles.addressBlockItem}>
                                <h3 className={styles.addressBlockTitle}>Call Us</h3>
                                <p className={styles.addressBlockBody}>
                                    +372 57856099
                                    <br/>
                                    + 31 97 010265013
                                </p>
                            </div>
                            <div className={styles.addressBlockItem}>
                                <h3 className={styles.addressBlockTitle}>Opening hours</h3>
                                <p className={styles.addressBlockBody}>
                                    Mon–Fri <br/>
                                    09:00–20:00 <br/>
                                    Sat–Sun <br/>
                                    11:00–17:00 <br/>
                                </p>
                            </div>
                        </div>
                        <div className={styles.map}>
                            <GoogleMapBlock/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
