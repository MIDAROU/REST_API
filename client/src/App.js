import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./Components/AddContact";
import Contact from "./Components/Contact";
import ContactList from "./Components/ContactList";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Contacts" element={<ContactList />} />
				<Route path="/Contacts/:id" element={<Contact />} />
				<Route path="/Add" element={<AddContact />} />
				<Route path="/update/:id" element={<AddContact />} />
			</Routes>
		</div>
	);
}

export default App;
