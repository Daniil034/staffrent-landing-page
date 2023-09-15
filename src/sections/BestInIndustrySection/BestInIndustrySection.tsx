import {Title} from "../../shared/ui/Title/Title";
import shakingHandsImage from 'shared/images/shakingHandsImage.png'
import styles from './BestInIndustrySection.module.scss';
import {Container} from "../../shared/ui/Container/Container";

export function BestInIndustrySection() {
    return (
        <section className={styles.root}>
            <Title className={styles.title}>BEST IN INDUSTRY</Title>
            <div className={styles.imageContainer}>
                <div className={styles.imageContainerTopGradient}/>
                <img className={styles.image} src={shakingHandsImage} alt="People shaking hands"/>
                <div className={styles.imageContainerBottomGradient}/>
            </div>
            <Container>
                <p className={styles.paragraph}>
                    «STAFFRENT» differs from other agencies in its wide range of services for both employers and job
                    seekers.
                    Prompt and high-quality closing of vacancies due to:
                    - formed team of experts
                    - experience in implementing numerous recruiting projects
                    - patented author's methods of selection and evaluation
                    - large database of relevant specialists
                    - providing turnkey solutions for both parties
                    <br/>
                    <br/>
                    Our recruiters successfully use advanced methods of personnel search, selection of candidates in
                    accordance with customer project requirements, assessment of their professional and personal
                    parameters.
                    We will operatively find and provide staff with a high level of intrinsic motivation, which as well
                    will
                    affect to the quality and duration of the employee's work within the Your project.
                    <br/>
                    <br/>
                    By entrusting the search for employees to outsourcing agency professionals, you will gain access to
                    our
                    extensive database of candidates. If you need narrow-profile specialists and professionals with
                    unique
                    work experience, STAFFRENT recruiters will conduct appropriate market research and promptly provide
                    lists of candidates using direct personnel search and headhunting methods.
                </p>
            </Container>
        </section>
    );
}

