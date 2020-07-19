<template>
    <b-navbar toggleable="md" class="pl-0 align-items-start">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>
            <img src="../assets/img/header/logo.png" alt />
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav class="justify-content-end">
            <b-navbar-nav>
                <b-nav-item href="#">Главная</b-nav-item>
                <b-nav-item href="#">О Нас</b-nav-item>
                <b-nav-item href="#">Десерты</b-nav-item>
                <b-nav-item href="#">Отзывы</b-nav-item>
                <b-nav-item href="#">Галерея</b-nav-item>
                <b-nav-item href="#">Контакты</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
    .navbar 
        font-family: "Montserrat"
</style>