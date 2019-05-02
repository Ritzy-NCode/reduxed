import {combineReducers} from 'redux';
import PhasesReducer from './reducer-phases';
import ActivePhaseReducer from './reducer-active-phase';

const allPhasesReducers=combineReducers({
    phases:PhasesReducer,
    activePhase:ActivePhaseReducer

});export default  allPhasesReducers;