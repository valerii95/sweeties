<template>
    <div class="checkout position-relative">
        <h2 class="back-to-cart animated-arrow cursor-pointer" @click="backToCart">←</h2>
        <h1 class="text-center">Checkout</h1>
        <ul class="checkout__list mb-4 px-2">
            <li class="checkout__list-item d-flex align-items-center justify-content-between mb-2" v-for="(product, idx) in products" :key="idx">
                <img width="50" class="img-fluid" :src="product.img" :alt="product.title">
                <p>{{product.title}}</p>
                <p>{{product.price}} mdl</p>
                <p>Qty: {{product.quantity}}</p>
            </li>
        </ul>
        <h2 class="text-center">Total: <span id="total">{{totalSum}}</span></h2>
        <form>
            <input type="hidden" :value="JSON.stringify(products)">
            <button class="btn btn-success angle-right d-block mx-auto" type="submit">Подтвердить</button>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            products: {
                type: Array,
                default: []
            }
        },
        computed: {
            totalSum() {
                return this.$store.getters.totalSum;
            }
        },
        methods: {
            backToCart() {
                this.$emit('backToCart');
            }
        }
    }
</script>

<style lang="sass">
    .checkout
        &__list
            max-width: 800px
            margin: 0 auto
            &-item
                border: 1px solid #4C261B
                padding: .5rem
                border-radius: 5px

    .back-to-cart
        position: absolute
        left: 5%
</style>