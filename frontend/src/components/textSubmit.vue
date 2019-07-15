<template>
    <section class="quest-submit-container">
        <textarea @input="emitAns" v-model="answer"></textarea>
    </section>
</template>


<script>

export default {
    props:['quest'],
    data(){
        return{
            answer:'',
        }
    },
    methods:{
        emitAns(){
            this.$emit('update-answer', this.answer)
        }
    }
}
</script>
