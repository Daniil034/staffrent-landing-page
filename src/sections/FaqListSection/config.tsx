import {FaqListItemProps} from "./FaqListItem/FaqListItem";
import faqBenefitImg from 'shared/images/faqBenefitImage.png';
import faqPricesImg from 'shared/images/faqPricesImage.png';
import faqTaxesImg from 'shared/images/faqTaxesImage.png';
import faqContractsImg from 'shared/images/faqContractsImage.png';
import styles from './config.module.scss';

export const FAQ_LIST: FaqListItemProps[] = [
    {
        title: 'What are the benefits of outsourcing personnel?',
        body: <>
            <p className={styles.paragraph}>Outsourcing is generally more attractive than traditional hiring. Under the
                condition of competent
                alignment
                of this process, companies reduce fixed costs and solve their important personnel tasks.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>The tax burden is reduced.</li>
                <li className={styles.listItem}>There is an opportunity to cooperate with professionals without hiring
                    them on a permanent basis
                    (especially
                    when it is not economically viable).
                </li>
                <li className={styles.listItem}>The area of responsibility is clearly limited with the provision of
                    additional guarantees .
                </li>
                <li className={styles.listItem}>Optimized working time.</li>
                <li className={styles.listItem}>Organizational issues are solved more effectively.</li>
                <li className={styles.listItem}>In addition, outsourced employees are more motivated and better prepared
                    than in-house staff.
                </li>
            </ul>
        </>,
        imageSrc: faqBenefitImg,
        imagePosition: 'left'
    },
    {
        title: 'What are the average prices for services?',
        body: <>
            <p className={styles.paragraph}>
                The cost of outsourcing services depends on a combination of factors and is individual in each case.
                These
                factors include:
            </p>
            <ul className={styles.list} style={{marginBottom: '1rem'}}>
                <li className={styles.listItem}>
                    Direction of activity within which outsourcing services are provided;
                </li>
                <li className={styles.listItem}>
                    The period for which the contract is concluded (as a rule, the longer the term of the contract, the
                    more
                    favorable the conditions for the customer company);
                </li>
                <li className={styles.listItem}>
                    The region in which outsourcing services will be provided;
                </li>
                <li className={styles.listItem}>
                    The complexity of the work;
                </li>
            </ul>
            <p>
                and other factors.
                In order for us to calculate the cost of services and conditions in relation to your company, contact us
                and
                our specialists will make a detailed calculation and select the optimal solution for you.
            </p>
        </>,
        imageSrc: faqPricesImg,
        imagePosition: 'right'
    },
    {
        title: 'If a company orders outsourcing services, who then pays taxes for employees?',
        body: <p>
            According to the Labor Legislation of the European Union, the entire tax burden falls on the company in
            which employees are legally registered. Accordingly, if your company orders an outsourcing service from
            us,
            then taxes, as well as all issues related to staff registration, fall on our shoulders. At the same
            time, it
            is important to understand that taxes from the wages of our employees are included in the cost of
            services
            under an agreement with the customer company and are paid through G-account.
        </p>,
        imageSrc: faqTaxesImg,
        imagePosition: 'left'
    },
    {
        title: 'What contracts are concluded when outsourcing personnel?',
        body: <ul className={styles.list}>
            <li className={styles.listItem}>
                Direct labor lease agreement is concluded between the Customer - You and the Contractor - Us.
            </li>
            <li className={styles.listItem}>
                Tripartite agreement is concluded between Customer - You, Contractor - Us and Intermediary/Confidanr -
                OrganizedFlex B.V., who is our payroll agent.
            </li>
            <li className={styles.listItem}>
                Customer is provided with Oflex CRM system access, which reflects up-to-date information on all
                projects,
                leased employees, tax deductions, permits, working hours, salary slips and etc.
            </li>
        </ul>,
        imageSrc: faqContractsImg,
        imagePosition: 'right'
    }
]
