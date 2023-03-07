import {
    CREATE_PASSENGER,
	DELETE_PASSENGER,
	RETRIEVE_PASSENGER,
	RETRIEVE_PASSENGERS,
	UPDATE_PASSENGER,
    CREATE_AIRLINE,
    RETRIEVE_AIRLINE,
    RETRIEVE_AIRLINES
} from "../Actions/constants/airport";
const initialState = [];
function airportsReducer(airports = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_PASSENGER:
            return [...airports, payload];
        case RETRIEVE_PASSENGERS:
            return payload;
        case RETRIEVE_PASSENGER:
            return payload;
        case UPDATE_PASSENGER:
            return airports.map((airport) => {
                if (airport.id === payload.id) {
                    return {
                        ...airport,
                        ...payload,
                    };
                } else {
                    return airport;
                }
            });
        case DELETE_PASSENGER:
            return airports.filter(({ id }) => id !== payload.id);

        case CREATE_AIRLINE:
                return [...airports, payload];
        case RETRIEVE_AIRLINES:
                return payload;
        case RETRIEVE_AIRLINE:
                return payload;    
        default:
            return airports;
    }
}
export default airportsReducer;
