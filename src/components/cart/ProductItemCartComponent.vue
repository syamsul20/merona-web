<template>
    <div class="container shadow-container">
        <div class="row">
            <div class="col-3 shadow-container m-3">
                <img src="https://lzd-img-global.slatic.net/g/p/94c4905b173dce28bd4a32250f79e099.jpg_720x720q80.jpg"
                    style="width: 100%;" alt="">
            </div>
            <div class="col">
                <div class="align-items-start" style="font-size: 40px; font-weight: 600; font-family: Poppins;">
                    {{data.barang.nama}}
                </div>
                <div class="align-items-start" style="font-size: 35px; font-weight: 600; font-family: Poppins;">
                    {{ formatCurrency(data.barang.price)}}
                </div>

                <div class="row mt-3">
                    <div class="col-1 border border-primary d-flex align-items-center text-center justify-content-center"
                        style="width: 50px; height: 50px;">
                        <span style="font-weight: 700; font-size: 30px;">-</span>
                    </div>
                    <div class="col-1 d-flex align-items-center text-center justify-content-center"
                        style="width: 50px; height: 50px;">
                        <span style="font-weight: 700; font-size: 30px;">{{data.qty}}</span>
                    </div>
                    <div class="col-1 bg-primary border border-secondary d-flex align-items-center text-center justify-content-center"
                        style="width: 50px; height: 50px;">
                        <span style="font-weight: 700; font-size: 30px;">+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartProductItemComponent',
    props:['data'],
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

    },
}
</script>

<style></style>