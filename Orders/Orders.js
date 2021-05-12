// Load express
const express  = require("express");
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

// Load Mongoose
const mongoose = require("mongoose");

// Global Order Object which will be the instance of MongoDB document
var Order;
async function connectMongoose() {
	await mongoose.connect("{process.env.mongoDbUrl}", { useNewUrlParser: true, useUnifiedTopology:true }).then(() =>{
		console.log("mongoose connected..")
	})
	require("./Order");
	Order = mongoose.model("Order")
}


// Define the Initial load
async function initialLoad() {
	await connectMongoose();
}

initialLoad()

// GET all orders for a user
// GET single order for a user
/**
 * A single api can perform multiple operations based on the query params.
 * Also to improve this logic, we can create different util files or modules to handle the separate logic 
 * based on these query params.
 * As this is a straightforward simple condition, I have added them using if else condition here only.
 */
app.get("/orders",async (req, res) => {
	
	if(!req.query.oid && req.query.uid) {
		Order.find({customerId:req.query.uid}).then( orders => {
			if(orders) {
				res.json(orders)
			} else {
				res.sendStatus(404)
			}
		})
	} else if(req.query.oid && req.query.uid) {
		Order.find({_id:req.query.oid, customerId: req.query.uid}).then( (order) => {
			if(order) {
				res.json(order);
			}else {
				res.sendStatus(404)
			}
		})
	}
})

// Create an order for a user
app.post("/order", async (req, res) => {
	const newOrder = {
		"name":req.body.name,
		"customerId":req.body.customerId,
		"amount":req.body.amount,
		"image":req.body.image,
		"createdAt":req.body.createdAt,
		"qty":req.body.qty,
	}
	
	// Create new Order instance..
	const order = new Order(newOrder)
	order.save().then((orderObj) => {
		res.send(orderObj)
	}).catch( (err) => {
		if(err) {
			throw err
		}
	})
	
})


// Delete a single order
app.delete("/orders/:oid", async (req, res) => {
	Order.findByIdAndDelete(req.params.oid).then(() => {
		res.send("Order deleted with success...")
	}).catch( () => {
		res.sendStatus(404)
	})
})

// Delete all orders for a user
app.delete("/orders", async (req, res) => {
	Order.findOneAndDelete({customerId: req.query.uid}).then((o) => {
		if(o) {
			res.send({success:true})
		} else {
			res.sendStatus(404)
		}
	})
})

// APP listening on port 5151
app.listen(5151, () => {
	console.log("Up and running! -- This is our Orders service")
})
