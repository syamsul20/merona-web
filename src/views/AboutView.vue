<template>
  <div class="container">
    <NavbarComponent />
    <div class="d-flex justify-content-center mt-5 text-center" style="color: red; font-weight: 700; font-size: 40px; ">
      <div class="w-50">
        <p>SELAMAT DATANG DI MERONA!
        PLATFROM MAKEUP & SKINCARE</p>
      </div>
      
    </div>
    <div class="d-flex justify-content-center mt-5 text-center" style="color: #F60889; font-weight: 700; font-size: 40px; ">
      <div style="width: 70%;">
        <p>Di khususkan untuk pria dan wanita modern! Kami dengan bangga mempersembahkan koleksi terbaru dan informasi terkini seputar tren produk makeup dan skincare bagi semua orang.</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  }
}
</script>

<style></style>