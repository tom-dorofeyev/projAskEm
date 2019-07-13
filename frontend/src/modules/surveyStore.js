import surveyService from '@/services/surveyService'

export default {
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        async publishSurvey(context, { survey }) {
            await surveyService.add(survey)
        }
    },
}