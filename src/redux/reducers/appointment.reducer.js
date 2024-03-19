import { combineReducers } from "redux";

const newAppointment = (state = [], action) => {
    switch (action.type) {
        case 'GET_APPOINTMENT':
            return action.payload

        default:
            return state;
    }
}

const approved = (state = [], action) => {
    switch (action.type) {
      case "SET_ACCEPTED":
        return action.payload;
      default:
        return state;
    }
  };
  
  const pending = (state = [], action) => {
    switch (action.type) {
      case "SET_PENDING":
        return action.payload;
      default:
        return state;
    }
  };
  


  export default combineReducers({
    newAppointment,
    approved,
    pending
  });