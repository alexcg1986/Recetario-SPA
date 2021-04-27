<template>
    <div class="p-grid p-jc-around">
        <Card
            v-for="resource in resources"
            :key="resource.id"
            class="p-offset-lg-1 p-col-10 p-md-5 p-lg-3 p-mt-3 p-mb-2 animate__animated animate__faster animate__zoomIn"
        >
            <template #header>
                <img
                    :src="
                        require(`@/assets/${resource.nombre.toLowerCase()}.jpg`)
                    "
                    style="height:100%; width:100%"
                />
            </template>
            <template #title>
                {{ resource.nombre.toUpperCase() }}
            </template>
            <template #subtitle>
                {{ resource.descripcion }}
                <ul>
                    <li>Calorías: {{ resource.calorias }} kcal/100g</li>
                    <li>Categoría: {{ resource.categoria.nombre }}</li>
                    <li>Procedencia: {{ resource.procedencia.nombre }}</li>
                </ul>
            </template>
        </Card>
    </div>
</template>

<script>
import GenericCrudService from "@/service/GenericCrudService.js";
import crudMixin from "@/mixin/crudMixin.js";

export default {
    mixins: [crudMixin],
    data() {
        return {
            resourceName: "plato",
            resources: null
        };
    },
    created() {
        this.genericCrudService = new GenericCrudService();
    },
    mounted() {
        this.getAll();
    }
};
</script>
