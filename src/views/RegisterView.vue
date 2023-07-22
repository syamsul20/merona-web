<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-center mt-5">
            <div class="card bg-background border-0 w-50" style="padding: 16px;">
                <div class="card-body">
                    <div class="row align-items-start mt-4">
                        <div class="col">
                            <div style="font-size: 20px; font-family: Palanquin Dark; color: white;">Sign Up</div>
                        </div>
                        <div class="col">
                            <div class="text-end" style="font-size: 14px; font-family: Palanquin Dark; color: white;">
                                Already have an
                                account? <span style="font-size: 18px;"><a href="#" @click="redirectToLogin"
                                        style="color: white;">Sign In Here</a></span></div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label for="fullname" class="form-label">Fullname :</label>
                        <input type="text" v-model="fullname" id="fullname" class="form-control" placeholder="Fullname"
                                aria-label="Fullname" aria-describedby="basic-addon1">
                    </div>
                    <div class="mt-2">
                        <label for="username" class="form-label">Pick a Username :</label>
                        <input type="text" v-model="username" id="username" class="form-control" placeholder="Username"
                                aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="mt-2">
                        <label for="password" class="form-label">Make a Password :</label>
                        <input type="password" v-model="password" placeholder="Password" id="password"
                                class="form-control" aria-labelledby="passwordHelpBlock">
                    </div>
                    <div class="mt-2">
                        <label for="phone" class="form-label">Enter your phone (optional) :</label>
                        <input type="tel" v-model="phone" id="phone" class="form-control" placeholder="Phone"
                                aria-label="Phone" aria-describedby="basic-addon1">
                    </div>
                    <div class="mt-2">
                        <label for="email" class="form-label">Enter your email (optional) :</label>
                        <input type="email" v-model="phone" id="email" class="form-control" placeholder="Email"
                                aria-label="Email" aria-describedby="basic-addon1">
                    </div>
                    <div class="d-flex align-items-center justify-content-center mt-3">
                        <button v-on:click="register" class="btn btn-white" style="color: black;">Sign Up</button>
                    </div>

                    <div class="row align-items-start text-center mt-4">
                        <div class="col">
                            <button type="button" v-on:click="navigateToRegister" class="btn btn-outline-white"
                                style="font-family: Petrona; font-size: 20px;font-weight: 600;">Sign Up</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-white"
                                style="font-family: Petrona; font-size: 20px;font-weight: 600;">Forgot Password?</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterView',
    data() {
        return {
            username: '',
            password: '',
            fullname:'',
            phone:'',
            email:''
        }
    },
    methods: {
        redirectToLogin() {
            this.$router.push('/login');
        },
        async register() {
            let response = await axios.post('https://meronabeauty.my.id/api/register', {
                username: this.username,
                password: this.password,
                fullname: this.fullname,
                phone:this.phone,
                email:this.email
            });
            console.log(response);
            console.log(response.status);
            if (response.status == 201 || response.status == 200) {
                alert('Registrasi Berhasil');
                this.$router.push('/');
            }
        },
    }
}
</script>

<style>
label {
    font-size: 16px;
    color: white;
    font-weight: 600;
}
</style>