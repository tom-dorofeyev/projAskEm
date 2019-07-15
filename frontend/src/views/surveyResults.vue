<template>
    <h1>{{answers}}</h1>
</template>

<script>
export default {
    created() {
        const surveyId = this.$route.params.surveyId
        this.$store.dispatch({type: 'getAnswersBySurveyId', surveyId})
    },
    computed: {
        answers() {
            return this.$store.getters.answers
        }
    }
}
</script>

<style>

</style>