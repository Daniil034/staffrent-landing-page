import styles from './StaffingSolutionsSection.module.scss';
import {Title} from "../../shared/ui/Title/Title";
import {SOLUTION_LIST} from "./config";
import {SolutionItem} from "./SolutionItem/SolutionItem";
import {Container} from "../../shared/ui/Container/Container";

export function StaffingSolutionsSection() {
    return (
        <section>
            <Container>
                <Title>PERSONALI LAHENDUSED</Title>
                <p className={styles.subtitle}>Leia parimad töötajad</p>
                <div className={styles.list}>
                    {SOLUTION_LIST.map(solution => (
                        <SolutionItem
                            key={solution.title}
                            title={solution.title}
                            body={solution.body}
                            backgroundImgSrc={solution.backgroundImgSrc}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
