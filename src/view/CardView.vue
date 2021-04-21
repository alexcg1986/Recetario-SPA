<template>
    <main-menubar />
    <Cards />
    <scroll-top :threshold="200" />
    <Footer />
</template>

<script>
import MainMenubar from "../header/MainMenuBar.vue";
import Cards from "../article/Cards.vue";
import Footer from "../footer/Footer.vue";

export default {
    components: {
        MainMenubar,
        Cards,
        Footer
    }
};
</script>
