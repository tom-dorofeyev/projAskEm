import surveyService from '@/services/surveyService'

export default {
    state: {
        surveys: []
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
        //TODO: add mutation to surveys
        publishSurvey(context, { survey }) {
            surveyService.add(survey)
        },
        async loadSurveys(context) {
            let surveys = await surveyService.query();
            context.commit({ type: 'setSurveys', surveys });
        },
        surveyById(context, { surveyId }){
            return surveyService.getById(surveyId)
        },
        submitSurvey(context, { submition }){
            return surveyService.submit(submition);
        }
    },
}
