<template>
    <main-menubar />
    <categoria-crud class="animate__animated animate__faster animate__zoomIn" />
    <scroll-top :threshold="200" />
    <Footer />
</template>

<script>
import MainMenubar from "../header/MainMenuBar.vue";
import CategoriaCrud from "../article/CategoriaCrud.vue";
import Footer from "../footer/Footer.vue";

export default {
    components: {
        MainMenubar,
        CategoriaCrud,
        Footer
    }
};
</script>
