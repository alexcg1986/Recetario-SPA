export default {
    methods: {
        getAll() {
            this.genericCrudService
                .getAll(this.resourceName)
                .then(async (res) => await (this.resources = res.data));
        },
        create() {
            this.headerMessage = "Añadir " + this.resourceHeader.toLowerCase();
            this.displayGenericDialog = true;
        },
        edit() {
            if (this.selectedResource.id != null) {
                this.assignValues();
                this.headerMessage =
                    "Editar " + this.resourceHeader.toLowerCase();
                this.displayGenericDialog = true;
            } else this.warningToast();
        },
        delete() {
            if (this.selectedResource.id != null) {
                this.displayDeleteDialog = true;
            } else this.warningToast();
        },
        save() {
            if (this.checkValues(this.resource)) {
                this.genericCrudService
                    .post(this.resourceName, this.resource)
                    .then(async (res) => {
                        if ((await res.status) === 200)
                            this.successToast("guardado");
                        else this.errorToast("guardar");
                        this.cancel();
                    });
            } else this.invalidToast();
        },
        remove() {
            this.genericCrudService
                .delete(this.resourceName, this.selectedResource.id)
                .then(async (res) => {
                    if ((await res.status) === 200)
                        this.successToast("eliminado");
                    else this.errorToast("eliminar");
                    this.cancel();
                });
        }
    }
};
