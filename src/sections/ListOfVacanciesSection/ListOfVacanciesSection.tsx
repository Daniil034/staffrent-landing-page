import styles from './ListOfVacanciesSection.module.scss';
import {Title} from "../../shared/ui/Title/Title";
import {VACANCY_LIST} from "./config";
import {VacancyItem} from "./VacancyItem/VacancyItem";
import {Container} from "../../shared/ui/Container/Container";
import {ChangeEvent, useReducer} from "react";
import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";

type FormData = {
    name: string,
    phone: string,
    surname: string,
    email: string,
    vacancyList: string,
    linkToJob: string,
}

const initialFormState: FormData = {
    name: '',
    phone: '',
    surname: '',
    email: '',
    vacancyList: '',
    linkToJob: ''
}

export function ListOfVacanciesSection() {
    const [formData, setFormData] = useReducer(
        (prevState: FormData, newState: Partial<FormData>) => ({...prevState, ...newState}),
        initialFormState
    );

    const handleInput = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({[field]: e.target.value})
    }

    const placeholders: Record<keyof FormData, string> = {
        name: 'Name',
        phone: 'Phone',
        surname: 'Surname',
        email: 'Email',
        vacancyList: 'Vacancy list',
        linkToJob: 'Link to a job resume'
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
                    <div className={styles.cvInputs}>
                        {Object.entries(formData).map(([field, value]) => (
                            <Input
                                color="red"
                                className={styles.cvInputItem}
                                value={value}
                                onChange={handleInput(field as keyof FormData)}
                                placeholder={placeholders[field as keyof FormData]}
                            />
                        ))}
                    </div>
                    <Button color="red" padding="big" className={styles.cvButton}>Send</Button>
                </div>
            </Container>
        </section>
    );
}
