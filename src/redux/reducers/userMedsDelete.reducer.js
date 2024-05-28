const deleteMeds = (state = [], action) =>{
    switch (action.type) {
      case 'DELETE_MED':
        return action.payload;
      default:
        return state
    }
}

export default deleteMeds