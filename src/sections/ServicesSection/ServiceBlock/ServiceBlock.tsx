import styles from './ServiceBlock.module.scss';
import {Title} from "../../../shared/ui/Title/Title";

export type ServiceBlockProps = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    description: string,
};

export function ServiceBlock(props: ServiceBlockProps) {
    const {imgSrc, title, description} = props;
    return (
        <div className={styles.root}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imgSrc} alt=""/>
            </div>
            <Title className={styles.title} color="red">{title}</Title>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
