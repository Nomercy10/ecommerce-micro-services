const mongoose = require('mongoose');


// Order Model

mongoose.model("Order", {
	name: {
		type: String,
		required: true
	},
	customerId: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true
	},
	qty: {
		type: Number,
		required: false
	}

})