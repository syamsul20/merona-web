<template>
    <div class="shadow-container">
        <div class="p-2 text-center" style="font-size: 35px; color: #E75BBF; font-weight: 500;">Ringkasan</div>
        <div class="bg-primary p-2">
            <div style="color: white; font-size: 24px; font-weight: 600;">
                Total Harga {{ formatCurrency(totalPrice) }}</div>
            <div class="bg-white text-center mt-3" style=" font-size: 24px; font-weight: 600;"
                v-bind:style="{ cursor: isHovering ? 'pointer' : 'default' }" v-on:mouseover="isHovering = true"
                v-on:mouseout="isHovering = false" @click="navigateToCheckout">
                Beli
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CartSummaryComponent',
    props: ['data', 'totalPrice'],
    data() {
        return {
            isHovering: false,
        };
    },
    methods: {
        navigateToCheckout() {
            // if (this.barang == null){
            //     alert("You haven't added any items yet");
            //     return;
            // }
            this.$router.push({
                path: '/checkout',
                query: {
                    data: this.data,
                },
            });
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
}
</script>

<style></style>