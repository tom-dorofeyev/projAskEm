import userService from '../services/userService'

export default {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    actions: {
        async signup(context, { user }) {
            try {
                const newUser = await userService.signup(user)
                context.commit({ type: 'setUser', user: newUser })
                return Promise.resolve()
            } catch (err) {
                throw err
            }
        },
        async login(context, { userCred }) {
            
            try {
                const exsistUser = await userService.login(userCred)
                context.commit({ type: 'setUser', user: exsistUser })
                return Promise.resolve()
            } catch (err) {
                console.log('login catch at store',err);
                throw err
            }
        },
        async logout(context) {
            try {
                await userService.logout()
                context.commit({ type: 'setUser', user: ''})
                return Promise.resolve()
            } catch (err) {
                throw err
            }
        },
        async userById(context, { userId }) {           
            try {
                const loggedInUser = await userService.getById(userId)
                context.commit({ type: 'setUser', user: loggedInUser })                
                return Promise.resolve()
            } catch (err) {            
                throw err
            }
        },
        async loadUser(context) {
            try {
                const user = await userService.query()
                if (!user) return
                context.commit({ type: 'setUser', user })
                return Promise.resolve()
            } catch (err) {
                throw err
            }
        },
    },
}