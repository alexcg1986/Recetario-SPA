<template>
    <Dialog
        class="p-col-4 p-lg-3 p-p-0"
        :breakpoints="{ '960px': '75vw' }"
        :contentStyle="{ overflow: 'visible' }"
    >
        <template #header>
            {{ headerMessage }}
        </template>
        <slot />
        <template #footer>
            <Button
                label="Cancelar"
                class="p-button-text p-button-warning"
                icon="pi pi-times"
                @click="$emit('cancel')"
            />
            <Button
                label="Guardar"
                class="p-button-text p-button-success"
                icon="pi pi-check"
                @click="$emit('save')"
                autofocus
            />
        </template>
    </Dialog>
</template>

<script>
export default {
    props: {
        headerMessage: {
            required: true
        }
    }
};
</script>
