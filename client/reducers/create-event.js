import { 
  RECEIVE_FORM } from '../actions/create-event'

const initialState = {
  eventName: '',
  venueName: '',
  address: '',
  suburb: '',
  region: '',
  postal: '',
  lat: '',
  lng: '',
  dateStart: '',
  timeStart: '',
  dateEnd: '',
  timeEnd: '',
  image: '',
  description: '',
  access: '',
  tickets: '',
  restriction: '',
  organiser: '',
  organiserDescription: '',
  website: '',
  eventType: '',
  eventCategory: ''
}

const newEvent = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FORM:
      return action.newEvent
    default:
      return state
  }
}

export default newEvent
