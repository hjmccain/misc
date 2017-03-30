require('babel-polyfill');
const express = require('express');
const bodyParser = require('body-parser');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

const app = express();
const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'intimini'
  },
});

app.use(bodyParser.json());

app.get('/users', (req, res) => {
	knex('users').select('id', 'username', 'password').then((users) => {
		return res.json({users});
	});
});

app.use(express.static(process.env.CLIENT_PATH));

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                //console.error(err);
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
