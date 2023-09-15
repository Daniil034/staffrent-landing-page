import {Container} from "../../shared/ui/Container/Container";
import heroImage from 'shared/images/heroImage.png';
import {HeroButton} from "./components/HeroButton/HeroButton";
import styles from './MainHeroSection.module.scss';
import {Title} from "../../shared/ui/Title/Title";

type Props = {};

export function MainHeroSection(props: Props) {
    return (
        <section className={styles.root}>
            <Container>
                <div className={styles.imageBlock}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={heroImage}/>
                        <div className={styles.background}/>
                    </div>
                    <div className={styles.imageDescription}>
                        <div className={styles.top}>
                            <Title align="right">Forget Everything You Know About
                                Leased
                                Staff</Title>
                            <p className={styles.imageParagraph}>Premium staffing solutions for immediate workforce
                                and
                                project needs.</p>
                        </div>
                        <HeroButton/>
                    </div>
                </div>
                <p className={styles.description}>"STAFFRENT" provides a full range of services in the field of
                    recruitment and outstaffing of both highly qualified and line personnel, combined with an individual
                    approach to each client.
                    Since 2013, the STAFFRENT group of companies has helped many employees find the best employment
                    solution and great employees for employers.
                    We do the selection and recruitment of staff with our own offices in the Netherlands, Poland,
                    Latvia, Lithuania, Estonia and Moldova.
                    Collective labour agreement (CAO) applies to our staff.</p>
            </Container>
        </section>
    );
}
