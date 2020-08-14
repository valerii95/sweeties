<template>
    <div class="cart-wrapper py-4" ref="cart">
        <div class="cart-content">
            <h1 v-if="products.length" :data-qty="products.length" class="text-center">Cart</h1>
            <h1 v-else class="text-center">Cart is Empty</h1>
            <img width="50" class="close-img" src="../assets/img/close.png" @click="closeCart">
            <div class="cart">
                <div ref="cartItem" v-for="(product, idx) in products" :key="idx" class="cart-item d-md-flex align-items-center justify-content-between mx-auto px-2 mb-4">
                    <img :src="product.img" :alt="product.title" class="cart__img img-fluid w-md-25 d-md-block d-flex mx-auto">
                    <div class="mt-2 mt-md-0 ml-md-3 d-flex flex-wrap justify-content-between align-items-center w-md-75">
                        <div class="w-md-50 justify-content-between align-items-center d-md-flex">
                            <p>{{product.title}}</p>
                            <p>Quantity: <span ref="qty">{{product.quantity}}</span></p>
                        </div>
                        <div class="d-flex align-items-center">
                            <button class="btn p-0 cursor-pointer quantity-counter" @click="incrementQty">+</button>
                            <input ref="qtyInput" type="number" class="mx-2 quantity-input" @input="setQty">
                            <button class="btn p-0 cursor-pointer quantity-counter" @click="decrementQty">-</button>
                        </div>
                        <img class="cursor-pointer" src="../assets/img/close.png" width="20" height="20" @click="removeFromCart($event, idx)">
                    </div>
                </div>
            </div>
            <button v-if="products.length" class="btn btn-primary angle-right d-block mx-auto">Checkout</button>
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
        removeFromCart(e, idx) {
            this.$refs.cartItem[idx].classList.add('removed');
            setTimeout(() => {
                this.$refs.cartItem[idx].classList.remove('removed');
                this.$store.dispatch('removeFromCart', idx);
            }, 400);
        },
        closeCart() {
            this.$refs.cart.style.display = 'none';
            document.body.style.overflow = 'visible';
        },
        incrementQty() {

        },
        decrementQty() {

        },
        setQty() {
            
        }
    },
    mounted() {
        this.$refs.qtyInput.forEach((el, idx) => {
            el.value = this.$refs.qty[idx].innerText;
        })
    }
};
</script>

<style lang="sass">
    .cart-wrapper
        position: fixed
        top: 3px
        left: 3px
        bottom: 3px
        right: 3px
        z-index: 999
        background-color: rgba(255, 255, 255, .99)
        display: none
        overflow: auto
        .quantity-counter
            font-size: 2rem
        .quantity-input
            width: 50px
        .close-img
            position: absolute
            right: 3%
            top: 3%
            cursor: pointer
        .cart-item
            max-width: 1100px
            &.removed
                transition: .4s all ease-in-out
                transform: translateX(-1500px)
</style>