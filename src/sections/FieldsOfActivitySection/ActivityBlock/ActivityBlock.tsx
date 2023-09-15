import {Title} from "../../../shared/ui/Title/Title";
import styles from './ActivityBlock.module.scss';

export type ActivityBlockProps = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    money: string,
    infoHref: string,
};

export function ActivityBlock(props: ActivityBlockProps) {
    const {imgSrc, imgAlt, title, money, infoHref} = props;

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img className={styles.img} src={imgSrc} alt={imgAlt}/>
            </div>
            <Title className={styles.title}>{title}</Title>
            <div className={styles.container}>
                <p className={styles.body}>
                    1 hr
                    <br/>
                    €{money}
                </p>
            </div>
            <div className={styles.container}>
                <a className={styles.link} href={infoHref} target="_blank" rel="noreferrer">More info</a>
            </div>

        </div>
    );
}
