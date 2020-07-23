<template>
    <b-col cols="4">
        <article class="card mx-auto">
            <figure>
                <img class="img img-fluid" :src="category.img" :alt="category.title" />
                <figcaption class="px-4 my-3">{{category.title}}</figcaption>
                <p class="px-4">{{category.text}}</p>
            </figure>
            <button class="btn btn-success ml-auto px-0"></button>
        </article>
    </b-col>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="sass">
.card
    color: #000
    margin-bottom: 80px
    overflow: hidden
    background-color: #fff
    box-shadow: 0 7px 50px rgba(black, .1)
    cursor: pointer
    transition: .3s all
    &:hover
        box-shadow: 0 7px 50px rgba(76, 38, 27, .7)
    @media(min-width: 768px)
        max-width: 300px
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