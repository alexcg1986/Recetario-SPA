<template>
    <Dialog
        :breakpoints="{ '960px': '75vw' }"
        :contentStyle="{ overflow: 'visible' }"
    >
        <template #header>
            ¡Atención!
        </template>
        <div
            class="confirmation-content p-d-flex p-flex-row p-jc-between p-ai-start"
        >
            <i
                class="pi pi-exclamation-triangle p-mr-3"
                style="font-size: 2rem"
            />
            <span>¿Desea eliminar el registro?</span>
        </div>
        <template #footer>
            <Button
                label="No"
                class="p-button-text p-button-success"
                icon="pi pi-times"
                @click="$emit('cancel')"
            />
            <Button
                label="Sí"
                class="p-button-text p-button-danger"
                icon="pi pi-check"
                @click="$emit('remove')"
                autofocus
            />
        </template>
    </Dialog>
</template>
