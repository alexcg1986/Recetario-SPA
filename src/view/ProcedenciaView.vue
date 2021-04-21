<template>
    <main-menubar />
    <procedencia-crud
        class="animate__animated animate__faster animate__zoomIn"
    />
    <scroll-top :threshold="200" />
    <Footer />
</template>

<script>
import MainMenubar from "../header/MainMenuBar.vue";
import ProcedenciaCrud from "../article/ProcedenciaCrud.vue";
import Footer from "../footer/Footer.vue";

export default {
    components: {
        MainMenubar,
        ProcedenciaCrud,
        Footer
    }
};
</script>
