<script>
import { Bar } from "vue-chartjs";

export default {
  props: ["labels", "label", "data"],
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderMyChart();
  },
  methods: {
    renderMyChart() {
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            label: "people answered",
            backgroundColor: "#f87979",
            data: this.data
          }
        ]
      });
    }
  },
  watch:{
    data(){
      this.renderMyChart();
    }
  }
};
</script>
