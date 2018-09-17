import {
  REQUEST_FORM,
  RECEIVE_FORM
} from '../actions/create-event'

// const initialState = {
//   eventName: '',
//   venueName: '',
//   address: '',
//   suburb: '',
//   region: '',
//   postal: '',
//   lat: '',
//   lng: '',
//   dateStart: '',
//   timeStart: '',
//   dateEnd: '',
//   timeEnd: '',
//   image: '',
//   description: '',
//   access: '',
//   tickets: '',
//   restriction: '',
//   organiser: '',
//   organiserDescription: '',
//   website: '',
//   eventType: '',
//   eventCategory: ''
// }

const newEvent = (state = false, action) => {
  switch (action.type) {
    case REQUEST_FORM:
      return true
    case RECEIVE_FORM:
      return false
    default:
      return state
  }
}

export default newEvent
