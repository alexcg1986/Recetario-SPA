<template>
    <Menubar :model="items" class="p-mb-2" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: "Añadir",
                    icon: "pi pi-fw pi-plus",
                    command: () => this.$emit("clickCreate")
                },
                {
                    label: "Editar",
                    icon: "pi pi-fw pi-pencil",
                    command: () => this.$emit("clickEdit")
                },
                {
                    label: "Borrar",
                    icon: "pi pi-fw pi-trash",
                    command: () => this.$emit("clickDelete")
                }
            ]
        };
    }
};
</script>
