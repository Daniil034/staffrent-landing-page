import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import styles from "./GoogleMap.module.scss";

const center = {lat: 52.083050, lng: 4.394150};

export function GoogleMapBlock() {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!
    });

    console.log(isLoaded);

    if (!isLoaded) {
        return null;
    }
    return (
        <GoogleMap mapContainerClassName={styles.map} center={center} zoom={10}>
            <Marker position={center}/>
        </GoogleMap>
    );
}
