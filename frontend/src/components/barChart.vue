<script>
import { Bar } from "vue-chartjs";

export default {
  props: ["labels", "label", "data"],
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
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
};
</script>
