import socket from '../services/socketService'
import userService from '../services/userService'

export default {
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        emitSubmition(context, { surveyId }) {
            socket.emit('surveySubmitted', surveyId)
        },
        watchingResults(context, { surveyId }){
            socket.emit('watchingResults', ({surveyId, member: 'Y'}))
        },
        leftResults(context, { surveyId }){
            console.log('left survey results:', surveyId)
            // socket.emit('leftResults', surveyId)
        }
    },
}