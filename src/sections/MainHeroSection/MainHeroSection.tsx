import {Container} from "../../shared/ui/Container/Container";
import heroImage from 'shared/images/heroImage.png';
import {HeroButton} from "./components/HeroButton/HeroButton";
import styles from './MainHeroSection.module.scss';
import {Title} from "../../shared/ui/Title/Title";
import {en_description, en_imageParagraph, en_top} from "../../content/en/MainPage/MainHeroSectionContent";

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
                            <Title align="right">{en_top}</Title>
                            <p className={styles.imageParagraph}>{en_imageParagraph}</p>
                        </div>
                    </div>
                </div>
                <p className={styles.description}>{en_description}</p>
            </Container>
        </section>
    );
}
