<template>
    <b-row class="justify-content-center">
        <Card 
            v-for="(category, idx) in categories"
            :key="idx"
            :category="category"
        />
    </b-row>
</template>

<script>
import Card from "./Card";

export default {
    components: {
        Card
    },
    data() {
        return {
            categories: [
                {
                    img: require('../../assets/img/products/categories/cake.png'),
                    title: 'Торты',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
                },
                {
                    img: require('../../assets/img/products/categories/bars.png'),
                    title: 'Батончики',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
                },
                {
                    img: require('../../assets/img/products/categories/ace_cream.png'),
                    title: 'Мороженое',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
                },
                {
                    img: require('../../assets/img/products/categories/curds.png'),
                    title: 'Сырки',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
                },
                {
                    img: require('../../assets/img/products/categories/sweets.png'),
                    title: 'Конфеты',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
                },
                {
                    img: require('../../assets/img/products/categories/sets.png'),
                    title: 'Наборы',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
                }
            ]
        }
    }
};
</script>

<style lang="scss">
</style>