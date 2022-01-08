//IMPORTS
const mongoose = require("mongoose");

//SCHEMA
const ContactSchema = new mongoose.Schema({
	Lastname: String,
	Firstname: String,
	Email: String,
	age: Number,
});

//EXPORTS
module.exports = mongoose.model("contact", ContactSchema);
