import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";
import {ReactComponent as BenefitSectionTopLine} from "shared/icons/benefitSectionTopLine.svg"
import {ReactComponent as BenefitSectionBottomLine} from "shared/icons/benefitSectionBottomLine.svg"
import {ReactComponent as CouldFirst} from "shared/images/cloudFirst.svg"
import {ReactComponent as CloudSecond} from "shared/images/cloudSecond.svg"
import teamImage from 'shared/images/teamImage.png';
import styles from './BenefitSection.module.scss';
import classNames from "classnames";
import {
    en_fifth_cloud,
    en_first_cloud,
    en_fourth_cloud,
    en_second_cloud,
    en_third_cloud,
    en_title
} from "../../content/en/MainPage/BenefitSectionContent";


export function BenefitSection() {
    return (
        <section className={styles.root}>
            <Container>
                <Title>{en_title}</Title>
            </Container>
            <div className={styles.imageContainer}>
                <BenefitSectionTopLine className={styles.lineTop}/>
                <img className={styles.teamImage} src={teamImage} alt="Our team photo"/>
                <BenefitSectionBottomLine className={styles.lineBottom}/>
            </div>
            <div className={styles.cloudsContainer}>
                <div className={styles.cloudFirstContainer}>
                    <CouldFirst className={styles.cloudFirstImage}/>
                    <ul className={classNames(styles.cloudList, styles.cloudFirstList)}>
                        <li>
                            {en_first_cloud}
                        </li>
                        <li>
                            {en_second_cloud}
                        </li>

                    </ul>
                </div>
                <div className={styles.cloudSecondContainer}>
                    <CloudSecond className={styles.cloudSecondImage}/>
                    <ul className={classNames(styles.cloudList, styles.cloudSecondList)}>
                        <li>
                            {en_third_cloud}
                        </li>
                        <li>{en_fourth_cloud}</li>
                        <li>{en_fifth_cloud}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
