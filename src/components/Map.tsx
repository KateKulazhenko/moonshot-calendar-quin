import React from 'react';
import { useAppSelector } from '../app/hooks';
import { MapContainer, TileLayer, Marker, Popup, useMap, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Map = () => {
    const launches = useAppSelector((state) => state.launches.items);

    return(
        <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={true} style={{ height: '100vh', width: '100wh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {launches.map((rocket: ILaunchItem) => {
                return(
                    <Marker position={[+rocket.pad.latitude, +rocket.pad.longitude]} key={rocket.id}>
                        <Popup>
                            {rocket.name && <p>Roket Name: {rocket.name}</p>}
                            {rocket.window_start && <p>Launch Date: {rocket.window_start}</p>}
                            {rocket.pad.name && <p>Launch Name: {rocket.pad.name}</p>}
                            {rocket.launch_service_provider.name && <p>Launch Agencies: {rocket.launch_service_provider.name}</p>}
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    );
};