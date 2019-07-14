
<template>
  <div class="survey-submit-page" v-if="survey._id">
    {{submition}}
    <div class="survey-submit-container">
      <form id="myForm">
        <h1 class="survey-submit-header">{{survey.name}}</h1>
        <h6 class="survey-submit-created">{{survey.createdAt}}</h6>
        <h6 class="survey-submit-created">{{survey.tags}}</h6>
        <h5 class="survey-submit-qst-number">"{{survey.description}}"</h5>
        <h6 class="survey-submit-qst-number">Survey has {{survey.quests.length}} Questions</h6>

        <!-- rendering each question -->
        <div class="quest-list" v-for="(currQuest, questIdx) in survey.quests" :key="questIdx">
          <h4>{{currQuest.title}}</h4>
          <!-- rendering option list if exists -->
          <div class="option-list" v-if="currQuest.opts.length > 0">
            <div class="option-item" v-for="(option, optIdx) in currQuest.opts" :key="optIdx">
              <input :type="getQuestType(currQuest.type)"
              :name="currQuest.title" @input="updateSubmition(questIdx, optIdx)"/>
              {{option}}
            </div>
          </div>
        </div>


        <section class="survey-submit-btn">
            <input type="button" @click="submitSurvey()" value="Submit Answers!" />
        </section>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    survey: {},
    submition:{surveyId:'', userId:null, answers:[]}
  }),
  created() {
    (async () => {
      let surveyId = this.$route.params.id;
      this.submition.surveyId = surveyId
      const foundSurvey = await this.$store.dispatch({type: "surveyById",surveyId});
      this.survey = foundSurvey;
      this.survey.quests.forEach(() => this.submition.answers.push({optIdx:null,txt:''}))
    })();
  },
  methods: {
    submitSurvey() {
      const submition = this.submition
      this.$store.dispatch({type:'submitSurvey', submition})
    },
    getQuestType(type) {
      if (type === "singleSelect") return "radio";
      else if (type === "multSelect") return "checkbox";
    },
    updateSubmition(questIdx,optIdx){
      let answers = this.submition.answers
      // answers[questIdx].optIdx.includes(optIdx) ? splice : push
      answers[questIdx].optIdx = optIdx
    }
  }
};
</script>
