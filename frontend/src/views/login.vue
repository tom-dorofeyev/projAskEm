<template>
    <section class="login-page-section">
        <div>
            <nav>
                <button @click="moveToSignIn">Sign In</button>
                <button @click="moveToSignUp">Sign Up</button>
            </nav>
        </div>
        <div>
        <sign-in v-if="signIn"></sign-in>
        <sign-up v-else></sign-up>

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
        moveToSignIn(){
            this.signIn = true;
        },
        moveToSignUp(){
            this.signIn = false;
        }
    },
    components: {
        signIn,
        signUp
    }
}
</script>
