import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'

import { getEventfindaApi } from '../actions/eventfinda'

class AklMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getEventfindaApi())
  }

  render() {
    return (
      <div className='map'>
        <Map center={[-36.8485, 174.7633]} zoom={12}>
          <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            maxZoom='18'
            id='mapbox.streets'
            accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
          />
          <Marker position={[-36.8485, 174.7633]}>
            <Popup>
              <span>
                EDA <br /> 7am-10pm
            </span>
            </Popup>
          </Marker>
          {(this.props.eventfinda && this.props.eventfinda.map((event) => {
            const position = {
              lat: event.point.lat,
              lng: event.point.lng
            }
            return (
              <Marker key={event.id} position={position}>
                <Popup><span>{event.name}<br />{event.address}</span></Popup>
              </Marker>
            )
          })
          )}
        </Map>
      </div>
    )
  }
}





const mapStateToProps = (state) => {
  return {
    eventfinda: state.eventfinda
  }
}

export default connect(mapStateToProps)(AklMap)
