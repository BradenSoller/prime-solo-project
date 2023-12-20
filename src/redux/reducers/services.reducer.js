const services = (state = [], action) => {
    if (action.type === "GET_SERVICES"){
      return action.payload;
    }
    return state;
};
  

export default services;