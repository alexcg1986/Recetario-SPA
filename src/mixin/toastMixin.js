export default {
    methods: {
        successToast(msg) {
            this.$toast.add({
                severity: "success",
                summary: "Éxito",
                detail: "Registro " + msg + " correctamente",
                life: 3000
            });
        },
        errorToast(msg) {
            this.$toast.add({
                severity: "error",
                summary: "Error",
                detail: "No se pudo " + msg + " el registro",
                life: 3000
            });
        },
        warningToast() {
            this.$toast.add({
                severity: "warn",
                summary: "Ops...",
                detail: "Seleccione una fila y vuelva a intentarlo",
                life: 3000
            });
        },
        invalidToast() {
            this.$toast.add({
                severity: "warn",
                summary: "Ops...",
                detail: "Asegúrese de rellenar todos los campos",
                life: 3000
            });
        }
    }
};
