import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";
import {ReactComponent as BenefitSectionTopLine} from "shared/icons/benefitSectionTopLine.svg"
import {ReactComponent as BenefitSectionBottomLine} from "shared/icons/benefitSectionBottomLine.svg"
import {ReactComponent as CouldFirst} from "shared/images/cloudFirst.svg"
import {ReactComponent as CloudSecond} from "shared/images/cloudSecond.svg"
import teamImage from 'shared/images/teamImage.png';
import styles from './BenefitSection.module.scss';
import classNames from "classnames";


export function BenefitSection() {
    return (
        <section className={styles.root}>
            <Container>
                <Title>How will you benefit from staff outsourcing?</Title>
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
                        <li>Staff outsourcing enables the hiring of the necessary staff for temporary or permanent work,
                            transferring the business process to our services
                        </li>
                        <li>Outsourcing allows you to obtain better results with no need for your own recruitment
                            division.
                        </li>
                        
                    </ul>
                </div>
                <div className={styles.cloudSecondContainer}>
                    <CloudSecond className={styles.cloudSecondImage}/>
                    <ul className={classNames(styles.cloudList, styles.cloudSecondList)}>
                        <li>We will select and train the staff within a short period of time so that they can carry out
                            the specific tasks that you have set for them.
                        </li>
                        <li>We bear the responsibility for our staff and fulfilment of your business tasks.</li>
                        <li>No obligations on labour relations with staff.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
