import {Title} from "../../shared/ui/Title/Title";
import {useMemo, useReducer} from "react";
import {Button} from "../../shared/ui/Button/Button";
import {ReactComponent as QuestionMark} from "shared/images/questionMark.svg";
import styles from './HelpSection.module.scss';
import {Input} from "../../shared/ui/Input/Input";
import sendForm from "../../api";
import {findByRole} from "@testing-library/react";

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

    const areAllFieldsFilled = () => {
        return Object.values(formData).every(value => value !== '');
    }


    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData({[field]: value})
    }

    const inputs = useMemo(() => {
        return Object.entries(formData).map(([field, value]) => (
            <Input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={value}
                required={true}
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
                <Button className={styles.button} color="white" padding="big" onClick={() => {
                    if (!areAllFieldsFilled()) return;
                    sendForm("READY_TO_HELP_YOU", formData).then(() => {
                        setFormData({
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                            comments: ''
                        });
                    });
                }}>Send</Button>
            </div>
        </section>
    );
}
