<template>
    <div class="container">
        <NavbarComponent />
        <div class="row mt-5 px-4">
            <div class="col-7 d-flex flex-column">
                <div>
                    <p>PRODUCT</p>
                    <ul class="list-group">
                        <div v-for="item in carts" :key="item.id">
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col">{{ item.barang.nama }}</div>
                                    <div class="col">{{ item.qty }}X</div>
                                    <div class="col">{{ formatCurrency(parseFloat(item.barang.price) * parseFloat(item.qty))
                                    }}</div>
                                </div>
                            </li>
                        </div>

                    </ul>
                </div>

            </div>
            <div class="col-5">
                <div style="background-color: #F600B1;" class="text-white fw-bold text-center p-3">
                    Ringkasan Pemesanan
                </div>

                <div style="background-color: #F600B1;" class="text-white mt-3 p-3">
                    <div class="table-responsive">
                        <table class="table table-borderless">
                            <tr>
                                <td>
                                    Sub Untuk Produk
                                </td>
                                <td class="text-end">
                                    {{ formatCurrency(totalPrice) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Subtotal pengiriman
                                </td>
                                <td class="text-end">
                                    {{ formatCurrency(this.selectedKurirPrice+this.selectedPaymentPrice) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PPN @ 11%
                                </td>
                                <td class="text-end">

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Total Pembayaran
                                </td>
                                <td class="text-end">
                                    {{ formatCurrency(this.totalPrice + this.selectedKurirPrice+this.selectedPaymentPrice) }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="bg-primary text-center mt-3 p-2" style=" font-size: 24px; font-weight: 600; color: white;"
                    v-bind:style="{ cursor: isHovering ? 'pointer' : 'default' }" v-on:mouseover="isHovering = true"
                    v-on:mouseout="isHovering = false" @click="checkout">
                    Checkout
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h3>Penerima</h3>
            <input class="form-control form-control-lg" type="text" placeholder="Nama" v-model="nama"
                aria-label=".form-control-lg example">
            <input class="form-control form-control-lg mt-3" type="text" placeholder="Email" v-model="email"
                aria-label=".form-control-lg example">
            <input class="form-control form-control-lg mt-3" type="text" placeholder="No. Telepon" v-model="phone"
                aria-label=".form-control-lg example">
            <input class="form-control form-control-lg mt-3" type="text" placeholder="Alamat" v-model="alamat"
                aria-label=".form-control-lg example">
            <input class="form-control form-control-lg mt-3" type="text" placeholder="Kota" v-model="kota"
                aria-label=".form-control-lg example">
        </div>
        <div class="mt-5">
            <h3>Kurir</h3>
            <div v-for="item in kurir" :key="item.id">
                <div class="border rounded p-3 mt-3">
                    <div class="row">
                        <div class="col-7">
                            <input type="radio" :value="item.id" v-model="selectedKurirId" />
                            <img :src="item.image" alt="" style="width: 100px;">
                        </div>
                        <div class="col-5">
                            <h2>{{ formatCurrency(item.price) }}</h2>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h3>Metode Pembayaran</h3>
            <div v-for="item in payment" :key="item.id">
                <div class="border rounded mt-3 p-3">
                    <div class="row">
                        <div class="col-7">
                            <input type="radio" :value="item.id" v-model="selectedPaymentId" />
                            <img :src="item.image" alt="" style="width: 100px;">
                        </div>
                        <div class="col-3">
                            <h2>{{ item.name }}</h2>
                        </div>
                        <div class="col-2">
                            <h2>{{ formatCurrency(item.price) }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import axios from 'axios'

export default {
    components: {
        NavbarComponent
    },
    data() {
        return {
            carts: [],
            token: '',
            totalPrice: 0,
            isHovering: false,
            kurir: [
                { id: 1, price: '28000', image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png', name: 'JNE' },
                { id: 2, price: '14000', image: 'https://1000logos.net/wp-content/uploads/2022/08/JT-Express-Logo.png', name: 'JNT' },
                { id: 3, price: '10000', image: 'https://www.nuwori.com/wp-content/uploads/2017/10/logo-sicepat.png', name: 'SICEPAT' },
            ],
            payment: [
                { id: 1, price: '2500', image: 'https://blogpictures.99.co/cara-menggunakan-ovo.jpg', name: 'OVO' },
                { id: 2, price: '2500', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png', name: 'DANA' },
                { id: 3, price: '1000', image: 'https://image.cermati.com/v1585904886/o81yliwckjhywelnx13a.png', name: 'GOPAY' },
            ],
            selectedKurirId: null,
            selectedPaymentId: null,
            selectedKurirPrice:0,
            selectedPaymentPrice:0
        }
    },
    watch: {
    selectedKurirId(newKurirId) {
      const selectedKurir = this.kurir.find(item => item.id === newKurirId);
      if (selectedKurir) {
        this.selectedKurirPrice = parseFloat(selectedKurir.price);
      }
    },

    selectedPaymentId(newPaymentId) {
      const selectedPayment = this.payment.find(item => item.id === newPaymentId);
      if (selectedPayment) {
        this.selectedPaymentPrice = parseFloat(selectedPayment.price);
      }
    },
  },
    methods: {
        setCart(data) {
            this.carts = data;
            console.log(data);
        },
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
        async checkout() {
            this.token = localStorage.getItem('token');
            if (this.token == null){
                alert("You haven't signed in yet");
                return;
            }

            if (this.nama == '' || this.email == '' || this.phone == '' || this.alamat == '' || this.kota == '' || this.selectedKurirId == null || this.selectedPaymentId == null){
                alert('Checkout field is required');
                return;
            }
            const selectedkurir = this.kurir.find(item => item.id === this.selectedKurirId);
            const selectedPayment = this.payment.find(item => item.id === this.selectedPaymentId);
            let items = [];

            this.carts.forEach(item => {
                items.push({
                    barang_id: item.barang_id,
                    qty: item.qty
                });
            });


            let response = await axios.post('https://meronabeauty.my.id/api/checkout', {
                "nama": this.nama,
                "email": this.email,
                "phone": this.phone,
                "alamat": this.alamat,
                "kota": this.kota,
                "kurir": selectedkurir.name,
                "payment_method": selectedPayment.name,
                "total_amount": this.totalPrice,
                "fee": "500",
                "items": items
            }, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
            console.log(response);
            console.log(response.status);
            if (response.status == 201 || response.status == 200) {
                alert('Berhasil checkout');
                this.$router.push('/');
            }
        },
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
                this.totalPrice += price * qty;
            });
        }).catch((error) => console.log(error));
    },
}
</script>

<style></style>