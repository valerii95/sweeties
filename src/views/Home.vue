<template>
  <div class="home">
    <Headers />
    <About />
    <Products />
  </div>
</template>

<script>
import Headers from "@/components/Headers";
import About from "@/components/About";
import Products from "@/components/products/Products";

export default {
  name: 'Home',
  components: {
    Headers,
    About,
    Products
  }
}
</script>
