import styles from './EmployersPage.module.scss';
import {StaffingSolutionsSection} from "../../sections/StaffingSolutionsSection/StaffingSolutionsSection";

export function EmployersPage() {
    return (
        <div className={styles.root}>
            <StaffingSolutionsSection/>
        </div>
    );
}
