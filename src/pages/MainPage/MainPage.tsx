import {MainHeroSection} from "../../sections/MainHeroSection/MainHeroSection";
import {BenefitSection} from "../../sections/BenefitSection/BenefitSection";
import {HelpSection} from "../../sections/HelpSection/HelpSection";
import {BestInIndustrySection} from "../../sections/BestInIndustrySection/BestInIndustrySection";
import {ServicesSection} from "../../sections/ServicesSection/ServicesSection";
import {ContactUsSection} from "../../sections/ContactUsSection/ContactUsSection";
import {FieldsOfActivitySection} from "../../sections/FieldsOfActivitySection/FieldsOfActivitySection";
import {SubscribeAndMapSection} from "../../sections/SubscribeAndMapSection/SubscribeAndMapSection";
import styles from './MainPage.module.scss';

export function MainPage() {
    return (
        <div className={styles.root}>
            <MainHeroSection/>
            <BenefitSection/>
            <HelpSection/>
            <BestInIndustrySection/>
            <ServicesSection/>
            <ContactUsSection/>
            <FieldsOfActivitySection/>
            <SubscribeAndMapSection/>
        </div>
    );
}
