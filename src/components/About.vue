<template>
  <section class="about mt-5 position-relative" id="about">
    <div class="container">
      <div class="row align-items-center justify-content-between position-relative">
        <div class="circle bg-success"></div>
        <div class="col-xs-12 col-md-6 col-xxl-5">
          <img
            class="img img-fluid"
            :src="require('../assets/img/about/about.png')"
            alt="About"
          />
        </div>
        <article class="col-xs-12 col-md-6 col-xxl-5 blur">
          <h2 class="mb-3 about__heading">{{ $t('about.heading') }}</h2>
          <p class="text">{{ $t('about.text') }}</p>
          <!-- <button class="btn btn-primary angle-left mt-4">Learn more</button> -->
        </article>
      </div>
    </div>
    <Particles
      v-if="particleResponsive"
      componentId="particle-about"
      :images="['about/sweet1.png', 'about/sweet2.png', 'about/sweet3.png']"
      :quantity="10"
      :randomSize="true" />
  </section>
</template>

<script>
import Particles from "@/components/Particles";

export default {
  components: {
    Particles
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
      }
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
  .about
    display: flex
    min-height: 100vh
    align-items: center
    overflow: hidden
    padding-bottom: 2rem
    // &__heading
    //   @media (max-width: 767px)
    //     font-size: 7rem
    //     margin-top: 1rem
    //     line-height: .7
  .text
    @media(min-width: 1200px)
      max-width: 430px
  .circle
    position: absolute
    top: 0
    left: -25%
    bottom: 0
    width: 75%
    height: 100%
    border-radius: 50%
    transform: rotate(45deg) translateX(-27%) translateY(33%)
  .img
    position: relative
    z-index: 1
</style>
