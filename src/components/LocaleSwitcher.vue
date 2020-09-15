<template>
    <div>
        <ul class="switcher">
            <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
                {{locale}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        }
    },
    methods: {
        switchLocale(locale) {
            if(this.$i18n.locale !== locale) {
                this.$i18n.locale = locale;
            }
        }
    }
}
</script>

<style lang="scss">
    .switcher {
        list-style: none;
        li {
            cursor: pointer;
        }
    }
</style>