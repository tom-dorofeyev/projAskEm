const express = require('express');
const {getUser, getUsers} = require('./user.controller')
const router = express.Router()
const requireAuth = require('../../middlewares/requireAuth.middleware')

module.exports = router

router.get('/', getUsers)
router.get('/:id', requireAuth, getUser)
