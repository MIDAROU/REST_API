import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getcontacts, togglefalse } from "../redux/actions/actions";

function NavBar() {
	const dispatch = useDispatch();
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/Contacts" onClick={() => dispatch(getcontacts())}>
				Users
			</Link>
			<Link to="/Add" onClick={dispatch(togglefalse())}>
				Add
			</Link>
		</nav>
	);
}

export default NavBar;
