import answerService from '../services/answerService'
import surveyService from '../services/surveyService';

export default {
    state: {
        currSurveyAnswers: [],
    },
    mutations: {
        setAnswers(state, { surveyAnswers }) {
            state.currSurveyAnswers = surveyAnswers
        }
    },
    getters: {
        surveyAnswers(state) {
            return state.currSurveyAnswers
        }
    },
    actions: {
        async getAnswersBySurveyId(context, { surveyId }) {
            var surveyAnswers = await answerService.getBySurveyId(surveyId)
            context.commit({ type: 'setAnswers', surveyAnswers })
        },
        async getMostAnsweredSurveyIds() {
            const surveyIds = await answerService.getMostAnsweredSurveyIds()
            return surveyIds
        },
        async answerByUserId(context, { userId }) {

            const answers = await answerService.getByUserId(userId)
            const surveys = await Promise.all( answers.map(async (answer) =>{
                const surveyId = answer.surveyId;
                return await surveyService.getById(surveyId)
            }))
            return surveys
        }
    },
}