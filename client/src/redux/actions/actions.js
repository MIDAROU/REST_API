//IMPORTS
import {
	GET_CONTACT,
	GET_CONTACTS,
	TOOGLE_FALSE,
	TOOGLE_TRUE,
} from "../actionTypes/actionTypes";
import axios from "axios";
//ACTIONS
export const getcontacts = () => async (dispatch) => {
	try {
		//GET FROM BACK
		const res = await axios.get("/Contacts/list");
		//
		dispatch({ type: GET_CONTACTS, payload: res.data });
		console.log("GOT THIS DATA:" + res.data);
	} catch (err) {
		console.log("GOT THIS ERROR" + err.message);
	}
};
export const getcontact = (id) => async (dispatch) => {
	try {
		//POST THE GET METHOD
		const res = await axios.get(`/Contacts/list/${id}`);
		//GET THE NEW LIST OF CONTACTS
		dispatch({ type: GET_CONTACT, payload: res.data });
		console.log("GOT THIS DATA:" + res.data);
	} catch (err) {
		console.log("GOT THIS ERROR" + err);
	}
};
export const addcontact = (newContact, Navigate) => async (dispatch) => {
	try {
		//POST THE NEWCONTACT
		const res = await axios.post("/Contacts/add", newContact);
		//GET THE NEW LIST OF CONTACTS
		dispatch(getcontacts());
		Navigate("/Contacts");
		console.log("POSTED THIS DATA" + res);
	} catch (err) {
		console.log("GOT THIS ERROR" + err);
	}
};
export const deletecontact = (id) => async (dispatch) => {
	try {
		//POST THE DELETE METHOD
		const res = await axios.delete(`/Contacts/delete/${id}`);
		//GET THE NEW LIST OF CONTACTS
		dispatch(getcontacts());
		console.log("POSTED THIS DATA" + res);
	} catch (err) {
		console.log("GOT THIS ERROR" + err);
	}
};
export const updatecontact = (id, newContact, Navigate) => async (dispatch) => {
	try {
		//POST THE DELETE METHOD
		const res = await axios.put(`/Contacts/update/${id}`, newContact);
		//GET THE NEW LIST OF CONTACTS
		dispatch(getcontacts());
		Navigate("/Contacts");
		console.log("POSTED THIS DATA" + res);
	} catch (err) {
		console.log("GOT THIS ERROR" + err);
	}
};
export const toogletrue = () => {
	return { type: TOOGLE_TRUE };
};
export const togglefalse = () => {
	return { type: TOOGLE_FALSE };
};
