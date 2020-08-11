<template>
  <div class="home">
    <Headers />
    <About />
    <Categories />
    <Gallery />
    <Footer />
    <Cart />
  </div>
</template>

<script>
import Headers from "@/components/Headers";
import About from "@/components/About";
import Categories from "@/components/products/Categories";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export default {
  name: 'Home',
  components: {
    Headers,
    About,
    Categories,
    Gallery,
    Footer,
    Cart
  }
}
</script>
