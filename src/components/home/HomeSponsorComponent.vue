<template>
  <div class="row mt-4">
        <div class="col-md-6">
            <div class="container text-center " v-if="token === null">
                <div class="row">
                    <div class="col">
                        <button class="btn btn-primary btn-register w-100 fs-3 fw-semibold" @click="navigateToRegister" style="font-family: 'Petrona', sans-serif !important; color: white !important;">Sign
                            Up</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-secondary btn-login w-100 fs-3 fw-semibold" @click="navigateToLogin" style="font-family: 'Petrona', sans-serif !important; color: white !important;">Sign
                            In</button>
                    </div>
                </div>
            </div>
            <div class="d-flex h-50 justify-content-center align-self center pt-3">
                <ul class="list-unstyled d-flex flex-wrap">
                    <li v-for="item in items" :key="item.id" style="padding: 16px; width: 30%;"><img :src="item.image" class="card-img-top w-100" alt="Item Image" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-6">
            <img class="w-100" src="@/assets/images/image.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeSponsorComponent',
    props:['token'],
    data() {
        return {
            items: [
                { id: 1, image: require("@/assets/images/bnb.png") },
                { id: 2, image: require("@/assets/images/makeover.png") },
                { id: 3, image: require("@/assets/images/nurface.png") },
                { id: 4, image: require("@/assets/images/wardah.png") },
                { id: 5, image: require("@/assets/images/implora.png") },
                { id: 6, image: require("@/assets/images/something.png") },
            ],
        }
    },
    methods: {
        navigateToRegister() {
            this.$router.push('/register');
        },
        navigateToLogin() {
            this.$router.push('/login');
        },
    },
}
</script>

<style>

</style>