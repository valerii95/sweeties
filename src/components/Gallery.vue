<template>
    <section class="container gallery" id="gallery">
        <h2 class="text-center mb-4">{{ $t('gallery.heading') }}</h2>
        <div class="justify-content-center position-relative">
            <!-- <button id="gallery-prev"><img :src="require('../assets/img/gallery/prev-arrow.png')" alt=""></button> -->
            <VueSlickCarousel v-bind="sliderSettings">
                <template v-slot:prevArrow>
                    <img :src="require('../assets/img/gallery/prev-arrow.png')" alt="" id="gallery-prev">
                </template>
                <div v-for="(image, idx) in gallery" :key="idx" class="gallery__img">
                    <div class="img-wrapper" @mouseover="overImg($event)" @mouseout="outImg($event)">
                        <img class="d-block img-fluid mx-auto" :src="image.img" />
                        <span class="gallery__description">{{image.description}}</span>
                    </div>
                </div>
                <template v-slot:nextArrow>
                    <img :src="require('../assets/img/gallery/next-arrow.png')" alt="" id="gallery-next">
                </template>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css"

export default {
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            sliderSettings: {
                infinite: true,
                slidesToShow: 3,
                speed: 500,
                rows: 2,
                slidesPerRow: 1,
                arrows: true,
                // dots: true,
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            rows: 1
                        },
                    },
                ],

            },
        };
    },
    computed: {
        gallery() {
            return [
                {img : require("../assets/img/gallery/g1.png"), description: this.$t('gallery.description')[0]},
                {img : require("../assets/img/gallery/g2.png"), description: this.$t('gallery.description')[1]},
                {img : require("../assets/img/gallery/g3.png"), description: this.$t('gallery.description')[2]},
                {img : require("../assets/img/gallery/g4.png"), description: this.$t('gallery.description')[3]},
                {img : require("../assets/img/gallery/g5.png"), description: this.$t('gallery.description')[4]},
                {img : require("../assets/img/gallery/g6.png"), description: this.$t('gallery.description')[5]},
                {img : require("../assets/img/gallery/g1.png"), description: this.$t('gallery.description')[6]},
                {img : require("../assets/img/gallery/g2.png"), description: this.$t('gallery.description')[7]},
                {img : require("../assets/img/gallery/g3.png"), description: this.$t('gallery.description')[8]},
                {img : require("../assets/img/gallery/g4.png"), description: this.$t('gallery.description')[9]},
                {img : require("../assets/img/gallery/g5.png"), description: this.$t('gallery.description')[10]},
                {img : require("../assets/img/gallery/g6.png"), description: this.$t('gallery.description')[11]},
            ]
        }
    },
    methods: {
        overImg(e) {
            e.target.parentElement.classList.add('hovered');
        },
        outImg(e) {
            e.target.parentElement.classList.remove('hovered');
        }
    }
};
</script>

<style lang="sass">
.gallery
    #gallery-next, #gallery-prev
        position: absolute
        z-index: 1
        top: 50%
        transform: translateY(-50%)
        cursor: pointer
        width: 50px
        height: 50px
        @media (max-width: 600px)
            height: 20px
            width: 20px
    #gallery-prev
        left: 0
    #gallery-next
        right: 0
    &__img
        padding: 30px
        .img-wrapper
            position: relative
            width: fit-content
            margin: 0 auto
            transition: .2s all ease-in
            &.hovered .gallery__description
                opacity: 1
            .gallery__description
                position: absolute
                top: 50%
                left: 50%
                transform: translateY(-50%) translateX(-50%)
                color: #fff
                opacity: 0
                text-align: center
                cursor: pointer
                transition: .2s all ease-in-out
            &:hover
                transform: scale(1.05)
                &::before
                    background-color: rgba(0, 0, 0, .45)
                    backdrop-filter: blur(2px)
                    opacity: 1
            &::before
                transition: .2s all ease-in
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: 0
                content: ''
                pointer-events: none
                opacity: 0
        img
            border-radius: 3px
            transition: .25s all ease-in-out
            cursor: pointer
</style>