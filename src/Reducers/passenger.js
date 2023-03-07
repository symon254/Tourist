import {
	PASSENGER_LIST_REQUEST,
	PASSENGER_LIST_SUCCESS,
	PASSENGER_LIST_FAIL,
} from "../Actions/constants/airport";

export const passangerListReducer = (
	state = { passengers: [], totalCount: 0 },
	action
) => {
	const { type, payload } = action;
	switch (type) {
		case PASSENGER_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PASSENGER_LIST_SUCCESS:
			return {
				loading: false,
				passengers: payload.data,
				totalCount: payload.total_pages,
			};

		case PASSENGER_LIST_FAIL:
			return {
				loading: false,
				error: payload,
			};

		default:
			return state;
	}
};
