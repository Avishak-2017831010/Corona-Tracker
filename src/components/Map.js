import React from 'react'
import '../componentsstyle/Map.css'
import {Map as MapContainer,TileLayer} from 'react-leaflet'
import { showDataOnMap } from './utils';

function Map({countries,center,zoom,casesType}) {

    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}>
            <TileLayer
            attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'         
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
            />
            {showDataOnMap(countries,casesType)}
            </MapContainer>
        </div>
    )
}

export default Map;
