<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
    import Home from "@/views/Home";

    export default {
        components: {
            Home
        },
        mounted() {
            const locale = this.$i18n.locale;
            // window.location.pathname = `/${locale}`;
            if(window.location.pathname === '/ru') {
                this.$i18n.locale = 'ru';
            } else if (window.location.pathname === '/en') {
                this.$i18n.locale = 'en';
            } else {
                history.pushState({}, '', window.location.origin + `/${locale}`);
            }
        }
    };
</script>

<style lang="sass">
    @import '@/assets/styles/global.scss'
</style>
