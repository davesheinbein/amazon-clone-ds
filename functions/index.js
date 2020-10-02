// functions is the backend directory

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51HXuryAGYh1gFsyg8pQ7NHk9pxb9DIDmmYP8NRUqj0tNFnA2W5Kdbc2EIsvWteqrmbO1BH5au36NVwJ5IMTJz2Yt00DNYUSe1a'
);

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
// test response
app.get('/', (request, response) =>
	response.status(200).send('hello world')
);
// post response of payment processing
app.post('/payments/create', async (request, response) => {
	// request.query.total selects the total from the ?total in
	// Payments.jsx url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
	// --- you can use params as well
	const total = request.query.total;

	console.log('payment request received ->> Total:', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // Subunits of the currency
		currency: 'usd',
	});
	// Ok payments been created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-ds/us-central1/api
