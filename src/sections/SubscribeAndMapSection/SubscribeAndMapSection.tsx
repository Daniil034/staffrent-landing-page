import {Title} from "../../shared/ui/Title/Title";
import styles from './SubscribeAndMapSection.module.scss';
import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";
import {Container} from "../../shared/ui/Container/Container";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import {useMemo} from "react";
import {GoogleMapBlock} from "../../shared/ui/GoogleMapBlock/GoogleMapBlock";


export function SubscribeAndMapSection() {


    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title}>Subscribe form</Title>
                <div className={styles.inputBlock}>
                    <Input className={styles.input} placeholder="emailexample@mail.com"/>
                    <Button color="white" className={styles.button}>Join</Button>
                </div>
                <div className={styles.mapContainer}>
                    <GoogleMapBlock/>
                </div>
            </Container>
        </section>
    );
}


