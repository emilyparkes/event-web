import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class Auckland extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: [
        -36.8670921833,
        174.7585096333
      ],
      position1: [
        -36.886042,
        175.004021
      ],
      zoom: 10
    }
  }
  render() {

    return (
      <Map center={this.state.position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1pbHljb2NvIiwiYSI6ImNqaDZ2bzRtYTAxaGEyeXA3NHV3em00c3YifQ.vPrXAwEUUzaJ27sV39ATqw"
        />
        <Marker position={this.state.position}>
          <Popup>
            <span>
              EDA <br /> 7am-10pm
            </span>
          </Popup>
        </Marker>
        <Marker position={this.state.position1}>
          <Popup>
            <span>
              House <br /> Call on arrival
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default Auckland