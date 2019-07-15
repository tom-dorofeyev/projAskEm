import surveyService from '@/services/surveyService'
import answerService from '@/services/answerService'

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
        async publishSurvey(context, { survey }) {
            try{
                await surveyService.add(survey)
            } catch(err){
                console.log('had errors publishing survey', err)
            }
        },
        async loadSurveys(context) {
            let surveys = await surveyService.query();
            context.commit({ type: 'setSurveys', surveys });
        },
        surveyById(context, { surveyId }){
            return surveyService.getById(surveyId)
        },
        submitSurvey(context, { submition }){
            return answerService.submit(submition);
        }
    },
}
