import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import {useMemo} from "react";
import styles from "./GoogleMap.module.scss";

type Props = {};

export function GoogleMapBlock(props: Props) {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!
    });

    const center = useMemo(() => ({lat: 52.083050, lng: 4.394150}), []);

    if (!isLoaded) {
        return null;
    }
    return (
        <GoogleMap mapContainerClassName={styles.map} center={center} zoom={10}>
            <Marker position={center}/>
        </GoogleMap>
    );
}
