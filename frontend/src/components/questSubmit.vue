<template>
  <div class="quest-submit">
      {{quest.title}}
      {{quest}}
      <component :is="ansType" :quest="quest" @update-answer="updateAns"></component>
  </div>
</template>

<script>

export default {
    props:['quest','questIdx'],
  data() {
    return {

    };
  },
  methods: {
    updateAns(ans){
      this.$emit('update-answer', ans, this.questIdx)
    }
  },
  computed:{
    ansType(){
      const type = this.quest.type
      if(type === 'singleSelect') return () => import('./singleSelect')
      else if(type === 'multSelect') return () => import('./multSelect')
      else return () => import('./textSubmit')
    }
  },
};
</script>
