<template>
  <section class="survey-results-container">
    {{answersData}}
    <hr />
    <h1>Results</h1>
    <!-- Single Questions: {{countAnswers.optIdxCount}} <br><br>
    Mult Questions: {{countAnswers.optsIdxsCount}}-->
    <!-- <div
      class="survey-results"
      v-for="currAnswer in answersData"
      :key="currAnswer._id"
    >{{currAnswer}}</div>-->
    <button @click="logAnswers()" type="button">Log Answers</button>
    <button @click="countAnswers()" type="button">Count Answers</button>
  </section>
</template>

<script>
export default {
  async created() {
    const surveyId = this.$route.params.surveyId;
    await this.$store.dispatch({ type: "getAnswersBySurveyId", surveyId });
  },
  async mounted() {
    this.answersData = this.$store.getters;
  },
  data() {
    return {
      answersData: []
    };
  },
  computed: {
    // countAnswers() {
    //   var optIdxCount = {};
    //   var optsIdxsCount = {};
    //   this.answersData.forEach(answers => {
    //     answers.forEach(answer => {
    //       if (answer.optIdx || answer.optIdx === 0) {
    //         if (optIdxCount[answer.optIdx]) {
    //           optIdxCount[answer.optIdx]++;
    //         } else {
    //           optIdxCount[answer.optIdx] = 1;
    //         }
    //       }
    //       else {
    //         if (answer.optionsIdxs && answer.optionsIdxs.length) {
    //           answer.optionsIdxs.forEach(options => {
    //             if (optsIdxsCount[options]) {
    //               optsIdxsCount[options]++;
    //             } else {
    //               optsIdxsCount[options] = 1;
    //             }
    //           });
    //         }
    //       }
    //     });
    //   });
    //   return {optIdxCount, optsIdxsCount};
    // }
  },
  methods: {
    logAnswers() {
      console.log(this.answersData.answers);
    },
    // countAnswers() {
    //   const test = this.answersData.reduce((acc, answer, idx) => {
    //     let ansName = "answer" + idx;
    //     if (!acc[ansName]) {
    //       acc[ansName] = {}
    //       if (answer[1].optionsIdxs) {
    //         console.log('Got here!')
    //         answer.forEach(optIdx => {
    //           if (!acc[ansName][optIdx]) acc[ansName][optIdx] = 0
    //         })
    //       };
    //     }
    //     return acc;
    //   }, {});
    //   console.log(test);
    // }
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
      console.log('Single Answers: ',optIdxCount);
      console.log('Mult Answers: ', optsIdxsCount);
    }
  }
};
</script>

<style>
</style>