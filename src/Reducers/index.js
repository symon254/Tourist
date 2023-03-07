import { combineReducers } from "redux";
import airports from "./airport";
import { passangerListReducer } from "./passenger";
export default combineReducers({
	airports,
	passengerList: passangerListReducer,
});
