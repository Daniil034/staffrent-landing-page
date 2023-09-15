import {Container} from "shared/ui/Container/Container";
import {ReactComponent as StaffrentLogo} from "shared/icons/staffrentLogo.svg";
import styles from './HeaderSection.module.scss';
// import './test.css'
import {NavLink} from "react-router-dom";
import {ChangeEvent, useEffect, useRef, useState} from "react";

export function HeaderSection() {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    }

    const handleLickClick = () => {
        setChecked(false);
    }

    return (
        <section className={styles.root}>
            <Container className={styles.container}>
                <StaffrentLogo className={styles.logo}/>
                <input id="menu-toggle" className={styles.menuToggle} checked={checked}
                       type="checkbox"/>
                <label className={styles.menuButtonContainer} htmlFor="menu-toggle" onClick={handleCheckboxChange}>
                    <div className={styles.menuButton}></div>
                </label>
                {/*<nav>*/}
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <NavLink to="/" onClick={handleLickClick}
                                 className={({isActive}) => isActive ? styles.linkActive : styles.link}>
                            Main
                        </NavLink>
                    </li>
                    <li className={styles.menuItem}>
                        <NavLink to="/about" className={({isActive}) => isActive ? styles.linkActive : styles.link}>
                            About Us
                        </NavLink>
                    </li>
                    <li className={styles.menuItem}>
                        <NavLink to="/contact-us"
                                 className={({isActive}) => isActive ? styles.linkActive : styles.link}>
                            Contact Us
                        </NavLink>
                    </li>
                    <li className={styles.menuItem}>
                        <NavLink to="/employers"
                                 className={({isActive}) => isActive ? styles.linkActive : styles.link}>
                            Employers
                        </NavLink>
                    </li>
                    <li className={styles.menuItem}>
                        <NavLink to="/job-seeker"
                                 className={({isActive}) => isActive ? styles.linkActive : styles.link}>
                            Jobseeker
                        </NavLink>
                    </li>
                    <li className={styles.menuItem}>
                        <NavLink to="/faq" className={({isActive}) => isActive ? styles.linkActive : styles.link}>
                            FAQ
                        </NavLink>
                    </li>
                </ul>
                {/*</nav>*/}
            </Container>
        </section>
    );
}
