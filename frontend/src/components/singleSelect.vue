<template>
    <section class="quest-submit-container">
        <div class="option-list" v-for="(option, index) in optCopy" :key="index">
            <input type="radio" :name="quest.title" @input="emitAns(index)" />
            {{option}}
        </div>
    </section>
</template>


<script>

export default {
    props:['quest'],
    data(){
        return{
            optCopy:null,
            answersIdxs:[]
        }
    },
    created(){
        this.optCopy = this.quest.opts.map(opt => opt)
    },
    methods:{
        emitAns(idx){
            this.$emit('update-answer', idx)
        }
    }
}
</script>
