import answerService from '../services/answerService'

export default {
    state:{
        answers: [],
    },
    mutations: {
        setAnswersBySurveyId(state, {surveyAnswers}) {
            state.answers = surveyAnswers
        }
    },
    getters: {
        answers(state) {
            return state.answers
        }
    },
    actions: {
        async getAnswersBySurveyId(context, {surveyId}) {
            var surveyAnswers = await answerService.getBySurveyId(surveyId)
            context.commit({type: 'setAnswersBySurveyId', surveyAnswers})
        }
    },
}