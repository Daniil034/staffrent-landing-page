import {Container} from "shared/ui/Container/Container";
import {ReactComponent as StaffrentLogo} from "shared/icons/staffrentLogo.svg";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {LINKS} from "./links";
import styles from './HeaderSection.module.scss';

export function HeaderSection() {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    }

    const handleLinkClick = () => {
        setChecked(false);
    }

    useEffect(() => {
        if (checked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [checked])

    return (
        <section className={styles.root}>
            <Container className={styles.container}>
                <StaffrentLogo className={styles.logo}/>
                <input id="menu-toggle" className={styles.menuToggle} checked={checked}
                       type="checkbox"/>
                <label className={styles.menuButtonContainer} htmlFor="menu-toggle" onClick={handleCheckboxChange}>
                    <div className={styles.menuButton}></div>
                </label>
                <ul className={styles.menu}>
                    {LINKS.map(link => (
                        <li key={link.href}>
                            <NavLink
                                to={link.href}
                                onClick={handleLinkClick}
                                className={({isActive}) => isActive ? styles.linkActive : styles.link}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
