<template>
    <label class="p-ml-1">{{ inputLabel }}</label>
    <Textarea
        class="p-mt-1 p-mb-1"
        :placeholder="'Introduzca ' + inputLabel.toLowerCase()"
        :autoResize="true"
        rows="5"
        cols="30"
        style="width:100%"
        :modelValue="inputValue"
        @update:modelValue="(value) => $emit('update:inputValue', value)"
    />
</template>

<script>
export default {
    props: {
        inputValue: {
            default: "",
            required: true
        },
        inputLabel: {
            type: String,
            required: true
        }
    }
};
</script>
