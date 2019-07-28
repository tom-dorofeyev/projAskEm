<template>
  <section class="filter-by">
    <form @submit.prevent="emitFilter" class="filter-form">
        <input @input="emitFilter" type="text" placeholder="Search By Survey Name..." v-model="filterBy.name"/>
    </form>
  </section>
</template>


<script>
export default {
  data() {
    return {
      filterBy: {
        name: "",
      }
    };
  },
  methods: {
    emitFilter() {
      const filterByCopy = JSON.parse(JSON.stringify(this.filterBy));
      this.$emit("update-filter", filterByCopy);
    }
  }
};
</script>



<style lang="scss" scoped src="@/styles/components/filterBy.scss">
</style>




