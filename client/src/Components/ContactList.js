import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deletecontact,
	getcontact,
	toogletrue,
} from "../redux/actions/actions";
import { Link } from "react-router-dom";

function ContactList() {
	const contacts = useSelector((state) => state.Reducer.contacts);
	const dispatch = useDispatch();

	return (
		<div id="Container">
			{contacts.map((el) => {
				return (
					<div className="Contact" key={el._id}>
						<h1>{el.Firstname}</h1>
						<div className="Links">
							<button
								onClick={() => {
									dispatch(getcontact(el._id));
									dispatch(toogletrue());
								}}
							>
								<Link to={`/update/${el._id}`}>Edit</Link>
							</button>
							<button onClick={() => dispatch(deletecontact(el._id))}>
								Delete
							</button>
							<Link to={`/Contacts/${el._id}`}>
								<button onClick={() => dispatch(getcontact(el._id))}>
									Details
								</button>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ContactList;
