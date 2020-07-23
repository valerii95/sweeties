<template>
    <section class="container p-5">
        <h1 class="text-center mb-4">Choose your dessert !</h1>
        <Categories />
        <Category />
    </section>
</template>

<script>
import Categories from "./Categories";
import Category from "./Category";

export default {
    components: {
        Categories,
        Category
    }
};
</script>

<style lang="scss">
</style>