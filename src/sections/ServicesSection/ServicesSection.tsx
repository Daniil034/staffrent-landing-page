import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";
import styles from './ServicesSection.module.scss';
import {SERVICE_LIST} from "./config";
import {ServiceBlock} from "./ServiceBlock/ServiceBlock";

type Props = {};

export function ServicesSection(props: Props) {
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title}>RECRUITMENT & OUTSOURCING SERVICES OVER EUROPE</Title>
                <p className={styles.description}>
                    We will help you achieve goals for your business.
                    <br/>
                    Cost reduction worries you?
                    <br/>
                    Guaranteed result within shortest time!
                </p>
                <div className={styles.serviceBlocks}>
                    {SERVICE_LIST.map(service => (
                        <ServiceBlock
                            key={service.title}
                            imgSrc={service.imgSrc}
                            imgAlt={service.imgAlt}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
