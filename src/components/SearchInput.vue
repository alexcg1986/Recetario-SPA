<template>
    <span class="p-fluid p-inputgroup p-mb-3">
        <InputText
            placeholder="Búsqueda por texto"
            type="text"
            :modelValue="inputValue"
            @update:modelValue="(value) => $emit('update:inputValue', value)"
            @input="$emit('clickSearch')"
        />
        <Button icon="pi pi-search" />
    </span>
</template>

<script>
export default {
    props: {
        inputValue: {
            default: "",
            required: true
        }
    }
};
</script>
