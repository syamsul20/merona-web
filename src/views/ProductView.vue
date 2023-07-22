<template>
    <div class="container">
        <NavbarComponent />
        <ProductBannerComponent />
        <div class="bg-secondary text-center mt-4"
            style="width: 200px; color: white; font-size: 16px; font-family: Palanquin Dark;font-weight: 700; padding-left: 16px; padding-right: 16px; padding-top: 4px; padding-bottom: 8px;">
            Product Category
        </div>
        <div class="row mt-3 row flex-nowrap overflow-auto">
            <div class="col md-2 mt-4" v-for="category in categories" :key="category.id">
                <ProductCategoryComponent :category="category" />
            </div>
        </div>
        <div class="mt-5">
            <ProductSearchComponent />
        </div>
        <!-- <div class="row mt-5 row flex-nowrap overflow-auto">
            <div class="col md-2 mt-4" v-for="product in products" :key="product.id">
                <ProductComponent :product="product"/>
            </div>
        </div> -->
        <div class="container text-center my-5">
            <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div class="col" v-for="product in products" :key="product.id">
                    <ProductComponent :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import ProductBannerComponent from '@/components/product/ProductBannerComponent.vue';
import ProductCategoryComponent from '@/components/product/ProductCategoryComponent.vue';
import axios from 'axios';
import ProductSearchComponent from '@/components/product/ProductSearchComponent.vue';
import ProductComponent from '@/components/product/ProductComponent.vue';

export default {
    name: 'ProductView',
    components: {
        NavbarComponent,
        ProductBannerComponent,
        ProductCategoryComponent,
        ProductSearchComponent,
        ProductComponent
    },
    data() {
        return {
            categories: [],
            products: []
        }
    },
    methods: {
        setCategory(data) {
            this.categories = data;
        },
        setProduct(data) {
            this.products = data;
        }
    },
    mounted() {
        axios.get('https://meronabeauty.my.id/api/category')
            .then((response) => this.setCategory(response.data['data']))
            .catch((error) => console.log(error));

        axios.get('https://meronabeauty.my.id/api/barang')
            .then((response) => this.setProduct(response.data['data']))
            .catch((error) => console.log(error));
        console.log(window.location.origin);
    }
}
</script>

<style></style>