import {WhoWeAreSection} from "../../sections/WhoWeAreSection/WhoWeAreSection";
import styles from './AboutUsPage.module.scss';
import {OurTeamSection} from "../../sections/OurTeamSection/OurTeamSection";

export function AboutUsPage() {
    return (
        <div className={styles.root}>
            <WhoWeAreSection/>
            <OurTeamSection/>
        </div>
    );
}
