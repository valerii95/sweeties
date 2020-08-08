<template>
    <section class="container p-5 products" id="products">
        <h1 class="text-center mb-4" id="categories-title" v-if="isCategory" @click="backToCategories"><span class="animated-arrow">←</span> Back to categories !</h1>
        <h1 class="text-center mb-4" id="categories-title" v-else>Choose your dessert !</h1>
        <div class="categories pt-3">
            <b-row class="justify-content-center">
                <Card
                    v-for="(category, idx) in categories"
                    :key="idx"
                    :category="category"
                    @showCategory="showCategory"
                />
            </b-row>
        </div>
    </section>
</template>

<script>
import Card from "./Card";

export default {
    components: {
        Card,
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
                        title: "Торты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "cake",
                    },
                    {
                        img: require("../../assets/img/products/categories/cake.png"),
                        title: "Торты",
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
                        title: "Мороженое",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое",
                        text:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
                        id: "ice_cream",
                    },
                    {
                        img: require("../../assets/img/products/categories/ace_cream.png"),
                        title: "Мороженое",
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
        };
    },
    computed: {
        
    },
    methods: {
        swapCategory(category, isCategory) {
            const products = document.querySelector(".products"),
                categoriesTitle = document.querySelector("#categories-title");

            products.classList.add("disabled");

            setTimeout(() => {
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
    },
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

#categories-title.active
    position: sticky
    top: 50px
    z-index: 1
    cursor: pointer
    background: rgba(white, .75)
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
</style>