const userDesc=(state={}, action)=>{
    switch (action.type) {
        case 'SET_USERDESC':
          return action.payload;
        default:
          return state;
      }
}




export default userDesc
