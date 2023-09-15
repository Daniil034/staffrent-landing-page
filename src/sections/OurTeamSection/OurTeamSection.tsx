import styles from './OurTeamSection.module.scss';
import {Container} from "../../shared/ui/Container/Container";
import {Title} from "../../shared/ui/Title/Title";
import {TEAM_LIST} from "./config";
import {TeamMemberItem} from "./TeamMemberItem/TeamMemberItem";
import {ReactComponent as TeamMembersLine} from "shared/icons/teamMembersLine.svg";
import classNames from "classnames";

export function OurTeamSection() {
    return (
        <section>
            <Container className={classNames(styles.container, styles.top)}>
                <Title>OUR TEAM MEMBERS</Title>
                <p className={styles.meetTeam}>Meet our team</p>
            </Container>
            <div className={styles.teamContainer}>
                <TeamMembersLine className={styles.backgroundLine}/>
                <Container>
                    <div className={styles.teamList}>
                        {TEAM_LIST.map(member => (
                            <TeamMemberItem
                                imageSrc={member.imageSrc}
                                name={member.name}
                                position={member.position}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
}
