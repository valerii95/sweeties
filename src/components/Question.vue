<template>
    <div class="faq container px-5" id="contacts">
        <h1 class="text-center mb-5 faq__heading mx-auto">Have Qestion in mind? Let us help you</h1>
        <form @submit="onSubmit($event)">
            <div class="faq__input">
                <input type="number" id="number-input" class="text-secondary">
                <button type="submit" name="submit" class="faq__input-send btn btn-secondary angle-right">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        onSubmit(e) {
          e.preventDefault();
          alert(document.querySelector('#number-input').value);
          document.querySelector('#number-input').value = '';
      }
    }
};
</script>

<style lang="sass">
    .faq
        &__heading
            max-width: 800px
            @media (max-width: 1000px)
                font-size: 4rem
        &__input
            max-width: 1000px
            margin: 0 auto
            position: relative
            &-send.btn
                position: absolute
                right: 20px
                height: 45px
                box-sizing: border-box
                padding: 0
                padding-left: 40px
                padding-right: 40px
                top: 50%
                transform: translateY(-50%)
                @media (max-width: 1000px)
                    height: 35px
                    font-size: 1rem
                    padding: 0 20px 0 20px
            input
                width: 100%
                border-radius: 30px
                box-shadow: -2px 4px 15px rgba(0, 0, 0, 0.1)
                appearance: none
                outline: none
                border: none
                height: 65px
                padding: 10px 20px
                box-sizing: border-box
                font-size: 1.5rem
                font-weight: 900
                font-family: 'Montserrat'
                @media (max-width: 1000px)
                    height: 50px
                    font-size: 1rem
</style>