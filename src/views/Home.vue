<template>
  <div class="home">
    <Headers />
    <About />
    <Categories />
    <Gallery />
    <Question />
  </div>
</template>

<script>
import Headers from "@/components/Headers";
import About from "@/components/About";
import Categories from "@/components/products/Categories";
import Gallery from "@/components/Gallery";
import Question from "@/components/Question";

export default {
  name: 'Home',
  components: {
    Headers,
    About,
    Categories,
    Gallery,
    Question
  }
}
</script>
