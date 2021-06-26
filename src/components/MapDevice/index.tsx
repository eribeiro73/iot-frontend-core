import React
// , { useState }
 from 'react'
import {MapContainer, Marker, TileLayer} from 'react-leaflet'
import {} from 'leaflet'
import './styles.css'

export default function MapDevice(props) {
    // const [activeDevice, setActiveDevice] = useState(false)
    return (
        <MapContainer center={props.device.latitude} zoom={props.device.zoom ? props.device.zoom : 12}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker key={props.device.id} position={[props.device.latitude, props.device.longitude]} />


        </MapContainer>
    )
}
