import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class AklMap extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div className='map'>
      <Map center={[-36.8485, 174.7633]}  zoom={12}>
        <TileLayer
        url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        maxZoom='18'
        id= 'mapbox.streets'
        accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'

        // accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
        //   attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        //   url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1pbHljb2NvIiwiYSI6ImNqaDZ2bzRtYTAxaGEyeXA3NHV3em00c3YifQ.vPrXAwEUUzaJ27sV39ATqw"
        />
        <Marker position={[-36.8485, 174.7633]}>
          <Popup>
            <span>
              EDA <br /> 7am-10pm
            </span>
          </Popup>
        </Marker>
        {/* Example */}
        {/* {(this.props.location && this.props.location.map((details) => {
            const position = {
              lat: details.lat,
              lng: details.lng
            }
            return (
              <Marker key={details.id} position={position} icon={myIcon}>
                <Popup><span>{details.name}<br />{details.address}</span></Popup>
              </Marker>
            )
          })
          )} */}
      </Map>
      </div>
    )
  }
}

export default AklMap
