<template>
  <div class="container">
    <NavbarComponent />
    <div class="container">
      <div class="row mt-5">
        <div class="col-9">
          <div class="mb-3" v-for="cart in carts" :key="cart.id">
            <ProductItemCartComponent :data="cart" />
          </div>
        </div>
        <div class="col">
          <CartSummaryComponent :data="data" :totalPrice="totalPrice" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import ProductItemCartComponent from '@/components/cart/ProductItemCartComponent.vue';
import CartSummaryComponent from '@/components/cart/CartSummaryComponent.vue';
import axios from 'axios';

export default {
  components: {
    NavbarComponent,
    ProductItemCartComponent,
    CartSummaryComponent
  },
  data() {
    return {
      carts: [],
      token: '',
      totalPrice: 0
    }
  },
  methods: {
    setCart(data) {
      this.carts = data;
      console.log(data);
    }
  },
  mounted() {
    this.token = localStorage.getItem('token');
    axios.get('https://meronabeauty.my.id/api/cart', {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    }).then((response) => {
      this.setCart(response.data);
      response.data.forEach((item) => {
        const price = parseFloat(item.barang.price);
        const qty = item.qty;
        this.totalPrice = this.totalPrice + (price * qty);
      });
    }).catch((error) => console.log(error));
  }
}
</script>

<style></style>