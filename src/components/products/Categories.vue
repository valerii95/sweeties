<template>
    <section class="container p-5 products" id="products">
        <a class="text-secondary" id="categories-title" href="#products" v-if="isCategory">
            <h1 class="text-center mb-4" @click="backToCategories">
                <span class="animated-arrow">←</span> Back
            </h1>
        </a>
        <a class="text-secondary" id="categories-title" v-else>
            <h1 class="text-center mb-4">Choose your dessert</h1>
        </a>
        <div class="categories pt-3">
            <div class="justify-content-center">
                <VueSlickCarousel v-bind="sliderSettings" ref="slick" @reInit="changeDotsView">
                    <Card
                        v-for="(category, idx) in categories"
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
            categories: [
                {
                    img: require("../../assets/img/products/categories/cake.png"),
                    title: "Торты",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                    id: "cake",
                },
                {
                    img: require("../../assets/img/products/categories/bars.png"),
                    title: "Батончики",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                    id: "bars",
                },
                {
                    img: require("../../assets/img/products/categories/ace_cream.png"),
                    title: "Мороженое",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                    id: "ice_cream",
                },
                {
                    img: require("../../assets/img/products/categories/curds.png"),
                    title: "Сырки",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                    id: "curds",
                },
                {
                    img: require("../../assets/img/products/categories/sweets.png"),
                    title: "Конфеты",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                    id: "sweets",
                },
                {
                    img: require("../../assets/img/products/categories/sets.png"),
                    title: "Наборы",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                    id: "sets",
                },
            ],

            products: {
                cake: [
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты1",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты2",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты3",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты4",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты5",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты6",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты7",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты8",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты9",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты10",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты11",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты12",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                ],
                bars: [
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: "Батончики",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "bars",
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: "Батончики",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "bars",
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: "Батончики",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "bars",
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: "Батончики",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "bars",
                    },
                    {
                        img: require("../../assets/img/products/categories/bars.png"),
                        title: "Батончики",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "bars",
                    },
                ],
                ice_cream: [
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое1",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое2",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое3",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                ],
                curds: [
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: "Сырки",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "curds",
                    },
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: "Сырки",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "curds",
                    },
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: "Сырки",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "curds",
                    },
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: "Сырки",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "curds",
                    },
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: "Сырки",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "curds",
                    },
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: "Сырки",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "curds",
                    },
                    {
                        img: require("../../assets/img/products/categories/curds.png"),
                        title: "Сырки",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "curds",
                    },
                ],
                sweets: [
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: "Конфеты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sweets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: "Конфеты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sweets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: "Конфеты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sweets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: "Конфеты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sweets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: "Конфеты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sweets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sweets.png"),
                        title: "Конфеты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sweets",
                    },
                ],
                sets: [
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: "Наборы",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: "Наборы",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: "Наборы",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: "Наборы",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: "Наборы",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sets",
                    },
                    {
                        img: require("../../assets/img/products/categories/sets.png"),
                        title: "Наборы",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "sets",
                    },
                ],
            },

            categoriesBackup: [],

            isCategory: false,

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
                            arrows: true
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            rows: 1,
                            swipe: true,
                            arrows: true
                        },
                    },
                ],
            },
        };
    },
    computed: {},
    methods: {
        swapCategory(category, isCategory) {
            const products = document.querySelector(".products"),
                categoriesTitle = document.querySelector("#categories-title");

            products.classList.add("disabled");

            setTimeout(() => {
                if(window.innerWidth > 1200) {
                    this.sliderSettings.rows = Math.ceil(category.length / 3);
                }

                this.$refs.slick.goTo(0);
                this.categories = category;
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
                this.categoriesBackup = this.categories;

                this.swapCategory(this.products[categoryId], true);
            }
        },

        backToCategories() {
            this.swapCategory(this.categoriesBackup, false);
        },

        showActiveSlide() {
            const customDots = document.querySelector('.customDots');

            

            if(window.innerWidth < 1200) {
                let slides = document.querySelectorAll('.categories .slick-slide');

                let currentSlide = Array.from(slides).indexOf(document.querySelector('.categories .slick-active')) - 2;

                let cardsCounter = Math.round((document.querySelectorAll('.card').length - 2) / 2);
            
                customDots.innerHTML = '';

                for(let i = 0; i < cardsCounter; i++) {
                    customDots.innerHTML += '<li></li>'
                }

                let lis = document.querySelectorAll('.customDots li');

                if(window.innerWidth <= 992) {
                    if(lis[currentSlide + 1]) {
                        lis[currentSlide + 1].innerHTML = '<span class="active"></span>'
                    }
                } else {
                    if(lis[currentSlide]) {
                        lis[currentSlide].innerHTML = '<span class="active"></span>'
                    }
                }

                
            } else {
                customDots.innerHTML = '';
            }
        },

        changeSlide(e) {
            const lis = document.querySelectorAll('.customDots li');

            let targetElement = (Array.from(lis).indexOf(e.target));
            if(!e.target.classList.contains('.customDots')) {
                if(targetElement !== -1) {
                    this.$refs.slick.goTo(targetElement);
                }
            }
        },

        changeDotsView() {
            this.showActiveSlide();
        }
    },
    updated() {
        this.showActiveSlide();        
    },
    mounted() {
        this.showActiveSlide();
    }
};
</script>

<style lang="sass">
@keyframes text-animation
    0%
        transform: translateX(0)
    50%
        transform: translateX(-25%)
    100%
        transform: translateX(0)

#categories-title
    text-decoration: none
    h1
        @media (max-width: 992px)
            font-size: 4rem
    &:hover
        color: #4C261B !important

#categories-title.active
    display: block
    position: sticky
    top: 50px
    z-index: 1
    cursor: pointer
    background: rgba(white, .75)
    @media (max-width: 1200px)
        top: 70px
    .animated-arrow
        display: inline-block
        animation: text-animation 2s infinite
.products
    transition: .5s all ease-in-out
    &.disabled
        opacity: 0
.categories
    position: relative
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
    li
        margin: 0 5px
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