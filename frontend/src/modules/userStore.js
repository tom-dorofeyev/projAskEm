import userService from '../services/userService'
export default {
    state:{
        
    },
    mutations: {

    },
    getters: {

    },
    actions: {
        async signup(context, {user}){
            try {
                await userService.signup(user)   
            } catch(err){
                console.log('Had err while trying to signup user');
                
            }
        },
        login(context, {userCred}){
            return userService.login(userCred)
        },
        logout(context) {
            userService.logout()
        },
        userById(context, {userId}){
            return userService.getById(userId)
        }

    },
}