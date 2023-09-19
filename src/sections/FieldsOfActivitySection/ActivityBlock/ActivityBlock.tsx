import {Title} from "../../../shared/ui/Title/Title";
import styles from './ActivityBlock.module.scss';
import {Link} from "react-router-dom";

export type ActivityBlockProps = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    money: string,
    index: number,
};

export function ActivityBlock(props: ActivityBlockProps) {
    const {imgSrc, imgAlt, title, money, index} = props;

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
                <Link className={styles.link} to={`/activity/${index}`} rel="noreferrer">More info</Link>
            </div>

        </div>
    );
}
