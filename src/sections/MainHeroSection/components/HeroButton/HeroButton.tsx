import styles from './HeroButton.module.scss';

export function HeroButton() {
    return (
        <button className={styles.root} onClick={() => undefined}>
            Contact Us
        </button>
    );
};
