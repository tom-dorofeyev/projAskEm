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
        surveyAnswers(state) {
            return state.currSurveyAnswers
        }
    },
    actions: {
        async getAnswersBySurveyId(context, {surveyId}) {
            var surveyAnswers = await answerService.getBySurveyId(surveyId)
            context.commit({type: 'setAnswers', surveyAnswers})
        },
        async getMostAnsweredSurveyIds() {
            const surveyIds = await answerService.getMostAnsweredSurveyIds()
            return surveyIds
        }
    },
}