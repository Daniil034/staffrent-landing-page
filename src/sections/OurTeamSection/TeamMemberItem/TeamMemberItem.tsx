import {Title} from "shared/ui/Title/Title";
import styles from './TeamMemberItem.module.scss';

export type TeamMemberProps = {
    imageSrc: string,
    name: string,
    position: string,
};

export function TeamMemberItem(props: TeamMemberProps) {
    const {imageSrc, name, position} = props;

    return (
        <div className={styles.root}>
            <img className={styles.image} src={imageSrc} alt={`Our team member - ${name}`}/>
            <Title className={styles.name}>{name}</Title>
            <p className={styles.position}>{position}</p>
        </div>
    );
}
