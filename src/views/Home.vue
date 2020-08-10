<template>
  <div class="home">
    <Headers />
    <About />
    <Categories />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Headers from "@/components/Headers";
import About from "@/components/About";
import Categories from "@/components/products/Categories";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Headers,
    About,
    Categories,
    Gallery,
    Footer
  }
}
</script>
