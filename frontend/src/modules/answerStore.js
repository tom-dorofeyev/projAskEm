import answerService from '../services/answerService'

export default {
    state:{
        answers: [],
    },
    mutations: {
        setAnswersBySurveyId(state, {surveyAnswers}) {
            state.surveyAnswers = surveyAnswers
        },
        setAnswers(state, { answers }) {
            state.answers = answers
        }
    },
    getters: {
        answersBySurveyId(state) {
            return state.surveyAnswers
        },
        answers(state) {
            return state.answers
        }
    },
    actions: {
        async getAnswersBySurveyId(context, {surveyId}) {
            var surveyAnswers = await answerService.getBySurveyId(surveyId)
            context.commit({type: 'setAnswersBySurveyId', surveyAnswers})
        },
        async loadAnswers(context) {
            let answers = await answerService.query();
            context.commit({ type: 'setAnswers', answers });
        },
    },
}