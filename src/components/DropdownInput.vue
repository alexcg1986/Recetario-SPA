<template>
    <div class="p-d-flex p-d-row p-jc-between p-ai-center ">
        <label class="p-ml-1">{{ inputLabel }}</label>
        <slot />
    </div>
    <Dropdown
        class="p-mt-1 p-mb-1 "
        :placeholder="'Seleccione ' + inputLabel.toLowerCase()"
        :options="options"
        optionLabel="nombre"
        optionValue="id"
        style="width:100%"
        :modelValue="inputValue"
        @update:modelValue="(value) => $emit('update:inputValue', value)"
    />
</template>

<script>
export default {
    props: {
        options: {
            type: Array
        },
        inputValue: {
            default: 0,
            required: true
        },
        inputLabel: {
            type: String,
            required: true
        }
    }
};
</script>
