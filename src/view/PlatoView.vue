<template>
    <main-menubar />
    <plato-crud class="animate__animated animate__faster animate__zoomIn" />
    <scroll-top :threshold="200" />
    <Footer />
</template>

<script>
import MainMenubar from "../header/MainMenuBar.vue";
import PlatoCrud from "../article/PlatoCrud.vue";
import Footer from "../footer/Footer.vue";

export default {
    components: {
        MainMenubar,
        PlatoCrud,
        Footer
    }
};
</script>
