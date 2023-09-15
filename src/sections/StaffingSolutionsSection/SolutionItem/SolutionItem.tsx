import styles from './SolutionItem.module.scss';
import {ReactNode} from "react";
import {Title} from "../../../shared/ui/Title/Title";

export type SolutionItemProps = {
    title: string,
    body: ReactNode,
    backgroundImgSrc: string,
};

export function SolutionItem(props: SolutionItemProps) {
    const {title, body, backgroundImgSrc} = props;

    return (
        <div className={styles.root}>
            <div className={styles.contentBlock}>
                <div className={styles.textBlock}>
                    <div className={styles.content}>
                        <Title className={styles.title} color="red">{title}</Title>
                        <div className={styles.textBody}>
                            {body}
                        </div>
                    </div>
                    <div className={styles.whiteBlock}/>
                </div>
                <img loading="lazy" className={styles.image} src={backgroundImgSrc}/>
            </div>
        </div>
    );
}
