import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import Mark from './Mark'

const coord = [
  { latitude: -22.2368424, longitude: -54.8262043, popup: 'Texto 1' },
  { latitude: -22.2342727, longitude: -54.8155319, popup: 'Texto 2' },
  { latitude: -22.2377059, longitude: -54.8023479, popup: 'Doce Nenê' },
  { latitude: -22.2374104, longitude: -54.8053358, popup: 'Frango na Brazza' },
  {
    latitude: -22.2683835,
    longitude: -54.7711959,
    popup: 'Aparelho na Empresa de Fulano'
  },
  {
    latitude: -22.2185824,
    longitude: -54.7743554,
    popup: "Aparelho na D'Itália"
  },
  {
    latitude: -22.2230476,
    longitude: -54.8012638,
    popup: 'Hospital do CASSEMS'
  }
]

const DEFAULT_LATITUDE = -22.2342727
const DEFAULT_LONGITUDE = -54.8155319

export default function OpenStreetMap() {
  return (
    <React.Fragment>
      <MapContainer
        center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coord.map((e, k) => {
          return (
            <Mark key={k} lat={e.latitude} long={e.longitude} popup={e.popup} />
          )
        })}
      </MapContainer>
    </React.Fragment>
  )
}
