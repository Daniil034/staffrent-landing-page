import {ACTIVITY_LIST} from "./config";
import {ActivityBlock} from "./ActivityBlock/ActivityBlock";
import {Title} from "../../shared/ui/Title/Title";
import styles from './FieldsOfActivitySection.module.scss';
import {Container} from "../../shared/ui/Container/Container";

export function FieldsOfActivitySection() {
    return (
        <section className={styles.root}>
            <Container className={styles.container}>
                <Title className={styles.title}>Main fields of activity</Title>
                <div className={styles.activities}>
                    {ACTIVITY_LIST.map(activity => (
                        <ActivityBlock
                            key={activity.title}
                            imgSrc={activity.imgSrc}
                            imgAlt={activity.imgAlt}
                            title={activity.title}
                            money={activity.money}
                            infoHref={activity.infoHref}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
