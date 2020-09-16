<template>
    <div>
        <ul class="switcher">
            <li v-for="locale in locales" :key="locale" @click="switchLocale($event, locale)">
                <img ref="localeImg" :src="localeImage[locale]" width="25" class="locale-img" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
            localeImage: {
                en: require("../assets/img/ro-lang.png"),
                ru: require("../assets/img/ru-lang.png"),
            },
        };
    },
    methods: {
        switchLocale(e, locale) {
            // window.location.pathname = `/${locale}`;
            const el = e.target;
            el.classList.add('selected');
            setTimeout(() => {
                el.classList.remove('selected');
            }, 500)
            history.pushState({}, "", window.location.origin + `/${locale}`);
            if (this.$i18n.locale !== locale) {
                this.$i18n.locale = locale;
            }
        },
    },
};
</script>

<style lang="scss">
@keyframes selected {
    0% {
        transform: translateX(10%);
    }
    50% {
        transform: translateX(20%);
    }
    75% {
        transform: translateX(5%);
    }
    100% {
        transform: translateX(0);
    }
}

.switcher {
    list-style: none;
    padding-left: 0.75rem;
    margin-bottom: 0;
    li {
        cursor: pointer;
        .locale-img {
            border-radius: 3px;
            height: auto;
            &.selected {
                animation-name: selected;
                animation-duration: .5s;
            }
        }
    }
}
</style>