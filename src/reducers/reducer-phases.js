import data from './../store/store';
export default (state={}, action) =>{
    return {...state,...data};
}