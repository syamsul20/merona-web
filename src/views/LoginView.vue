<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-center mt-5">
        <div class="card bg-background border-0 w-50" style="padding: 16px;">
            <div class="card-body">
                <div style="font-size: 20px; font-family: Palanquin Dark; color: white;">Sign In</div>
                <div class="text-center mt-3" style="font-size: 30px; font-family: Palanquin Dark; color: white;">Let’s get
                    started now!</div>
                <div class="text-center" style="font-size: 26px; font-family: Palanquin Dark; color: white;">or create an
                    account if not registered yet</div>


                <div class="input-group mb-3 mt-5">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" v-model="username" class="form-control" placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                    <input type="password" v-model="password" placeholder="Password" id="inputPassword5"
                        class="form-control" aria-labelledby="passwordHelpBlock">
                </div>
                <div class="d-flex align-items-center justify-content-center">
                    <button v-on:click="login" class="btn btn-white" style="color: black;">Login</button>
                </div>

                <div class="row align-items-start text-center mt-4">
                    <div class="col">
                        <button type="button" v-on:click="navigateToRegister" class="btn btn-outline-white" style="font-family: Petrona; font-size: 20px;font-weight: 600;">Sign Up</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-outline-white" style="font-family: Petrona; font-size: 20px;font-weight: 600;">Forgot Password?</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>
  <LoadingComponent :isLoading="false"/>
</template>

<script>

import axios from 'axios';
import LoadingComponent from '@/components/LoadingComponent.vue';

export default {
    name : 'LoginView',
    components:{
      LoadingComponent
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let response = await axios.post('https://meronabeauty.my.id/api/login', {
                username: this.username,
                password: this.password
            });
            console.log(response);
            console.log(response.status);
            if (response.status == 201 || response.status == 200) {
                localStorage.setItem('token', response.data);
                alert('Login Berhasil');
                this.$router.push('/');
            }
        },
        navigateToRegister() {
            this.$router.push('/register');
        },
        // navigateToLogin() {
        //     this.$router.push('/login');
        // },
    }
}
</script>

<style>

</style>