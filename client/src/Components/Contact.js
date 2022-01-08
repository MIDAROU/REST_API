import React from "react";
import { useSelector } from "react-redux";

function Contact() {
	const Contact = useSelector((state) => state.Reducer.contact);

	return (
		<div className="Contact">
			<h1>{Contact.Firstname}</h1>
			<p>{Contact.Email}</p>
			<p>{Contact.age}</p>
		</div>
	);
}

export default Contact;
