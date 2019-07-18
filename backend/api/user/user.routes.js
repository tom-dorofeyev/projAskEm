
const userService = require('./user.service');
const express = require('express');
const {getUser, getUsers} = require('./user.controller')
const router = express.Router()

module.exports = router

router.get('/', getUsers)
router.get('/:id', getUser)

router.post('/', async(req, res)=>{
    const userCred = req.body
    try {
        const addedUser = await userService.add(userCred)
        res.json(addedUser)
    } catch (err) {
        res.status(500).send({err})
    }
})

//SIGN UP
router.post('/signup', async(req, res) => {
    const user = req.body;
    try {
        const signupUser = await userService.add(user)
        req.session.user = signupUser
        res.json(signupUser)
    } catch (err){
        res.status(422).send({err})
    }
})

//LOGIN
router.post('/login', async(req, res) => {
    console.log(req, res);
    
    const { userName, password } = req.body

    async function login() {
        try {
            const foundUser = await userService.getUser(userName, password)
            req.session.user = foundUser
            res.send(true)
        }
        catch (err) {
            res.status(401).send(err);
        }
    }
    login()
})

//LOGOUT  
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.end()
});

// //IS ADMIN
// router.get('/isAdmin', (req, res) => {
//     const { isAdmin } = req.session.user;
//     if (isAdmin) return res.send(true)
//     else return res.send(false)
// })

// //CURRENT USER
// router.get('/curruser', (req, res) => {
//     const user = req.session.user;
//     if (user) res.json(user)
//     else res.send(false);
// })

