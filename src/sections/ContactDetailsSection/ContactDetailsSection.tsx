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
                        <Title className={styles.title}>KONTAKTANDMED</Title>
                        <div className={styles.body}>
                            <p>
                                <span className={styles.strong}>STAFFRENT OÜ</span>
                                <br/>
                                <span className={styles.strong}>STAFFRENT OÜ</span>
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
                                <p className={styles.addressBlockBody}>Estonia pst 5a,<br/>
                                    10143 Tallinn<br/>
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
                                <h3 className={styles.addressBlockTitle}>Lahtiolekuajad</h3>
                                <p className={styles.addressBlockBody}>
                                    E-R<br/>
                                    09:00–20:00 <br/>
                                    L–P<br/>
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
