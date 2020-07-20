<template>
    <section class="about pt-5 position-relative">
        <div class="container">
            <div class="row align-items-center justify-content-between position-relative">
                <div class="circle bg-success"></div>
                <div class="col-6 col-xxl-5">
                    <img
                        class="img img-fluid"
                        :src="require('../assets/img/about/about.png')"
                        alt="About"
                    />
                </div>
                <article class="col-6 col-xxl-5 blur">
                    <h1 class="mb-3">Basic principles of work</h1>
                    <p
                        class="text"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button class="btn btn-primary angle-left mt-4">Learn more</button>
                </article>
            </div>
        </div>
    <ParticlesHeader componentId="particle-about" :images="['about/sweet.png', 'about/sweet2.png', 'about/sweet2.png']" quantity="10" randomSize="true" />
    </section>
</template>

<script>
import ParticlesHeader from "@/components/ParticlesHeader";

export default {
  components: {
    ParticlesHeader
  }
};
</script>

<style lang="sass" scoped>
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