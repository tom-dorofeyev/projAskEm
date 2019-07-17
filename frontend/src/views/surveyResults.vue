<template>
  <section class="survey-results-container" v-if="currSurvey">
    <!-- {{currSurvey}} -->
    <h1>{{currSurvey.name}} Results</h1>
    <section v-if="(currSurvey.quests)">
      <h5 v-if="(currSurvey.quests.length)">{{currSurvey.quests.length}} Questions</h5>
      <section v-if="currSurvey.quests[0]">
        <h3
          v-if="currSurvey.quests[0]"
        >{{currSurvey.quests[0].title}} ({{currSurvey.quests[0].type}})</h3>
        <div
          v-if="(answersData !== [])"
        >{{currSurvey.quests[0].opts[0]}} {{answerCounter.optIdxCount[1]}}</div>
        <div
          v-if="(answersData !== [])"
        >{{currSurvey.quests[0].opts[1]}} {{answerCounter.optIdxCount[1]}}</div>
        <div
          v-if="(answersData !== [])"
        >{{currSurvey.quests[0].opts[2]}} {{answerCounter.optIdxCount[2]}}</div>
      </section>
      <br />
      <section v-if="currSurvey.quests[1]">
        <h3>{{currSurvey.quests[1].title}} ({{currSurvey.quests[1].type}})</h3>
        <div
          v-if="(answersData !== [])"
        >{{currSurvey.quests[1].opts[0]}} {{answerCounter.optsIdxsCount[0]}}</div>
        <div
          v-if="(answersData !== [])"
        >{{currSurvey.quests[1].opts[1]}} {{answerCounter.optsIdxsCount[1]}}</div>
        <div
          v-if="(answersData !== [])"
        >{{currSurvey.quests[1].opts[2]}} {{answerCounter.optsIdxsCount[2]}}</div>
      </section>
      <!-- </section>
      <section class="survey-results-container" v-if="currSurvey">
    {{currSurvey}}
    {{answerCounter.optsIdxsCount}}
        {{answerCounter}}
    <h1>{{currSurvey.name}} Results</h1>
    <section v-if="(currSurvey.quests)">
    <h5 v-if="(currSurvey.quests.length)">{{currSurvey.quests.length}} Questions</h5>
    <div  v-for="currQst in currSurvey.quests" :key="currQst.title">
     <h3>{{currQst.title}}</h3> 
      <div v-for="(currOpt,idx) in currQst.opts" :key="currOpt">
        {{currOpt}} 
        <template> 
          {{answerCounter}}
        </template>
        </div>
      </div>
      </section>-->
    </section>
  </section>
</template>





<script>
export default {
  async created() {
    const surveyId = this.$route.params.surveyId;
    await this.$store.dispatch({ type: "getAnswersBySurveyId", surveyId });
    this.answersData.getSurveyList.forEach(survey => {
      if (survey._id == surveyId) {
        this.currSurvey = survey;
      }
    });
  },
  async mounted() {
    this.answersData = this.$store.getters;
  },
  data() {
    return {
      answersData: [],
      currSurvey: {}
    };
  },
  computed: {
    answerCounter() {
      var optIdxCount = {};
      var optsIdxsCount = {};
      this.answersData.answers.forEach(answers => {
        answers.forEach(answer => {
          if (answer.optIdx || answer.optIdx === 0) {
            if (optIdxCount[answer.optIdx]) {
              optIdxCount[answer.optIdx]++;
            } else {
              optIdxCount[answer.optIdx] = 1;
            }
          } else {
            if (answer.optionsIdxs && answer.optionsIdxs.length) {
              answer.optionsIdxs.forEach(options => {
                if (optsIdxsCount[options]) {
                  optsIdxsCount[options]++;
                } else {
                  optsIdxsCount[options] = 1;
                }
              });
            }
          }
        });
      });
      return { optIdxCount, optsIdxsCount };
    }
  },
  methods: {
    logAnswers() {
      console.log(this.answersData.answers);
    },
    logSurveys() {
      const surveyId = this.$route.params.surveyId;
      this.answersData.getSurveyList.forEach(survey => {
        if (survey._id == surveyId) {
          this.currSurvey = survey;
        }
      });
      console.log("Added ", this.currSurvey, " to currSurvey data");
    },
    countAnswers() {
      var optIdxCount = {};
      var optsIdxsCount = {};
      this.answersData.answers.forEach(answers => {
        answers.forEach(answer => {
          if (answer.optIdx || answer.optIdx === 0) {
            if (optIdxCount[answer.optIdx]) {
              optIdxCount[answer.optIdx]++;
            } else {
              optIdxCount[answer.optIdx] = 1;
            }
          } else {
            if (answer.optionsIdxs && answer.optionsIdxs.length) {
              answer.optionsIdxs.forEach(options => {
                if (optsIdxsCount[options]) {
                  optsIdxsCount[options]++;
                } else {
                  optsIdxsCount[options] = 1;
                }
              });
            }
          }
        });
      });
      console.log("Single Answers: ", optIdxCount);
      console.log("Mult Answers: ", optsIdxsCount);
    }
  }
};
</script>

<style>
</style>