<template>
    <div class="container gallery" id="gallery">
        <h1 class="text-center mb-4">Gallery</h1>
        <div class="justify-content-center position-relative">
            <!-- <button id="gallery-prev"><img :src="require('../assets/img/gallery/prev-arrow.png')" alt=""></button> -->
            <VueSlickCarousel v-bind="sliderSettings">
                <template v-slot:prevArrow>
                    <img :src="require('../assets/img/gallery/prev-arrow.png')" alt="" id="gallery-prev">
                </template>
                <div v-for="(image, idx) in gallery" :key="idx" class="gallery__img">
                    <img class="mx-auto d-block img-fluid" :src="image" />
                </div>
                <template v-slot:nextArrow>
                    <img :src="require('../assets/img/gallery/next-arrow.png')" alt="" id="gallery-next">
                </template>
            </VueSlickCarousel>
        </div>
    </div>
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
            gallery: [
                require("../assets/img/gallery/g1.png"),
                require("../assets/img/gallery/g2.png"),
                require("../assets/img/gallery/g3.png"),
                require("../assets/img/gallery/g4.png"),
                require("../assets/img/gallery/g5.png"),
                require("../assets/img/gallery/g6.png"),
                require("../assets/img/gallery/g1.png"),
                require("../assets/img/gallery/g2.png"),
                require("../assets/img/gallery/g3.png"),
                require("../assets/img/gallery/g4.png"),
                require("../assets/img/gallery/g5.png"),
                require("../assets/img/gallery/g6.png"),
            ],
            sliderSettings: {
                infinite: true,
                slidesToShow: 3,
                speed: 500,
                rows: 2,
                slidesPerRow: 1,
                arrows: true,
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
};
</script>

<style lang="sass">
.gallery
    #gallery-next, #gallery-prev
        position: absolute
        z-index: 5
        top: 50%
        transform: translateY(-50%)
        cursor: pointer
    #gallery-prev
        left: 0
    #gallery-next
        right: 0
    &__img
        padding: 30px
        img
            border-radius: 3px
            transition: .25s all ease-in-out
            cursor: pointer
            &:hover
                transform: scale(1.05)
</style>