import {ReactNode} from "react";
import classNames from "classnames";
import styles from './Title.module.scss';

type Props = {
    children: ReactNode,
    className?: string,
    color?: 'white' | 'red' | 'dark',
    align?: 'left' | 'center' | 'right',
};

export function Title(props: Props) {
    const {children, className, color = 'white', align = 'center'} = props;

    return (
        <h2 className={classNames(styles.root, {
            [styles.red]: color === 'red',
            [styles.dark]: color === 'dark',
            [styles.left]: align === 'left',
            [styles.center]: align === 'center',
            [styles.right]: align === 'right'
        }, className)}>
            {children}
        </h2>
    );
}
