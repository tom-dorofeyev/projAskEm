<template>
  <section class="result-preview">
    <h3>{{quest.title}}</h3>
    <bar-chart :labels="getLabels" :data="getData"/>
  </section>
</template>


<script>
import barChart from "./barChart";

export default {
  props: ["quest", "answer"],
  data(){
      return {
          chartData:{label: '', labels:[], data:[]}
      }
  },
  created(){

  },
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
