<template>
    <header id="home">
        <div class="container">
            <Navbar />
            <div class="row align-items-center">
                <article class="col-auto mr-auto index-1 header__content">
                    <div class="blur">
                        <h1 class="title">Vegan Deserts</h1>
                        <p
                            class="text"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <a href="#products">
                        <button class="btn btn-primary mt-4 angle-right">Go to catalog</button>
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
header
    position: relative
    overflow: hidden
    min-height: 100vh
    padding-top: 100px
    @media (max-width: 1200px)
        background-image: url('../assets/img/header/cake.png');
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
    right: -50%
    width: 100%
    height: 195%
    border-radius: 50%
    z-index: -1
.header__cake
    @media (max-width: 1200px)
        display: none
</style>
