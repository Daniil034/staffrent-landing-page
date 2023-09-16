import styles from './VacancyItem.module.scss';
import {Title} from "../../../shared/ui/Title/Title";
import {ReactNode} from "react";

type BulletPoint = {
    bulletPointTitle: string,
    bulletPointBody: ReactNode
}

export type VacancyItemProps = {
    title: string,
    bulletPoints: BulletPoint[],
    imageSrc: string,
    imageMarginRight: number,
    imageMarginLeft: number,
    imagePosition: 'left' | 'right'
}

export function VacancyItem(props: VacancyItemProps) {
    const {title, bulletPoints, imageSrc, imageMarginRight, imageMarginLeft, imagePosition} = props;

    return (
        <li className={styles.root}>
            {imagePosition === 'left' ? (
                <>
                    <div className={styles.imageContainer}
                         style={{
                             marginRight: `${imageMarginRight}rem`,
                             marginLeft: `${imageMarginLeft}rem`
                         }}>
                        <div className={styles.image}
                             style={{backgroundImage: `url(${imageSrc})`, backgroundPosition: 'right'}}/>
                    </div>
                    <div
                        className={styles.textContent}
                        style={{
                            background: 'linear-gradient(270deg, #FFF 67.61%, rgba(255, 255, 255, 0.00) 98.89%)',
                            textAlign: 'right'
                        }}
                    >
                        <Title className={styles.title} color="red">{title}</Title>
                        <ul className={styles.list}>
                            {bulletPoints.map(point => (
                                <li className={styles.listItem} key={point.bulletPointTitle}>
                                    <h4 className={styles.listItemTitle}>{point.bulletPointTitle}</h4>
                                    <p className={styles.listItemBody}>{point.bulletPointBody}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <div
                        className={styles.textContent}
                        style={{
                            background: 'linear-gradient(90deg, #FFF 67.61%, rgba(255, 255, 255, 0.00) 98.89%)'
                        }}
                    >
                        <Title className={styles.title} color="red">{title}</Title>
                        <ul className={styles.list}>
                            {bulletPoints.map(point => (
                                <li className={styles.listItem} key={point.bulletPointTitle}>
                                    <h4 className={styles.listItemTitle}>{point.bulletPointTitle}</h4>
                                    <p className={styles.listItemBody}>{point.bulletPointBody}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.imageContainer}
                         style={{marginRight: `${imageMarginRight}rem`, marginLeft: `${imageMarginLeft}rem`}}>
                        <div className={styles.image} style={{backgroundImage: `url(${imageSrc})`}}/>
                    </div>
                </>
            )}
        </li>
    );
}
