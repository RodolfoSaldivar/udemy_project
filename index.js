const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send([{hi:'there'}, {soy:'Rodolfo'}]);
});

// https://git.heroku.com/pacific-stream-45589.git

const PORT = process.env.PORT || 5000;
app.listen(PORT);