import backgroundImg from 'shared/images/aboutUsBackground.png';
import styles from './WhoWeAreSection.module.scss';
import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";
import {
    en_first_opportunity,
    en_first_paragraph,
    en_fourth_paragraph,
    en_second_opportunity,
    en_second_paragraph,
    en_second_title,
    en_staffrent,
    en_third_paragraph,
    en_title,
} from "../../content/en/AboutUsPage/WhoWeAreSectionContent";

export function WhoWeAreSection() {
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title}>{en_title}</Title>
                <div className={styles.backgroundContainer}>
                    <img className={styles.image} src={backgroundImg}/>
                    <div className={styles.backgroundContainerGradient}/>
                </div>
                <div className={styles.content}>
                    <p>
                        <span className={styles.staffrent}>{en_staffrent}</span>{en_first_paragraph}
                    </p>
                    <p>
                        {en_second_paragraph}
                    </p>
                    <p>
                        {en_third_paragraph}
                    </p>
                    <p>
                        <span className={styles.staffrent}>{en_staffrent}</span>{en_second_title}
                        <ul className={styles.list}>
                            <li>
                                {en_first_opportunity}
                            </li>
                            <li>
                                {en_second_opportunity}
                            </li>
                            <li>Reduce payroll obligations.</li>
                        </ul>
                    </p>
                    <p>
                        {en_fourth_paragraph}
                    </p>
                </div>
            </Container>
        </section>
    );
}
