const express = require('express');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllUsers = (req, res) => {

    const users = [{
        id: 1,
        name: 'Patricio'
    },
    {
        id: 2,
        name: 'Natali'
    }]
    throw new Error('Error');
    res.json(users);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const createUser = (req, res) => {

    const { id, name } = req.body;

    const user = {
        id,
        name
    }
    
    res.status(201).json(user);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updateUser = (req, res) => {

    const { id } = req.params;

    const message = {
        message: 'User modifed!'
    }
    res.json(message);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const modifyUser = (req, res) => {

    const message = {
        message: 'User updated with patch!'
    }

    res.json(message);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const deleteUser = (req, res) => {

    const { id } = req.params;

    const message = {
        message: `User ${id} deleted!`
    }
    
    res.json(message);
}

module.exports = { getAllUsers, createUser, updateUser, modifyUser, deleteUser }