<template>
    <div class="faq container px-5 pb-5" id="contacts">
        <h1 class="text-center mb-5 faq__heading mx-auto">{{ $t('faq.heading') }}</h1>
        <form action="mail.php" method="POST">
            <div class="faq__input">
                <input type="tel" id="number-input" class="text-secondary" placeholder="+373 60 246 366">
                <button type="submit" name="submit" class="faq__input-send btn btn-secondary angle-right">{{ $t('faq.button') }}</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        // onSubmit(e) {
        //     e.preventDefault();
        //     let val = document.querySelector('#number-input').value;
        //     const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
        //     if(val.match(regex) && val.length >= 8) {
        //         alert('Thank you for order we will call you, right back!');
        //     } else {
        //         alert('Something went wrong');
        //         document.querySelector('#number-input').value = '';
        //     }
        // },
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
                box-shadow: -2px 4px 15px rgba(0, 0, 0, 0.5)
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