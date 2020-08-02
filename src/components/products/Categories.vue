<template>
    <b-row class="justify-content-center">
        <Card
            v-for="(category, idx) in categories"
            :key="idx"
            :category="category"
            @showCategory="showCategory"
        />
    </b-row>
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
        };
    },
    methods: {
        showCategory(categoryId) {
            this.categories = this.products[categoryId];
        },
    },
};
</script>

<style lang="scss">
</style>