const editAppointment = (state = {}, action) => {
    if (action.type === 'SET_APPOINTMENT_TO_EDIT') {
      return action.payload
    } else if (action.type === 'CHANGE_FIRST_NAME') {
      const firstName = action.payload
      return {...state, firstName: firstName}
    }
    return state;
}



export default editAppointment