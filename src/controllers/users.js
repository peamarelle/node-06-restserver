const express = require('express');

const getAllUsers = (req, res) => {
    const users = [{
        id: 1,
        name: 'Patricio'
    },
    {
        id: 2,
        name: 'Natali'
    }]
    
    res.json(users);
}

const createUser = (req, res) => {

    const { id, name } = req.body;

    const user = {
        id,
        name
    }

    res.status(201).json(user);
}

const updateUser = (req, res) => {

    const { id } = req.params;

    const message = {
        message: 'User modifed!'
    }
    res.json(message);
}

const modifyUser = (req, res) => {

    const message = {
        message: 'User updated with patch!'
    }

    res.json(message);
}

const deleteUser = (req, res) => {

    const { id } = req.params;

    const message = {
        message: `User ${id} deleted!`
    }
    
    res.json(message);
}

module.exports = { getAllUsers, createUser, updateUser, modifyUser, deleteUser }