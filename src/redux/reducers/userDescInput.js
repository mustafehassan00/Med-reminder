const userDescInput = (state = [], action) =>{
    switch (action.type) {
      case 'USERDESC_INPUT':
        return action.payload;
      default:
        return state
    }
}

export default userDescInput