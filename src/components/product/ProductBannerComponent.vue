<template>
    <div id="carouselExample" class="carousel slide" style="height: 300px;">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../assets/images/banner.jpeg" class="d-block w-100" alt="..." style="height: 300px; object-fit:cover;">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/banner.jpeg" class="d-block w-100" alt="..." style="height: 300px; object-fit:cover;">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/banner.jpeg" class="d-block w-100" alt="..." style="height: 300px; object-fit:cover;">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
</template>

<script>
export default {
    name: 'ProductBannerComponent'
}
</script>

<style></style>