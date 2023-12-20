const newAppointment = (state = [], action) => {
    switch (action.type) {
        case 'SET_APPOINTMENT':
            return action.payload
        default:
            return state;
    }
}


export default newAppointment