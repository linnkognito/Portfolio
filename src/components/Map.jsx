import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Wrapper from './Wrapper';

const mapIcon = L.icon({
  iconUrl: 'public/icons/mapmarker.png',
  iconSize: [20, 20],
  shadowUrl: null,
});

const markers = [
  { position: [45.5051, -122.675], popupText: 'Lives: Portland, OR' },
  { position: [58.410807, 15.621373], popupText: 'Born: Sweden' },
];

function Map() {
  return (
    <Wrapper cls='w-full h-fit shadow-subtle rounded'>
      <h3>Map</h3>
      <div className='p-2 w-full h-full min-h-[300px] max-h-[300px] rounded overflow-hidden'>
        <MapContainer
          center={[20, -20]}
          zoom={1}
          style={{ width: '100%', height: '100%' }}
          closePopupOnClick={false}
          dragging={false}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {markers.map((m, i) => (
            <Marker position={m.position} icon={mapIcon} key={i}>
              <Popup
                closeButton={false}
                autoClose={false}
                closeOnClick={false}
                closeOnEscapeKey={false}
                open={true}
              >
                {m.popupText}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Wrapper>
  );
}

export default Map;
