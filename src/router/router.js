import { createRouter, createWebHistory } from "vue-router";
import CardView from "@/view/CardView.vue";
import PlatoView from "@/view/PlatoView.vue";
import CategoriaView from "@/view/CategoriaView.vue";
import ProcedenciaView from "@/view/ProcedenciaView.vue";

const routes = [
    { path: "/", component: CardView },
    { path: "/platos", component: PlatoView },
    { path: "/categorias", component: CategoriaView },
    { path: "/procedencias", component: ProcedenciaView }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
