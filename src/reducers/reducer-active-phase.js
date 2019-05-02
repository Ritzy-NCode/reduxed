export default (state={}, action) =>{
    switch(action.type){
        case "PHASE_SELECTED":
        return {...state,...action.payload};
        default:
        return {...state};
    }    
}