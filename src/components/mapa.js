import * as React from "react";
import { compose, withProps } from "recompose"
//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//import credenciales from "../components/credenciales";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"; 


const Mapa = () => {
  //const mapURL = 'https://maps.googleapis.com/maps/api/js?v=9.exp&Key=${credenciales.mapsKey}';
  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: -0.223968, lng: -78.523101 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -0.223968, lng:-78.523101 }} />
        )}
      </GoogleMap>
    ))
  );


return(
<main>
<MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=9.exp&Key=AIzaSyCoR2kjFxUvA-U44NIYz6Cib_zZvEXsBuA"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
</main>
);
};
export default Mapa; 