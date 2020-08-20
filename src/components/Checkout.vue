<template>
    <div ref="checkout" class="checkout position-relative">
        <div v-if="successOrdered" class="d-flex flex-column justify-content-center success-order">
            <h2 class="text-center">Thank You For Your Order</h2>
            <img width="100" class="img img-fluid mx-auto animated-heart mt-4" src="../assets/img/heart.svg" alt="">
        </div>
        <div v-else>
            <h2 class="back-to-cart animated-arrow cursor-pointer" @click="backToCart">←</h2>
            <h1 class="text-center checkout__heading">Checkout</h1>
            <ul class="checkout__list mb-4 px-2">
                <li class="checkout__list-item d-flex align-items-center justify-content-between mb-2" v-for="(product, idx) in products" :key="idx">
                    <img width="50" class="img-fluid" :src="product.img" :alt="product.title">
                    <p>{{product.title}}</p>
                    <p>{{product.price}} mdl</p>
                    <p>Qty: {{product.quantity}}</p>
                </li>
            </ul>
            <h2 class="text-center total-price">Total: <span id="total">{{totalSum}}</span></h2>
            <form @submit.prevent="onSubmit">
                <input id="order" type="hidden" :value="JSON.stringify(products)">
                <input type="hidden" id="sum" :value="totalSum">
                <div class="d-flex flex-column align-items-center mb-3 px-2">
                    <label for="checkout-input" class="cursor-pointer">Please enter your number</label>
                    <input type="tel" class="text-secondary" id="checkout-input" placeholder="+373 60 246 366">
                </div>
                <button class="btn btn-secondary angle-right d-block mx-auto" type="submit">Apply Order</button>
            </form>
        </div>
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
            },
            successOrdered() {
                return this.$store.getters.successOrdered;
            }
        },
        methods: {
            backToCart() {
                this.$emit('backToCart');
            },
            showThanksModal(isCorrect) {
                this.$store.dispatch('showThanksModal');
            },
            onSubmit() {
                let val = document.querySelector('#checkout-input').value;
                const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
                if(val.match(regex) && val.length >= 8) {
                    const cartWrapper = document.querySelector('.cart-wrapper');
                    cartWrapper.style.transform = 'translateX(-110%)';
                    setTimeout(() => {
                        cartWrapper.style.transform = 'translateX(0)';
                        this.showThanksModal();
                    }, 500);
                } else {
                    alert('Please Check Your Number');
                    document.querySelector('#checkout-input').value = '';
                }
            },
        }
    }
</script>

<style lang="sass">
@keyframes animated-heart
    0%
        transform: scale(2)
    50%
        transform: scale(1)
    100%
        transform: scale(2)

.checkout
    transition: .5s all ease-in-out
    height: 100%
    .success-order
        height: 100%
    .animated-heart
        animation: animated-heart 1.75s infinite
    &__heading
        @media (max-width: 700px)
            font-size: 5rem
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
    @media (max-width: 700px)
        font-size: 4rem
#checkout-input
    width: 100%
    border-radius: 30px
    box-shadow: -2px 4px 15px rgba(0, 0, 0, 0.5)
    outline: none
    border: none
    height: 35px
    max-width: 500px
    padding: 10px 20px
    box-sizing: border-box
    font-size: 1.2rem
    font-weight: 900
    font-family: 'Montserrat'

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
    appearance: none

input[type=number]
    -moz-appearance: textfield
</style>