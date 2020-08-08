<template>
    <div class="navbar-wrapper">
        <b-navbar toggleable="md" class="align-items-center container">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>
                <a href="#home">
                    <img class="img img-fluid" src="../assets/img/header/logo.png" alt />
                </a>
            </b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav class="justify-content-end">
                <b-navbar-nav>
                    <b-nav-item href="#home">Главная</b-nav-item>
                    <b-nav-item href="#about">О Нас</b-nav-item>
                    <b-nav-item href="#products">Десерты</b-nav-item>
                    <b-nav-item href="#gallery">Галерея</b-nav-item>
                    <b-nav-item href="#contacts">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
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
        background-color: rgba(0, 0, 0, .5)
    .navbar
        height: 90px
        transition: .3s all ease-in-out
        &-toggler
            border: none
        &-nav
            @media (max-width: 767px)
                background-color: rgba(0, 0, 0, .5)
                padding: 0 10px
        @media (max-width: 1200px)
            max-height: 70px
            padding: 0
        &-brand img
            transition: .3s all ease-in-out
            @media (max-width: 1200px)
                max-height: 70px
    &.fixed
        background-color: rgba(0, 0, 0, .5)
        .navbar
            @media (min-width: 1200px)
                height: 50px
            &-brand img
                @media (min-width: 1200px)
                    transform: translateY(-13px)
</style>