import {ComponentProps} from "react";
import classNames from "classnames";
import styles from './Input.module.scss';

type ColorVariant = 'white' | 'red';

interface Props extends ComponentProps<'input'> {
    color?: ColorVariant,
    className?: string,
}

export function Input(props: Props) {
    const {color = 'white', className, ...restProps} = props;

    return (
        <input className={classNames(styles.root, {[styles.red]: color === 'red'}, className)} {...restProps}/>
    );
}

