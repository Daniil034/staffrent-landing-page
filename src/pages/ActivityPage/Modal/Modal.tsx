import {ReactNode, useEffect} from "react";
import styles from "./Modal.module.scss";

type Props = {
    children: ReactNode,
    onClose: () => void;
};

export function Modal(props: Props) {
    const {children, onClose} = props;

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className={styles.root} onClick={onClose}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}