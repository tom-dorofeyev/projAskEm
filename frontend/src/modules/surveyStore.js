import surveyService from '@/services/surveyService'

export default {
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        publishSurvey(context, { survey }) {
            surveyService.add(survey)
        },
        readSurvey(context, { }) {
            surveyService.read()
        },

    },
}