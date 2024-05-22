const userMedInput = (state = [], action) =>{
    switch (action.type) {
      case 'USERMED_INPUT':
        return action.payload;
      default:
        return state
    }
}

export default userMedInput