const medToUpdate = (state = [], action) => {
    switch (action.type) {
        case 'SET_MED_TO_UPDATE':
            return action.payload;
        default:
            return state
    }
}
export default medToUpdate;