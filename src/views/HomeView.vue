<template>
  <div class="container">
    <NavbarComponent />
    <div class="p-3">
      <HomeSliderComponent />
      <HomeSponsorComponent :token="token"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import HomeSliderComponent from '@/components/home/HomeSliderComponent.vue';
import HomeSponsorComponent from '@/components/home/HomeSponsorComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    HomeSliderComponent,
    HomeSponsorComponent
  },
  methods:{
    async setToken(data){
      this.token = data; 
    }
  },
  data(){
    return {
      token:''
    }
  },
  mounted() {
    this.setToken(localStorage.getItem('token'));
  }
}
</script>
