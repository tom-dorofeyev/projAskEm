<template>
    <section class="quest-submit-container">
        <div class="inputGroup" v-for="(option, index) in optCopy" :key="index">
            <input :id="quest.title+'-'+option+'-'+(index)" type="radio" :name="quest.title" @input="emitAns(index)" />
             <label :for="quest.title+'-'+option+'-'+(index)">{{option}}</label>
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
