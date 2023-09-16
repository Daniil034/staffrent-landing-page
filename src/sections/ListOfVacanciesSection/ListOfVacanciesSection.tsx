import styles from './ListOfVacanciesSection.module.scss';
import {Title} from "../../shared/ui/Title/Title";
import {VACANCY_LIST} from "./config";
import {VacancyItem} from "./VacancyItem/VacancyItem";
import {Container} from "../../shared/ui/Container/Container";
import {ChangeEvent, FormEvent, useReducer} from "react";
import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";
import classNames from "classnames";
import {defaultFormSelectorValue, formReducer, FormState, initialFormState, InputFields} from "./reducer";

const options = [defaultFormSelectorValue].concat(VACANCY_LIST.map(vacancy => ({
    label: vacancy.title,
    value: vacancy.title
})));


export function ListOfVacanciesSection() {
    const [formData, setFormData] = useReducer(formReducer, initialFormState);

    const handleInputChange = (field: InputFields) => (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({type: 'changeInput', payload: {field, value: e.target.value}})
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const option = options.find(option => option.value === e.target.value);
        if (!option) return;
        setFormData({type: 'changeSelect', payload: option})
    }

    const placeholders: Record<keyof FormState, string> = {
        name: 'Name',
        phone: 'Phone',
        surname: 'Surname',
        email: 'Email',
        vacancy: 'Vacancy list',
        linkToJob: 'Link to a job resume'
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section>
            <Container>
                <Title className={styles.title}>LIST OF OPEN VACANCIES</Title>
                <p className={styles.subtitle}>Don't miss the opportunity to be one of STAFFRENT team!</p>
                <ul className={styles.list}>
                    {VACANCY_LIST.map(vacancy => (
                        <VacancyItem
                            title={vacancy.title}
                            bulletPoints={vacancy.bulletPoints}
                            imageSrc={vacancy.imageSrc}
                            imageMarginRight={vacancy.imageMarginRight}
                            imageMarginLeft={vacancy.imageMarginLeft}
                            imagePosition={vacancy.imagePosition}
                            key={vacancy.title}
                        />
                    ))}
                </ul>
                <div className={styles.cv}>
                    <Title className={styles.cvTitle} color="dark">Send your cv</Title>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.cvInputs}>
                            {Object.entries(formData).map(([field, value]) => {
                                if (typeof value !== 'string') {
                                    return (
                                        <select name={field} required
                                                className={classNames(styles.cvInputItem, styles.select)} key={field}
                                                value={formData.vacancy.value}
                                                onChange={handleSelectChange}
                                        >
                                            {options.map(option => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    )
                                } else {
                                    return (
                                        <Input
                                            required
                                            key={field}
                                            color="red"
                                            className={styles.cvInputItem}
                                            value={value}
                                            onChange={handleInputChange(field as InputFields)}
                                            placeholder={placeholders[field as keyof FormState]}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <Button color="red" padding="big" className={styles.cvButton} type="submit">Send</Button>
                    </form>
                </div>
            </Container>
        </section>
    );
}
