<template>
  <section class="result-preview" v-if="quest.title">
    <h3 v-if="quest.opts.length">{{quest.title}}</h3>
    <bar-chart v-if="quest.opts.length" :labels="getLabels" :data="getData"/>
  </section>
</template>


<script>
import barChart from "./barChart";

export default {
  props: ["quest", "answer"],
  computed: {
    getLabels() {
      let labels = [];
      this.quest.opts.forEach(opt => {
        labels.push(opt);
      });
      return labels;
    },
    getData() {
      let data = [];
      const currAns = this.answer;
      this.quest.opts.forEach((quest, index) => {
        data.push(0);
        if (currAns[index]) data[index] = currAns[index];
      });
      data.push(0)
      return data;
    }
  },
  components: {
    barChart
  }
};
</script>
