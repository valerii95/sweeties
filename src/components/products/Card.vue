<template>
    <div>
        <article ref="card" class="card" @click="showCategory()">
            <figure>
                <img class="img img-fluid" :src="category.img" :alt="category.title" />
                <figcaption class="px-4 my-3">{{category.title}}</figcaption>
                <p class="px-4">{{category.text}}</p>
            </figure>
            <div class="d-flex justify-content-between">
                <p class="ml-4 card__price" v-if="category.price">{{category.price}} mdl</p>
                <button class="btn btn-success ml-auto px-0" @click="addToCart(category)"></button>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            default: {}
        },
        isCategory: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        showCategory() {
            this.$emit('showCategory', this.category.id);
        },
        addToCart(product) {
            if(this.isCategory) {
                this.$refs.card.classList.add('animate');
                setTimeout(() => {
                    this.$refs.card.classList.remove('animate');
                },350);

                this.$store.dispatch('addToCart', product);
            }
        }
    }
};
</script>

<style lang="sass">
@keyframes card-animation
    0%
        transform: translateY(0)
    25%
        transform: translateY(-10px)
    50%
        transform: translateY(0)
    75%
        transform: translateY(10px)
    100%
        transform: translateY(0)

.card
    color: #000
    margin: 30px auto 80px auto
    overflow: hidden
    background-color: #fff
    cursor: pointer
    transition: .3s all
    border-radius: 3px 75px 0px 75px !important
    box-shadow: 0 1px 1px rgba(black, .1)
    max-width: 300px
    &.animate
        animation: card-animation .35s
    & &__price
        font-size: 1.25rem
        font-weight: 600
        color: #4C261B
    @media (min-width: 470px)
        box-shadow: 0 7px 25px rgba(black, .1)
        border-color: transparent
        &:hover
            box-shadow: 0 7px 25px rgba(76, 38, 27, .7)
    @media (max-width: 1024px)
        max-width: 300px
        margin: 30px auto
    .img
        height: 210px
        width: 100%
        border-bottom-left-radius: 75px
    figcaption
        font-size: 24px
        font-family: 'Montserrat'
        font-weight: 700
        letter-spacing: -1px
        line-height: 1
    p
        font-size: 13px
        line-height: 1.3
        font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
    .btn
        font-size: 4rem
        line-height: .5
        font-weight: 200
        font-family: 'Montserrat'
        position: relative
        width: 70px
        height: 52px
        border-radius: 35px 0 0 0
        &::after
            position: absolute
            content: ''
            width: 5px
            height: 32px
            background: #fff
            top: 50%
            left: 50%
            transform: translateY(-50%) translateX(-50%)
        &::before
            position: absolute
            content: ''
            width: 32px
            height: 5px
            background: #fff
            top: 50%
            left: 50%
            transform: translateY(-50%) translateX(-50%)
</style>