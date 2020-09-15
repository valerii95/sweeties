<template>
    <header id="home" class="header">
        <div class="container">
            <Navbar />
            <div class="row align-items-center">
                <article class="col-auto mr-auto index-1 header__content">
                    <div class="blur">
                        <h1 class="title">{{ $t('header.heading') }}</h1>
                        <p
                            class="text"
                        >{{ $t('header.text') }}</p>
                    </div>
                    <a href="#products">
                        <button class="btn btn-secondary mt-4 angle-right">{{ $t('header.button') }}</button>
                    </a>
                </article>
                <div class="col-6 index-1 header__cake">
                    <img class="img img-fluid" src="../assets/img/header/cake.png" alt />
                </div>
            </div>
        </div>
        <div class="circle bg-success"></div>
        
        <Particles v-if="particleResponsive" componentId="particle-header" />
    </header>
</template>

<script>
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";

export default {
    name: "Headers",
    components: {
        Navbar,
        Particles,
    },
    data() {
        return {
            particleResponsive: true,
        };
    },
    methods: {
        toggleParticles() {
            if (window.innerWidth < 1200) {
                this.particleResponsive = false;
            } else {
                this.particleResponsive = true;
            }
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.toggleParticles();

            window.addEventListener("resize", () => {
                this.toggleParticles();
            });
        });
    },
};
</script>

<style lang="sass" scoped>
.header
    position: relative
    overflow: hidden
    min-height: 100vh
    padding-top: 100px
    &__content
        max-width: 500px
        width: 100%
    @media (max-width: 1200px)
        background-image: url('../assets/img/header/cake.png')
        background-size: contain
        background-repeat: no-repeat
        background-position: center right
        min-height: unset
        padding-bottom: 4rem
article
    .title
        position: relative
        display: inline-block
        margin-bottom: 3.5rem
    .text
        @media(min-width: 1200px)
            max-width: 430px
.circle
    position: absolute
    top: -100%
    right: -49%
    width: 100%
    height: 195%
    border-radius: 50%
    z-index: -1
.header__cake
    @media (max-width: 1200px)
        display: none
</style>
