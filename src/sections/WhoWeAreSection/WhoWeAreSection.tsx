import backgroundImg from 'shared/images/aboutUsBackground.png';
import styles from './WhoWeAreSection.module.scss';
import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";

export function WhoWeAreSection() {
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title}>WHO WE ARE</Title>
                <div className={styles.backgroundContainer}>
                    <img className={styles.image} src={backgroundImg}/>
                    <div className={styles.backgroundContainerGradient}/>
                </div>
                <div className={styles.content}>
                    <p>
                        <span className={styles.staffrent}>STAFFRENT</span> is one of the leading personnel outsourcing
                        and outstaffing agencies in the Baltic
                        States
                        and Western Europe, specializing in the hiring of middle and senior staff in various
                        professional
                        fields and sectors of the economy since 2013.
                        Over the years of productive work, we have helped more than 600 companies optimize their work by
                        reducing the burden on the HR department, as well as minimizing tax and personnel costs.
                    </p>
                    <p>
                        We are equally attentive to the personnel needs of our clients and to the career growth of our
                        candidates. Thanks to an individual approach and deep professional knowledge, our consultants
                        build
                        long-term mutually beneficial relationships with clients and candidates. We successfully operate
                        in
                        all sectors of the economy in which we specialize, as well as in all regions of presence.
                    </p>
                    <p>

                        We don't just fill vacancies, we tailor tailor-made solutions to meet your needs, from highly
                        qualified recruitment to highly specialized labor market reports.
                    </p>
                    <p>
                        <span className={styles.staffrent}>STAFFRENT</span> clients get the opportunity to:
                        <ul className={styles.list}>
                            <li>Promptly fill the personnel shortage with motivated employees in the required quantity
                                for the
                                required period - without registering of temporary workers, without checking their
                                qualifications,
                                without additional costs for guaranteed social benefits.
                            </li>
                            <li>Quickly reduce the number of full-time employees of the enterprise, depending on
                                seasonal,
                                market
                                changes in the volume of work. Getting rid of the problems of line worker turnover by
                                unloading
                                the
                                personnel department.
                            </li>
                            <li>Reduce payroll obligations.</li>
                        </ul>
                    </p>
                    <p>

                        In the current economic realities, attracting personnel from an outsourcing company is an
                        effective
                        way to solve the staffing of companies. Partnering with STAFFRENT agency eliminates the risks of
                        providing low-quality personnel, allowing the organization to develop freely without spending
                        money
                        on secondary work processes.
                    </p>
                </div>
            </Container>
        </section>
    );
}
