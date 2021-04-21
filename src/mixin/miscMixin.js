export default {
    methods: {
        assignValues() {
            this.resource.id = this.selectedResource.id;
            this.resource.nombre = this.selectedResource.nombre;
        },
        cancel() {
            this.resource = {
                id: null,
                nombre: null
            };
            this.selectedResource = {
                id: null,
                nombre: null
            };
            this.displayGenericDialog = false;
            this.displayDeleteDialog = false;
            this.getAll();
        }
    }
};
