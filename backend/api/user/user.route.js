
const userService = require('../../services/user.service');
const express = require('express');

const router = express.Router()
module.exports = router


//SIGN UP
router.post('/signup', (req, res) => {
    const user = req.body;
    userService.add(user)
        .then(addedUser => res.json(addedUser))
        .catch(err => res.status(422).send(err))
})

router.post('/login', (req, res) => {
    const {nickname, password} = req.body

    async function login() {
        try {
            const foundUser = await userService.getUser(nickname, password)
            req.session.user = foundUser
            res.send(true)
        }
        catch (err) {
            res.status(401).send(err);
        }
    }
    login()
})

router.get('/isAdmin', (req, res) => {
    const { isAdmin } = req.session.user;
    if (isAdmin) return res.send(true)
    else return res.send(false)
})

router.get('/curruser', (req, res) => {
    const user = req.session.user;
    if (user) res.json(user)
    else res.send(false);
})