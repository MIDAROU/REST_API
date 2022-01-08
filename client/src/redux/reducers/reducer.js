import {
	GET_CONTACT,
	GET_CONTACTS,
	TOOGLE_TRUE,
	TOOGLE_FALSE,
} from "../actionTypes/actionTypes";

const initialState = {
	contacts: [],
	contact: {},
	edit: false,
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return { ...state, contacts: action.payload.contacts };
		case GET_CONTACT:
			return { ...state, contact: action.payload.contact };
		case TOOGLE_TRUE:
			return { ...state, edit: true };
		case TOOGLE_FALSE:
			return { ...state, edit: false };
		default:
			return state;
	}
};

export default Reducer;
