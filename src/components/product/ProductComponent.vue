<template>
  <div class="container shadow-container p-4">
    <div style="min-height:350px">
      <img :src="product.image" style="width: 100%;" alt="">
      </div>
    <div class="container mt-1" style="font-family: Poppins; text-align: start; font-size: 16; font-weight: 600;">{{
      product.name }}</div>
    <div class="container mt-1"
      style="font-family: Poppins; text-align: start; font-size: 12; font-weight: 400; color: grey;min-height:80px">{{
        product.description }}</div>
    <div class="container text-center">
      <div class="row align-items-center mt-3">
        <div class="col">
          {{ formatCurrency(product.price) }}
        </div>
        <div class="col bg-primary py-1" style="color: white;"
          v-bind:style="{ cursor: isHovering ? 'pointer' : 'default' }" v-on:mouseover="isHovering = true"
          v-on:mouseout="isHovering = false" @click="addToCart">
          Buy
          <img src="../../assets/icons/icon-add-to-cart.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductComponent',
  props: ['product'],
  data() {
      return {
        isHovering: false,
        token: ''
      };
    },
  methods: {
    formatCurrency(value) {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        return parsedValue.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR'
        });
      }
      return value;
    },
  

    async addToCart() {
      this.token = localStorage.getItem('token');
      if (this.token == null){
        alert("You haven't signed in yet");
        return;
      }
      console.log(this.token);
      let response = await axios.post('https://meronabeauty.my.id/api/cart', {
        barang_id: this.product.id,
        qty: 1,
      }, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      console.log(response);
      console.log(response.status);
      if (response.status == 201 || response.status == 200) {
        alert('Data berhasil di tambahkan ke keranjang');
      }
    },
  }
}
</script>

<style></style>