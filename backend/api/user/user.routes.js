
const userService = require('./user.service');
const express = require('express');
const {getUser, getUsers} = require('./user.controller')
const router = express.Router()

module.exports = router

router.get('/', getUsers)
router.get('/:id', getUser)
