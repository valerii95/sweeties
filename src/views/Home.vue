<template>
  <div class="home">
    <Headers />
    <About />
  </div>
</template>

<script>
import Headers from "@/components/Headers";
import About from "@/components/About";

export default {
  name: 'Home',
  components: {
    Headers,
    About
  }
}
</script>
