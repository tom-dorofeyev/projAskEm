const authService = require('./auth.service')

module.exports = {
    login,
    signup,
    logout
}

async function login(req, res) {
    const { userName, password } = req.body

    try {
        const user = await authService.login(userName, password)
        req.session.user = user;  
        res.json(user)
    } catch (err) {      
        res.status(500).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const { email, password, userName, fullName } = req.body
        const user = await authService.signup(email, password, userName, fullName)
        req.session.user = user;
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}
