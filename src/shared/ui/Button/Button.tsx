import {ComponentProps, ReactNode} from "react";
import classNames from "classnames";
import styles from './Button.module.scss';

type PaddingVariant = 'small' | 'big'

type ColorVariant = 'red' | 'white'

interface Props extends ComponentProps<'button'> {
    children: ReactNode,
    className?: string,
    color?: ColorVariant,
    padding?: PaddingVariant
};

export function Button(props: Props) {
    const {children, className, padding = 'small', color = 'red', ...restProps} = props;

    return (
        <button className={classNames(styles.root, {
            [styles.small]: padding === 'small',
            [styles.white]: color === 'white'
        }, className)} {...restProps}>
            {children}
        </button>
    );
};
