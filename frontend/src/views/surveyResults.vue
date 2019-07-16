<template>
  <section class="survey-results-container">
    <hr />
    <h1>Results</h1>
    Single Questions: {{countAnswers.optIdxCount}} <br><br>
    Mult Questions: {{countAnswers.optsIdxsCount}}
    <!-- <div
      class="survey-results"
      v-for="currAnswer in answersData"
      :key="currAnswer._id"
    >{{currAnswer}}</div> -->
  </section>
</template>

<script>
export default {
  created() {
    const surveyId = this.$route.params.surveyId;
    (async () => {
      await this.$store.dispatch({ type: "getAnswersBySurveyId", surveyId });
      this.answersData = this.$store.getters.answers.map(
        submit => submit.answers
      );
    })();
  },
  mounted() {},
  data() {
    return {
      answersData: []
    };
  },
  computed: {
    countAnswers() {
      var optIdxCount = {};
      var optsIdxsCount = {};
      this.answersData.forEach(answers => {
        answers.forEach(answer => {
          if (answer.optIdx || answer.optIdx === 0) {
            if (optIdxCount[answer.optIdx]) {
              optIdxCount[answer.optIdx]++;
            } else {
              optIdxCount[answer.optIdx] = 1;
            }
          } 
          else {
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
      return {optIdxCount, optsIdxsCount};
    }
  },
  methods: {
    logAnswers() {
      console.log(this.answersData);
    }
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
    //       } else {
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
    //   console.log(optIdxCount, optsIdxsCount);
    // }
  }
};
</script>

<style>
</style>