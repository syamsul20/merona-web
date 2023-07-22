<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand logo-navbar" href="#">MERONA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>

                <!-- Move the menu items here -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">ABOUT US</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/product">ALL PRODUCT</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/order">ORDER</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">CONTACT US</router-link>
                    </li>
                    <li class="nav-item cart-item">
                        <router-link class="nav-link" to="/cart">
                            Shopping Bag
                            <img src="@/assets/icons/shopping-bag.png" alt="">
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <label class="nav-link" style="cursor:pointer">Log Out</label>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>


export default {
    name: "NavbarComponent",
};
</script>

<style>
.logo-navbar {
  font-family: "Pacifico", cursive;
  color: #e75bbf !important;
  font-size: 36px;
}

.nav-item {
  font-size: 16px;
  font-family: Palanquin Dark;
  font-weight: 700;
  background-color: #FAA8AA;
}

.cart-item {
  background-color: #F60889;
}

.nav-link {
  color: white !important;
}

.nav-link > img{
  width:20%;
}
</style>