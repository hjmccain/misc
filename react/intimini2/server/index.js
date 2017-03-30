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
  }
});
app.use(bodyParser.json());

// added so page will load :)
app.use(express.static(process.env.CLIENT_PATH));

// GET
app.get('/users', (req, res) => {
    knex('users').select('id', 'username', 'password').then((users) => {
        return res.status(200).json({users});
    });
});
app.get('/entries', (req, res) => {
    knex('entries').select('id', 'mood', 'date', 'entry', 'user_id')
			.then((entries) => {
      	return res.json({entries})
    });
});
app.get('/entries/u', (req, res) => {
    const body = req.body;
    console.log(body);
    knex('entries').where({user_id: 1}).select('mood', 'date', 'entry').then((entries) => {
        return res.status(200).json({entries})
    });
});
app.get('/entries/:entry', (req, res) => {
    knex('entries').where({id: req.params.entry}).select('id', 'mood', 'date', 'entry', 'user_id').then((entry) => {
        return res.status(200).json({entry})
    });
});

// POST
app.post('/users', (req, res) => {
    const body = req.body;
     if (!body)  {
        return res.status(400).json({
            message: 'No request body'
        })
    }
    if (body.username === " ") {
        return res.status(422).json({
            message: 'Missing field: username'
        })
    }

     if (body.password === " ") {
        return res.status(422).json({
            message: 'Missing field: password'
        })
    }

    if (typeof body.username !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: username'
        })
    }

     if (typeof body.password !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: password'
        })
    }
        knex.insert({
            username: body.username,
            password: body.password
        }).into('users').then(id => {
            console.log(id);
            return res.status(201).json({})
        }).catch(e => {
            console.error(e);
            res.sendStatus(500);
        })
})
app.post('/entries', (req, res) => {
    const body = req.body;
    console.log('entry post body', body);
     if (!body)  {
        return res.status(400).json({
            message: 'No request body'
        })
    }
    if (body.mood === " ") {
        return res.status(422).json({
            message: 'Missing field: mood'
        })
    }
     if (body.entry === " ") {
        return res.status(422).json({
            message: 'Missing field: entry'
        })
    }
    if (typeof body.entry !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: entry'
        })
    }
    knex.insert({
        mood: body.mood,
        date: new Date(),
        entry: body.entry,
        user_id: body.user_id
    }).into('entries').then(id => {
        console.log(id);
        return res.status(201).json({})
    }).catch(e => {
        console.error(e);
        res.sendStatus(500);
    })
})
// PUT
app.put('/entries', (req, res) => {
	console.log('server-side put entry', req.body)
    const body = req.body;
    if (!body)  {
        return res.status(400).json({
            message: 'No request body'
        })
    }
    if (body.mood === " ") {
        return res.status(422).json({
            message: 'Missing field: mood'
        })
    }
    if (typeof body.mood !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: mood'
        })
    }
    knex('entries').where({
        id: body.id
    }).update({
        mood: body.mood,
				selected: body.selected,
				entry: body.entry
    }).then(count => {
        console.log(count);
        return res.json({})
    }).catch(e => {
        console.error(e);
        res.sendStatus(500);
    })
})
app.put('/users', (req, res) => {
    const body = req.body;
    knex('users').where({
        id: body.id
    }).update({
        username: body.username
    }).then(count => {
        console.log(count);
        return res.json({})
    }).catch(e => {
        console.error(e);
        res.sendStatus(500);
    })
})
// DELETE
app.delete('/users', (req, res) => {
    const body = req.body;
    if (!body)  {
        return res.status(400).json({
            message: 'No request body'
        })
    }
    if (body.id === " ") {
        return res.status(422).json({
            message: 'Missing field: ID'
        })
    }
    if (typeof body.id ===  isNaN) {
        return res.status(422).json({
            message: 'Incorrect field type: #'
        })
    }
    knex('users').where({
        id: body.id
    }).del().then(count => {
        console.log(count);
        return res.json({})
    }).catch(e => {
        console.error(e);
        res.sendStatus(500);
    })
})
app.delete('/entries/:entry_id', (req, res) => {
    console.log(req.params.entry_id);
    if (req.params.entry_id === null) {
        return res.status(404).json({
        message: 'entry not found'
        })
    }
    knex('entries').where({
        id: req.params.entry_id
        }).del().then(count => {
        console.log(count);
        return res.status(200).json({})
        }).catch(e => {
        console.error(e);
        res.sendStatus(500);
        })

})
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
