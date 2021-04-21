<template>
    <Menubar :model="items" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: "Inicio",
                    to: "/"
                },
                {
                    label: "Platos",
                    to: "/platos"
                },
                {
                    label: "Categorías",
                    to: "/categorias"
                },
                {
                    label: "Procedencias",
                    to: "/procedencias"
                }
            ]
        };
    }
};
</script>
