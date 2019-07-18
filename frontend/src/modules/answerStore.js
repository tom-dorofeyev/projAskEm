import answerService from '../services/answerService'

export default {
    state:{
        currSurveyAnswers: [],
    },
    mutations: {
        setAnswers(state, {surveyAnswers}) {
            state.currSurveyAnswers = surveyAnswers
        }
    },
    getters: {
        SurveyAnswers(state) {
            return state.currSurveyAnswers
        }
    },
    actions: {
        async getAnswersBySurveyId(context, {surveyId}) {
            var surveyAnswers = await answerService.getBySurveyId(surveyId)
            context.commit({type: 'setAnswers', surveyAnswers})
        }
    },
}