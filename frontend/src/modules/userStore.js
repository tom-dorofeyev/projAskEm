import userService from '../services/userService'
export default {
    state:{

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        doSignUp(context, {user}){
            userService.add(user)      
        }

    },
}