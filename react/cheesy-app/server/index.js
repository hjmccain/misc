require('babel-polyfill');
const express = require('express');
const bodyParser = require('body-parser');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

let cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue",
    "Cheshire Blue",
    "Devon Blue",
    "Dorset Blue Vinney",
    "Dovedale",
    "Exmoor Blue",
    "Harbourne Blue",
    "Lanark Blue",
    "Lymeswold",
    "Oxford Blue",
    "Shropshire Blue",
    "Stichelton",
    "Stilton",
    "Blue Wensleydale",
    "Yorkshire Blue"
];

app.get('/cheeses', (req, res) => {
	res.status(200).json(cheeses)
});

app.post('/cheeses', jsonParser, (req, res) => {
	if (!req.body) {
		res.send(400).json({});
	} else {
		cheeses.push(req.body.cheese);
		return res.status(201).json({});
	}
});

app.delete('/cheeses', jsonParser, (req, res) => {
	if (!req.body) {
		res.send(400).json({});
	} else {
		cheeses = cheeses.filter((cheese) => {
			return (cheese !== req.body.cheese)
		})
		// TODO: discuss with Nic
		return res.sendStatus(204);
	}
});

app.use(express.static(process.env.CLIENT_PATH));

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
