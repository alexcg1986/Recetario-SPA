<template>
    <label class="p-ml-1">{{ inputLabel }}</label>
    <InputNumber
        class="p-mt-1 p-mb-1"
        :placeholder="'Introduzca ' + inputLabel.toLowerCase()"
        mode="decimal"
        locale="es-ES"
        :step="1"
        :min="0"
        :max="2000"
        suffix=" kcal/100g"
        style="width:100%"
        :modelValue="inputValue"
        @update:modelValue="(value) => $emit('update:inputValue', value)"
    />
</template>

<script>
export default {
    props: {
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
