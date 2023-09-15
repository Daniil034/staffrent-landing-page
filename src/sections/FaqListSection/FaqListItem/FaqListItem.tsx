import styles from './FaqListItem.module.scss';
import {ReactNode} from "react";
import {Title} from "../../../shared/ui/Title/Title";

export type FaqListItemProps = {
    title: string,
    body: ReactNode,
    imageSrc: string,
    imagePosition: 'left' | 'right',
};

export function FaqListItem(props: FaqListItemProps) {
    const {title, body, imageSrc, imagePosition} = props;

    if (imagePosition === 'left') {
        return (
            <li className={styles.root}>
                <Title className={styles.titleRight}>{title}</Title>
                <div className={styles.container}>
                    <Image imageSrc={imageSrc}/>
                    <Content title={title} body={body} textAlign={'right'}/>
                </div>
            </li>
        )
    } else {
        return (
            <li className={styles.root}>
                <Title className={styles.titleLeft}>{title}</Title>
                <div className={styles.container}>
                    <Content title={title} body={body} textAlign={'left'}/>
                    <Image imageSrc={imageSrc}/>
                </div>
            </li>
        )
    }
}

const Image = (props: { imageSrc: string, }) => {
    const {imageSrc} = props;
    return (
        <img src={imageSrc} className={styles.image}/>
    )
}

const Content = (props: { title: string, body: ReactNode, textAlign: 'left' | 'right' }) => {
    const {body, textAlign} = props;
    return (
        <div style={{textAlign}}>
            <div className={styles.body}>
                {body}
            </div>
        </div>
    )
}
