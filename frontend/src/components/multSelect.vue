<template>
    <section class="quest-submit-container">
        <div class="inputGroup" v-for="(option, index) in optCopy" :key="index">
            <input :id="quest.title+'-'+option+'-'+(index)" type="checkbox" :name="quest.title" @input="updateAns(index)" />
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
        updateAns(idx){
            let foundIndex = this.answersIdxs.findIndex(currIdx => currIdx === idx);
            if(foundIndex === -1) this.answersIdxs.push(idx)
            else this.answersIdxs.splice(foundIndex, 1) 
            this.$emit('update-answer', this.answersIdxs)
        }
    }
}
</script>
