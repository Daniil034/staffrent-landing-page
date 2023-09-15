import {Title} from "../../shared/ui/Title/Title";
import {useMemo, useReducer} from "react";
import {Button} from "../../shared/ui/Button/Button";
import {ReactComponent as QuestionMark} from "shared/images/questionMark.svg";
import styles from './HelpSection.module.scss';
import {Input} from "../../shared/ui/Input/Input";

type FormData = {
    name: string,
    company: string,
    email: string,
    phone: string,
    comments: string
}

export function HelpSection() {
    const [formData, setFormData] = useReducer(
        (prevState: FormData, newState: Partial<FormData>) => ({...prevState, ...newState}),
        {
            name: '',
            company: '',
            email: '',
            phone: '',
            comments: ''
        }
    )

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData({[field]: value})
    }

    const inputs = useMemo(() => {
        return Object.entries(formData).map(([field, value]) => (
            <Input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={value}
                onChange={e => handleInputChange(field as keyof FormData, e.target.value)}
            />
        ))
    }, [formData])

    return (
        <section className={styles.root}>
            <Title className={styles.title}>Ready to help you!</Title>
            <div className={styles.form}>
                <QuestionMark className={styles.questionMark}/>
                {inputs}
                <Button className={styles.button} color="white" padding="big">Send</Button>
            </div>
        </section>
    );
}
