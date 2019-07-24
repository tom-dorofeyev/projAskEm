<template>
    <section class="login-page-section flex">
        <div class="side-login-page hide">
            <h2> Create Surveys and Watch the World Answer!</h2>
            <img src="@/assets/images/login-img.png" alt="">
        </div>
        <div class="login-page-form">
            <h2 class="login-header">{{signIn ? 'Sign In' : 'Sign Up' }}</h2>
            <sign-in v-if="signIn"></sign-in>
            <sign-up v-else></sign-up>
            <h5 @click="toggleSignIn" class="login-under-title">{{signIn ? 'Don\'t Have an Account? Sign Up' : 'Already Have an Account? Sign In'}}</h5>
        </div>
    </section>
</template>

<script>
import signIn from '@/components/signin' 
import signUp from '@/components/signup'

export default {

    data(){
        return {
            signIn: true,
        }
    },
    methods: {
        toggleSignIn() {
            this.signIn = !this.signIn;
        }
    },
    components: {
        signIn,
        signUp
    }
}
</script>
