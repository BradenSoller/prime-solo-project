const editAppointment = (state = {}, action) => {
    if (action.type === 'SET_APPOINTMENT_TO_EDIT') {
      return action.payload
    } else if (action.type === 'CHANGE_FIRST_NAME') {
      const firstName = action.payload
        return { ...state, first_name: firstName }

    }else if (action.type === 'CHANGE_LAST_NAME') {
        const lastName = action.payload
          return { ...state, last_name: lastName }
  
      }else if (action.type === 'CHANGE_EMAIL') {
        const email = action.payload
          return { ...state, email: email }
  
      }else if (action.type === 'CHANGE_PHONE_NUMBER') {
        const phoneNumber = action.payload
          return { ...state, phone_number: phoneNumber }
  
    }

    else if (action.type === 'CHANGE_ADDRESS') {
        const address = action.payload
          return { ...state, address: address }
  
      }
      else if (action.type === 'CHANGE_ZIP') {
        const zip = action.payload
          return { ...state, zip: zip }
  
    }
    else if (action.type === 'CHANGE_SERVICE') {
        const service_id = action.payload
          return { ...state, service_id: service_id }
    }
        
      else if (action.type === 'CHANGE_DESCRIPTION') {
      const description = action.payload
        return { ...state, description: description}

    }
    else if (action.type === 'CHANGE_BUDGET') {
        const budget = action.payload
          return { ...state, budget: budget }
  
      }
    return state;
 }



export default editAppointment