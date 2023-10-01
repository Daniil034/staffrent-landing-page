import {Title} from "../../shared/ui/Title/Title";
import shakingHandsImage from 'shared/images/shakingHandsImage.png'
import styles from './BestInIndustrySection.module.scss';
import {Container} from "../../shared/ui/Container/Container";
import {
    en_title,
    first_paragraph_dues,
    first_paragraph_title,
    second_paragraph, third_paragraph
} from "../../content/en/MainPage/BestInIndustrySectionContent";

export function BestInIndustrySection() {
    return (
        <section className={styles.root}>
            <Title className={styles.title}>{en_title}</Title>
            <div className={styles.imageContainer}>
                <div className={styles.imageContainerTopGradient}/>
                <img className={styles.image} src={shakingHandsImage} alt="People shaking hands"/>
                <div className={styles.imageContainerBottomGradient}/>
            </div>
            <Container className={styles.paragraphContainer}>
                <p className={styles.paragraph}>{first_paragraph_title}<br/>
                    - {first_paragraph_dues[0]}<br/>
                    - {first_paragraph_dues[1]}<br/>
                    - {first_paragraph_dues[2]}<br/>
                    - {first_paragraph_dues[3]}<br/>
                    - {first_paragraph_dues[4]}<br/>
                    <br/>
                    <br/>
                    {second_paragraph}
                    <br/>
                    <br/>
                    {third_paragraph}
                </p>
            </Container>
        </section>
    );
}

