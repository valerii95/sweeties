<template>
    <div class="cart-wrapper py-4" ref="cart">
        <img width="35" class="close-img" src="../assets/img/close.png" @click="closeCart">
        <div v-if="!checkoutPressed" ref="cartContent" class="cart-content">
            <h1 v-if="products.length" :data-qty="products.length" class="text-center cart__heading">Cart</h1>
            <h1 v-else class="text-center cart__heading">Cart is Empty</h1>
            <div class="cart">
                <div ref="cartItem" class="cart-item" v-for="(product, idx) in products" :key="idx">
                    <div class="d-flex align-items-center justify-content-between mx-auto px-2 mb-1 w-100">
                        <div class="w-md-25 w-50 position-relative">
                            <img :src="product.img" :alt="product.title" class="cart__img img-fluid d-md-block d-flex">
                        </div>
                        <div class="d-md-flex align-items-center w-md-75 justify-content-around mx-2 w-50 text-center">
                            <p class="mb-1">{{product.price}} mdl</p>
                            <p class="mb-1">Quantity: <span ref="qty">{{product.quantity}}</span></p>
                            <div>
                                <button class="btn p-0 cursor-pointer quantity-counter mb-1" @click="decrementQty(product.title)">-</button>
                                <input type="number" class="mx-2 quantity-input" :value="product.quantity" @input="setQty($event, product.title)">
                                <button class="btn p-0 cursor-pointer quantity-counter" @click="incrementQty(product.title)">+</button>
                            </div>
                        </div>
                        <img class="cursor-pointer" src="../assets/img/close.png" width="20" height="20" @click="removeFromCart($event, idx, product.title)">
                    </div>
                    <p class="mb-3 px-2">{{product.title}}</p>
                </div>
            </div>
            <h2 v-if="products.length" class="text-center mb-2 total-price">Total: <span id="total">{{totalSum}}</span> mdl</h2>
            <button 
                v-if="products.length" 
                class="btn btn-secondary angle-right d-block mx-auto" 
                @click="checkout()">Checkout
            </button>
        </div>
        <Checkout 
            v-if="checkoutPressed" 
            :products="products"
            @backToCart="backToCart" />
    </div>
</template>

<script>
import Checkout from './Checkout';

export default {
    components: {
        Checkout
    },
    computed: {
        products() {
            return this.$store.getters.products;
        },
        totalSum() {
            return this.$store.getters.totalSum;
        }
    },
    data() {
        return {
            checkoutPressed: false,
            show: false,
        }
    },
    methods: {
        removeFromCart(e, idx, title) {
            this.$refs.cartItem[idx].classList.add('removed');
            setTimeout(() => {
                this.$refs.cartItem[idx].classList.remove('removed');
                this.$store.dispatch('removeFromCart', [idx, title]);
            }, 400);
        },
        closeCart() {
            this.$refs.cart.style.transform = 'translateX(-110%)';
            this.$refs.cart.style.overflow = 'hidden';
            document.body.style.overflow = 'visible';
            this.$store.dispatch('closeCart');
            this.checkoutPressed = false;
        },
        incrementQty(title) {
            this.$store.dispatch('incrementQty', title);
        },
        decrementQty(title) {
            this.$store.dispatch('decrementQty', title);
        },
        setQty(e, title) {
            if(Number(e.target.value) < 0) {
                e.target.value = 0;
            }
            this.$store.dispatch('setQty', [Number(e.target.value), title]);
        },
        checkout() {
            this.$refs.cart.style.transform = 'translateX(-110%)';
            setTimeout(() => {
                this.checkoutPressed = true;
                this.$refs.cart.style.transform = 'translateX(0)';
            }, 250);
        },
        backToCart() {
            this.$refs.cart.style.transform = 'translateX(-110%)';
            setTimeout(() => {
                this.checkoutPressed = false;
                this.$refs.cart.style.transform = 'translateX(0)';
            }, 250);
        }
    },
};
</script>

<style lang="sass">
    .cart-wrapper
        position: fixed
        top: 5px
        left: 5px
        bottom: 5px
        right: 5px
        border-radius: 4px
        box-shadow: 5px -5px 5px 0px rgba(0,0,0,0.75)
        z-index: 100
        background-color: rgba(255, 255, 255, .99)
        transform: translateX(-110%)
        overflow: auto
        transition: .25s all ease-in-out
        .cart__heading
            @media (max-width: 700px)
                font-size: 5rem
                max-width: 80%
                margin: 0 auto
        .total-price
            @media (max-width: 700px)
                font-size: 4rem
        .cart-content
            transition: .5s all ease-in-out
        .quantity-counter
            font-size: 2rem
            box-shadow: none !important
        .quantity-input
            width: 50px
            border: 1px solid #4C261B
            padding-left: 5px
        .close-img
            position: absolute
            right: 10px
            top: 10px
            cursor: pointer
            z-index: 2
        .cart-item
            max-width: 1100px
            &.removed
                transition: .4s all ease-in-out
                transform: translateX(-100%)
</style>