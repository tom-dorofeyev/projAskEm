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
            } catch (err) {
                throw err
            }
        },
        async login(context, { userCred }) {
            
            try {
                const exsistUser = await userService.login(userCred)
                context.commit({ type: 'setUser', user: exsistUser })
            } catch (err) {
                console.log('login catch at store',err);
                throw err
            }
        },
        logout(context) {
            userService.logout()
            context.commit({ type: 'setUser', user: '' })
        },
        userById(context, { userId }) {
            return userService.getById(userId)
        },
        async loadUser(context) {
            try {
                const user = await userService.query()
                if(user) context.commit({ type: 'setUser', user })
            } catch (err) {
                throw err
            }
        },

    },
}