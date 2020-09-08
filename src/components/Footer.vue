<template>
    <footer class="footer mt-5">
        <Question />
        <div class="footer__content container">
                <div class="footer__content-links">
                    <a href="#home">
                        <img src="../assets/img/footer/logo.png" alt />
                    </a>
                    <div class="footer__content-list">
                        <h3>{{ $t('footer.links') }}</h3>
                        <div class="footer-links">
                            <ul>
                                <li>
                                    <a class="link" href="#home">{{ $t('navbar.home') }}</a>
                                </li>
                                <li>
                                    <a class="link" href="#about">{{ $t('navbar.about') }}</a>
                                </li>
                                <li>
                                    <a class="link" href="#products">{{ $t('navbar.desserts') }}</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a class="link" href="#gallery">{{ $t('navbar.gallery') }}</a>
                                </li>
                                <li>
                                    <a class="link" href="#contacts">{{ $t('navbar.contacts') }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>{{ $t('footer.contactUs') }}</h3>
                    <div class="footer-links">
                        <ul>
                            <li>
                                <a class="link" href="tel:+37369177379">+37369177379</a>
                            </li>
                            <li>
                                <a class="link" href="mailto:buburuza@gmail.com">buburuza@gmail.com</a>
                            </li>
                            <li class="d-flex align-items-center">
                                <a href="https://www.instagram.com/sweeties_md/" class="mr-2">
                                    <img src="../assets/img/header/instagram.png" alt />
                                </a>
                                <a href="https://www.facebook.com/sweetiesmd/">
                                    <img src="../assets/img/header/facebook.png" alt />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </footer>
</template>

<script>
import Question from "./Question";

export default {
    components: {
        Question,
    },
};
</script>

<style lang="sass">
.footer
    position: relative
    overflow: hidden
    &__content
        max-width: 800px !important
        margin: 0 auto
        display: flex
        align-items: flex-start
        justify-content: space-between
        @media (max-width: 600px)
            flex-direction: column
            align-items: center
        h3
            font-family: 'Montserrat'
            font-size: 20px
        &-links
            display: flex
            width: 100%
            @media (max-width: 600px)
                justify-content: space-around
                align-items: center
                margin-bottom: 2rem
        &-list
            margin: 0 auto
            @media (max-width: 600px)
                margin: 0
    &-links
        display: flex
        ul
            list-style: none
            padding: 0
            li
                font-size: 1.15rem
                .link
                    background-image: linear-gradient(180deg,transparent 1.25em ,#4C261B 0)
                    background-repeat: no-repeat
                    text-decoration: none
                    background-position: 0 -2px
                    will-change: background-size
                    -webkit-transition: background .3s
                    transition: background .3s
                    background-size: 0 100%
                    color: #4C261B !important
                    &:hover
                        background-size: 100% 100%
            &:not(:last-child)
                margin-right: 2rem
            li:not(:last-child)
                margin-bottom: 1rem
        
            
</style>