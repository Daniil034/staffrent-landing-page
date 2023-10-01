import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";
import styles from './ServicesSection.module.scss';
import {SERVICE_LIST} from "./config";
import {ServiceBlock} from "./ServiceBlock/ServiceBlock";
import {
    en_description_first,
    en_description_second,
    en_description_third,
    en_title
} from "../../content/en/MainPage/ServicesSectionContent/ServicesSectionContent";

type Props = {};

export function ServicesSection(props: Props) {
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title}>{en_title}</Title>
                <p className={styles.description}>
                    {en_description_first}
                    <br/>
                    {en_description_second}
                    <br/>
                    {en_description_third}
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
