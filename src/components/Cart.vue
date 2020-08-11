<template>
    <div class="cart-wrapper">
        <h1>Cart</h1>
        <div class="cart">
            <div v-for="(product, idx) in products" :key="idx">
                <img :src="product.img" :alt="product.title" class="cart__img">
                <p>{{product.title}}</p>
                <p>Quantity: {{product.quantity}}</p>
                <button @click="removeFromCart(idx)">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.getters.products;
        }
    },
    methods: {
        removeFromCart(idx) {
            this.$store.dispatch('removeFromCart', idx)
        }
    }
};
</script>

<style lang="sass">
</style>