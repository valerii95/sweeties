<template>
    <section class="container px-5 pb-4 products" id="products">
        <a class="text-secondary" id="categories-title" href="#products" v-if="isCategory">
            <h2 class="text-center mb-2" @click="backToCategories">
                <span class="animated-arrow">←</span>
                {{ $t('desserts.back') }}
            </h2>
        </a>
        <a class="text-secondary" id="categories-title" v-else>
            <h2 class="text-center mb-2">{{ $t('desserts.heading') }}</h2>
        </a>
        <div class="categories pt-3">
            <div class="justify-content-center">
                <VueSlickCarousel v-bind="sliderSettings" ref="slick" @reInit="changeDotsView">
                    <Card
                        v-for="(category, idx) in products[selectedCategory]"
                        :key="idx"
                        :category="category"
                        @showCategory="showCategory"
                        :isCategory="isCategory"
                    />
                </VueSlickCarousel>
                <ul class="customDots" @click="changeSlide($event)"></ul>
            </div>
        </div>
    </section>
</template>

<script>
import Card from "./Card";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    components: {
        Card,
        VueSlickCarousel,
    },
    data() {
        return {
            isCategory: false,

            selectedCategory: "default",

            sliderSettings: {
                infinite: true,
                slidesToShow: 3,
                speed: 500,
                rows: 2,
                slidesPerRow: 1,
                arrows: false,
                dots: false,
                swipe: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            rows: 1,
                            swipe: true,
                            arrows: true,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            rows: 1,
                            swipe: true,
                            arrows: true,
                        },
                    },
                ],
            },
        };
    },
    computed: {
        products() {
            return {
                default: [
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: this.$t("categories")[0].title,
                        text: this.$t("categories")[0].text,
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: this.$t("categories")[1].title,
                        text: this.$t("categories")[1].text,
                        id: "bars",
                    },
                    {
                        img: require("../../assets/img/products/categories/ice_cream.png"),
                        title: this.$t("categories")[2].title,
                        text: this.$t("categories")[2].text,
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: this.$t("categories")[3].title,
                        text: this.$t("categories")[3].text,
                        id: "curds",
                    },
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: this.$t("categories")[4].title,
                        text: this.$t("categories")[4].text,
                        id: "sweets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: this.$t("categories")[5].title,
                        text: this.$t("categories")[5].text,
                        id: "sets",
                    },
                ],
                cake: [
                    {
                        img: require("../../assets/img/products/products/cakes/cake1.png"),
                        title: this.$t("cakes")[0].title,
                        text: this.$t("cakes")[0].text,
                        id: "cake1",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/products/cakes/cake2.png"),
                        title: this.$t("cakes")[1].title,
                        text: this.$t("cakes")[1].text,
                        id: "cake2",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/products/cakes/cake3.png"),
                        title: this.$t("cakes")[2].title,
                        text: this.$t("cakes")[2].text,
                        id: "cake3",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/products/cakes/cake4.png"),
                        title: this.$t("cakes")[3].title,
                        text: this.$t("cakes")[3].text,
                        id: "cake4",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/products/cakes/cake5.png"),
                        title: this.$t("cakes")[4].title,
                        text: this.$t("cakes")[4].text,
                        id: "cake5",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/products/cakes/cake6.png"),
                        title: this.$t("cakes")[5].title,
                        text: this.$t("cakes")[5].text,
                        id: "cake6",
                        price: 100,
                        quantity: 1,
                    },
                ],
                bars: [
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: this.$t("bars")[0].title,
                        text: this.$t("bars")[0].text,
                        id: "bars1",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: this.$t("bars")[1].title,
                        text: this.$t("bars")[1].text,
                        id: "bars2",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: this.$t("bars")[2].title,
                        text: this.$t("bars")[2].text,
                        id: "bars3",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: this.$t("bars")[3].title,
                        text: this.$t("bars")[3].text,
                        id: "bars4",
                        price: 100,
                        quantity: 1,
                    },
                ],
                ice_cream: [
                    {
                        img: require("../../assets/img/products/categories/ice_cream.png"),
                        title: this.$t("ice_cream")[0].title,
                        text: this.$t("ice_cream")[0].text,
                        id: "ice_cream1",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/categories/ice_cream.png"),
                        title: this.$t("ice_cream")[1].title,
                        text: this.$t("ice_cream")[1].text,
                        id: "ice_cream2",
                        price: 100,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/categories/ice_cream.png"),
                        title: this.$t("ice_cream")[2].title,
                        text: this.$t("ice_cream")[2].text,
                        id: "ice_cream3",
                        price: 100,
                        quantity: 1,
                    },
                ],
                curds: [
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: this.$t("curds")[0].title,
                        text: this.$t("curds")[0].text,
                        id: "curds1",
                        price: 150,
                        quantity: 1,
                    },
                ],
                sweets: [
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: this.$t("sweets")[0].title,
                        text: this.$t("sweets")[0].text,
                        id: "sweets1",
                        price: 150,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: this.$t("sweets")[1].title,
                        text: this.$t("sweets")[1].text,
                        id: "sweets2",
                        price: 150,
                        quantity: 1,
                    },
                ],
                sets: [
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: this.$t("sets")[0].title,
                        text: this.$t("sets")[0].text,
                        id: "sets1",
                        price: 150,
                        quantity: 1,
                    },
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: this.$t("sets")[0].title,
                        text: this.$t("sets")[0].text,
                        id: "sets2",
                        price: 150,
                        quantity: 1,
                    }
                ],
            };
        },
    },
    methods: {
        swapCategory(category, isCategory) {
            const products = document.querySelector(".products"),
                categoriesTitle = document.querySelector("#categories-title");

            products.classList.add("disabled");

            setTimeout(() => {
                if (window.innerWidth > 1200) {
                    this.sliderSettings.rows = Math.ceil(category.length / 3);
                }

                this.$refs.slick.goTo(0);
                this.isCategory = isCategory;
                products.classList.remove("disabled");

                if (this.isCategory) {
                    categoriesTitle.classList.add("active");
                } else {
                    categoriesTitle.classList.remove("active");
                }
            }, 500);
        },

        showCategory(categoryId) {
            if (!this.isCategory) {
                setTimeout(() => {
                    this.selectedCategory = categoryId;
                }, 500);
                this.swapCategory(this.products[categoryId], true);
            }
        },

        backToCategories() {
            setTimeout(() => {
                this.selectedCategory = "default";
            }, 500);
            this.swapCategory(this.products.default, false);
        },

        showActiveSlide() {
            const customDots = document.querySelector(".customDots");

            if (window.innerWidth < 1200) {
                let slides = document.querySelectorAll(
                    ".categories .slick-slide"
                );

                let currentSlide =
                    Array.from(slides).indexOf(
                        document.querySelector(".categories .slick-active")
                    ) - 2;

                let cardsCounter = Math.round(
                    (document.querySelectorAll(".card").length - 2) / 2
                );

                customDots.innerHTML = "";

                for (let i = 0; i < cardsCounter; i++) {
                    customDots.innerHTML += "<li></li>";
                }

                let lis = document.querySelectorAll(".customDots li");

                if (window.innerWidth <= 992) {
                    if (lis[currentSlide + 1]) {
                        lis[currentSlide + 1].innerHTML =
                            '<span class="active"></span>';
                    }
                } else {
                    if (lis[currentSlide]) {
                        lis[currentSlide].innerHTML =
                            '<span class="active"></span>';
                    }
                }
            } else {
                customDots.innerHTML = "";
            }
        },

        changeSlide(e) {
            const lis = document.querySelectorAll(".customDots li");

            let targetElement = Array.from(lis).indexOf(e.target);
            if (!e.target.classList.contains(".customDots")) {
                if (targetElement !== -1) {
                    this.$refs.slick.goTo(targetElement);
                }
            }
        },

        changeDotsView() {
            this.showActiveSlide();
        },
    },
    updated() {
        this.showActiveSlide();
    },
    mounted() {
        this.showActiveSlide();
    },
};
</script>

<style lang="sass">
@keyframes arrow-animation
    0%
        transform: translateX(0)
    50%
        transform: translateX(-25%)
    100%
        transform: translateX(0)

#categories-title
    text-decoration: none
    // h1
    //     @media (max-width: 992px)
    //         font-size: 6rem
    &:hover
        color: #4C261B !important

.animated-arrow
    display: inline-block
    animation: arrow-animation 2s infinite
#categories-title.active
    display: block
    position: sticky
    top: 50px
    z-index: 1
    cursor: pointer
    background: rgba(white, .75)
    @media (max-width: 1200px)
        top: 70px
    
.products
    transition: .5s all ease-in-out
    &.disabled
        opacity: 0
.categories
    position: relative
    .slick-slide div:first-child
        margin: 0 1px
    .back-btn
        position: absolute
        top: 0
        left: 0
        z-index: 1
        transform: translateY(calc(-100% - 20px))

.customDots
    list-style: none
    display: flex
    justify-content: center
    flex-wrap: wrap
    padding: 0
    li
        margin: 0 5px 5px 5px
        cursor: pointer
        width: 10px
        height: 10px
        border: 1px solid #4C261B
        border-radius: 50%
        position: relative
        & .active
            display: inline-block
            cursor: default
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            background-color: #4C261B
</style>