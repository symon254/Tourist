import {
	CREATE_PASSENGER,
	DELETE_PASSENGER,
	RETRIEVE_PASSENGER,
	RETRIEVE_PASSENGERS,
	UPDATE_PASSENGER,
	CREATE_AIRLINE,
	RETRIEVE_AIRLINE,
	RETRIEVE_AIRLINES,
	PASSENGER_LIST_REQUEST,
	PASSENGER_LIST_SUCCESS,
	PASSENGER_LIST_FAIL,
} from "../constants/airport";
import http from "../../Utils/api";
export const createPassenger = (firstName, lastName) => async (dispatch) => {
	try {
		const res = await http.post("/", { firstName, lastName });
		dispatch({
			type: CREATE_PASSENGER,
			payload: res.data,
		});
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
export const updatePassenger = (id, data) => async (dispatch) => {
	try {
		const res = await http.put(`//${id}`, data);
		dispatch({
			type: UPDATE_PASSENGER,
			payload: res.data,
		});
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
export const retrievePassengers = (params) => async (dispatch) => {
	try {
		dispatch({
			type: PASSENGER_LIST_REQUEST,
		});
		const res = await http.get(`/Tourist?page=${params.page}`);
		dispatch({
			type: PASSENGER_LIST_SUCCESS,
			payload: res.data,
		});
		console.log("response", res.data);
	} catch (err) {
		// dispatch({
		// 	type: PASSENGER_LIST_FAIL,
		// 	payload: err.response
		// });
		console.log(err);
	}
};
export const retrievePassenger = (id, data) => async (dispatch) => {
	try {
		const res = await http.get(`//${id}`, data);
		dispatch({
			type: RETRIEVE_PASSENGER,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};
export const deletePassenger = (id) => async (dispatch) => {
	try {
		await http.delete(`//${id}`);
		dispatch({
			type: DELETE_PASSENGER,
			payload: { id },
		});
	} catch (err) {
		console.log(err);
	}
};

export const createAirline =
	(name, country, slogan, logo, website, established) => async (dispatch) => {
		try {
			const res = await http.post("/airlines", {
				name,
				country,
				slogan,
				logo,
				website,
				established,
			});
			dispatch({
				type: CREATE_AIRLINE,
				payload: res.data,
			});
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

export const retrieveArlines = () => async (dispatch) => {
	try {
		const res = await http.get("/airlines");
		dispatch({
			type: RETRIEVE_AIRLINES,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};
export const retrieveArline = (id, data) => async (dispatch) => {
	try {
		const res = await http.get(`/airlines/${id}`, data);
		dispatch({
			type: RETRIEVE_AIRLINE,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};
