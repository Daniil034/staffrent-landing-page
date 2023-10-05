import {Title} from "../../shared/ui/Title/Title";
import styles from './SubscribeAndMapSection.module.scss';
import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";
import {Container} from "../../shared/ui/Container/Container";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import {useMemo, useState} from "react";
import {GoogleMapBlock} from "../../shared/ui/GoogleMapBlock/GoogleMapBlock";
import sendForm from "../../api";


export function SubscribeAndMapSection() {
    const [email, setEmail] = useState("");
    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title}>Telli vorm</Title>
                <div className={styles.inputBlock}>
                    <Input value={email} onChange={event => setEmail(event.target.value)} className={styles.input}
                           placeholder="email@example.com"/>
                    <Button color="white" className={styles.button} onClick={() => {
                        sendForm('SUBSCRIBE', {email: email}).then(() => {
                            setEmail('');
                        });
                    }}>ühinema</Button>
                </div>
                <div className={styles.mapContainer}>
                    <GoogleMapBlock/>
                </div>
            </Container>
        </section>
    );
}


