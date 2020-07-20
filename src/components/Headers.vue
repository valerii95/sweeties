<template>
  <header>
    <div class="container">
      <Navbar />
      <div class="row align-items-center">
        <article class="col-auto mr-auto index-1 blur">
          <h1 class="title">Vegan Deserts</h1>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button class="btn btn-primary mt-lg-4 angle-right">Go to catalog</button>
        </article>
        <div class="col-6 index-1">
          <img class="img img-fluid" src="../assets/img/header/cake.png" alt />
        </div>
      </div>
    </div>
    <div class="circle bg-success"></div>
    <ParticlesHeader componentId="particle-header"/>
  </header>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import ParticlesHeader from "@/components/ParticlesHeader";
  
  export default {
    name: "Headers",
    components: {
      Navbar,
      ParticlesHeader
    }
  };
</script>

<style lang="sass" scoped>
header
  position: relative
  overflow: hidden
  min-height: 100vh
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
</style>
