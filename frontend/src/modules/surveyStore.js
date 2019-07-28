import surveyService from '@/services/surveyService'
import answerService from '@/services/answerService'

export default {
    state: {
        surveys: [],
    },
    getters: {
        getSurveyList(state) {
            return state.surveys
        }
    },
    mutations: {
        setSurveys(state, { surveys }) {
            state.surveys = surveys
        }
    },
    actions: {
        async publishSurvey(context, { survey }) {
            try {
                await surveyService.add(survey)
            } catch (err) {
                console.log('had errors publishing survey', err)
            }
        },
        async loadSurveys(context, { filterBy }) {
            let surveys = await surveyService.query(filterBy);
            context.commit({ type: 'setSurveys', surveys });
        },
        async surveyById(context, { surveyId }) {
            return surveyService.getById(surveyId)
        },
        submitSurvey(context, { submition }) {
            return answerService.add(submition);
        },
        async surveyByUserId(context, {userId}) {
            return surveyService.query({createdBy: userId})
        }
    }
}
