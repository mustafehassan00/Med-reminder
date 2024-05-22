const userMeds=(state=[], action)=>{
    switch (action.type) {
        case 'SET_USERMEDS':
          return action.payload;
        default:
          return state;
      }
}

export default userMeds