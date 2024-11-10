const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ...existing code...

app.use((req, res, next) => {
	res.setHeader(
		"Content-Security-Policy",
		"script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval';"
	);
	next();
});

// ...existing code...

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});