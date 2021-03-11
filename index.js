require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', (req, res) => {

    const users = [{
        id: 1,
        name: 'Patricio'
    },
    {
        id: 2,
        name: 'Natali'
    }]

    res.json(users);
})

app.post('/users', (req, res) => {

    const { id, name } = req.body;

    const user = {
        id,
        name
    }

    res.status(201).json(user);
})

app.put('/users/:id', (req, res) => {

    const { id } = req.params;

    const message = {
        message: 'User modifed!'
    }
    res.json(message);
})

app.patch('/users', (req, res) => {

    const message = {
        message: 'User updated with patch!'
    }

    res.json(message);
})

app.delete('/users/:id', (req, res) => {

    const { id } = req.params;

    const message = {
        message: `User ${id} deleted!`
    }
    
    res.json(message);
})

app.listen(port, () => {
    console.log(`App liste on port ${port}!`);
});