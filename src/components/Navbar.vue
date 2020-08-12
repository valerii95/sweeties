<template>
    <div class="navbar-wrapper">
        <b-navbar toggleable="md" class="align-items-center container">
            <div class="d-flex">
                <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
                <div class="align-items-center d-md-none d-flex">
                    <img @click="openCart" class="cart-img" src="../assets/img/cart.png" alt="cart">
                    <p class="text-white ml-2">{{cartLength}}</p>
                </div>
            </div>

            <b-navbar-brand>
                <div class="navbar__logo">
                    <img @click="toggleIcons" class="img img-fluid" src="../assets/img/header/logo.png" alt />
                    <div class="header__social" ref="social">
                        <a href="https://www.instagram.com/sweeties_md/" target="_blank">
                            <img src="../assets/img/header/instagram.png" alt />
                        </a>
                        <a href="https://www.facebook.com/sweetiesmd/" target="_blank">
                            <img src="../assets/img/header/facebook.png" alt />
                        </a>
                    </div>
                </div>
            </b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav class="justify-content-end">
                <b-navbar-nav class="position-relative align-items-center">
                    <b-nav-item href="#home">Главная</b-nav-item>
                    <b-nav-item href="#about">О Нас</b-nav-item>
                    <b-nav-item href="#products">Десерты</b-nav-item>
                    <b-nav-item href="#gallery">Галерея</b-nav-item>
                    <b-nav-item href="#contacts">Контакты</b-nav-item>
                    <div class="align-items-center d-md-flex d-none">
                        <img @click="openCart" class="cart-img" src="../assets/img/cart.png" alt="cart">
                        <p class="text-white ml-2">{{cartLength}}</p>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <Cart />
    </div>
</template>

<script>
import Cart from "./Cart";

export default {
    components: {
        Cart
    },
    methods: {
        toggleIcons() {
            this.$refs.social.classList.toggle('disabled');
        },
        openCart() {
            document.querySelector('.cart-wrapper').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    },
    computed: {
        cartLength() {
            return this.$store.state.products.length;
        }
    },
    mounted() {
        const navbarWrapper = document.querySelector(".navbar-wrapper"),
            navbarHeight = document.querySelector(".navbar").scrollHeight;

        if (navbarHeight + document.body.getBoundingClientRect().top < 0) {
            navbarWrapper.classList.add("fixed");
        } else {
            navbarWrapper.classList.remove("fixed");
        }

        window.addEventListener("scroll", () => {
            if (navbarHeight + document.body.getBoundingClientRect().top < 0) {
                navbarWrapper.classList.add("fixed");
            } else {
                navbarWrapper.classList.remove("fixed");
            }
        });
    },
};
</script>

<style lang="sass">

.navbar-wrapper
    font-family: "Montserrat"
    position: fixed
    z-index: 2
    width: 100%
    top: 0
    transition: .3s all ease-in-out
    left: 0
    @media (max-width: 1200px)
        background-color: rgba(0, 0, 0, .25)
    .navbar
        height: 90px
        transition: .3s all ease-in-out
        &__logo
            display: flex
            align-items: center
            @media (max-width: 767px)
                flex-direction: row-reverse
            .header__social
                margin-top: 1rem
                transform: translateX(0)
                opacity: 1
                transition: .3s all ease-in
                overflow: visible
                margin-left: 1rem
                @media (max-width: 767px)
                    margin-right: 1rem
                    margin-left: 0
                &.disabled
                    transform: translateX(-20px)
                    opacity: 0
                    // overflow: hidden
                    pointer-events: none
                    @media (max-width: 767px)
                        transform: translateX(50px)
        &-toggler
            border: none
        &-nav
            @media (max-width: 767px)
                background-color: rgba(0, 0, 0, .25)
                padding: 0 10px
        @media (max-width: 1200px)
            max-height: 70px
            padding: 0
        &-brand img
            transition: .3s all ease-in-out
            cursor: pointer
            @media (max-width: 1200px)
                max-height: 70px
    &.fixed
        background-color: rgba(0, 0, 0, .35)
        // backdrop-filter: blur(2px)
        .navbar
            @media (min-width: 1200px)
                height: 50px
            &-brand img
                @media (min-width: 1200px)
                    transform: translateY(-13px)
    .cart-img
        max-width: 40px
        cursor: pointer
        filter: invert(1)
        margin-left: .5rem
</style>