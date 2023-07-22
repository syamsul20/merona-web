<template>
    <div class="container">
        <NavbarComponent />
        <div class="mt-3">
            <div v-for="item in data" :key="item.id">
                <div class="border rounded p-3">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col">
                                <div>{{ item.nama }}</div>
                                <div>{{ item.phone }}</div>
                                <div>{{ item.alamat }} {{ item.kota }}</div>
                            </div>
                            <div class="col">{{ item.payment_method }}</div>
                            <div class="col">{{ formatCurrency(item.total_amount) }}</div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <strong>Barang:</strong>
                            </div>
                        </div>
                        <div v-for="(data, index) in item.items" :key="index" class="row">
                            <div class="col">
                                {{data.barang.nama}} x {{data.qty}}
                            </div>
                        </div>
                    </li>
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
            data: [],
            token: '',
            totalPrice: 0
        }
    },
    methods: {
        setData(data) {
            this.data = data;
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
    },
    mounted() {
        this.token = localStorage.getItem('token');
        axios.get('https://meronabeauty.my.id/api/transaction', {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).then((response) => {
            this.setData(response.data);
        }).catch((error) => console.log(error));
    }
}
</script>

<style></style>