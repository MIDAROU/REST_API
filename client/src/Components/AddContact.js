import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addcontact, updatecontact } from "../redux/actions/actions";

function AddContact() {
	const [Firstname, setFirstname] = useState("");
	const [Email, setEmail] = useState("");
	const [age, setAge] = useState(0);

	const dispatch = useDispatch();
	const contact = useSelector((state) => state.Reducer.contact);
	const edit = useSelector((state) => state.Reducer.edit);
	const Navigate = useNavigate();
	useEffect(() => {
		if (edit) {
			setFirstname(contact.Firstname);
			setEmail(contact.Email);
			setAge(contact.age);
		} else {
			setFirstname("");
			setEmail("");
			setAge(0);
		}
	}, []);
	return (
		<form>
			<label htmlFor="FirstName">First Name:</label>
			<input
				type="text"
				onChange={(e) => setFirstname(e.target.value)}
				value={Firstname}
			/>
			<label htmlFor="Email">Email:</label>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={Email}
			/>
			<label htmlFor="Age">Age:</label>
			<input
				type="number"
				onChange={(e) => setAge(e.target.value)}
				value={age}
			/>
			{edit ? (
				<button
					onClick={(e) => {
						e.preventDefault();
						dispatch(
							updatecontact(contact._id, { Firstname, Email, age }, Navigate)
						);
					}}
				>
					Save
				</button>
			) : (
				<button
					onClick={(e) => {
						e.preventDefault();
						dispatch(addcontact({ Firstname, Email, age }, Navigate));
					}}
				>
					Add
				</button>
			)}
		</form>
	);
}

export default AddContact;
