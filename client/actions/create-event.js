import request from 'superagent'
import Geocode from 'react-geocode'

import { showError, clearError, showSuccess } from './error'
import baseUrl from '../lib/base-url'

Geocode.setApiKey(process.env.GOOGLE_API_KEY)
Geocode.enableDebug()

export const REQUEST_FORM = 'REQUEST_FORM'
export const RECEIVE_FORM = 'RECEIVE_FORM'

const requestForm = () => {
  return {
    type: REQUEST_FORM
  }
}

export const receiveForm = () => {
  return {
    type: RECEIVE_FORM
  }
}

export function sendForm(newEvent) {
  return (dispatch) => {
    dispatch(requestForm())
    // const searchAddress = newEvent.address + ', ' + newEvent.suburb + ', ' + newEvent.region + ', ' + newEvent.postal
    // return getLatLng(searchAddress)
    //   .then(latLng => {
    //     const createdEvent = {
    //       eventName: newEvent.eventName,
    //       date_start: newEvent.dateStart,
    //       time_start: newEvent.timeStart,
    //       date_end: newEvent.dateEnd,
    //       time_end: newEvent.timeEnd,
    //       image: newEvent.image,
    //       description: newEvent.description,
    //       access: newEvent.access,
    //       tickets: newEvent.tickets,
    //       restrictions: newEvent.restrictions,
    //       venueName: newEvent.venueName,
    //       address: newEvent.address,
    //       suburb: newEvent.suburb,
    //       region: newEvent.region,
    //       postal: newEvent.postal,
    //       lat: latLng.lat,
    //       lng: latLng.lng,
    //     }
        request.post(`${baseUrl}/api/v1/add/create-event`, newEvent)
          .then(res => {
            console.log(res.body)
            dispatch(receiveForm(res.body))
            dispatch(clearError())
            dispatch(showSuccess('Your event has been created successfully'))
          })
          .catch((err) => {
            dispatch(showError(err.message))
          })
      }
    // )
  }
// }

export function getLatLng (address) {
  return Geocode.fromAddress(address).then(
    response => {
      const {lat, lng} = response.results[0].geometry.location
      const latLng = {
        lat: lat,
        lng: lng
      }
      return (latLng)
    },
    error => {
      // eslint-disable-next-line
      console.error('error: ', error)
    }
  )
}
