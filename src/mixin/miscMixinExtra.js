export default {
    methods: {
        getDropdownOneResources() {
            this.genericCrudService
                .getAll(this.dropdownOneResourceName)
                .then(
                    async (res) => await (this.dropdownOneResources = res.data)
                );
        },
        getDropdownTwoResources() {
            this.genericCrudService
                .getAll(this.dropdownTwoResourceName)
                .then(
                    async (res) => await (this.dropdownTwoResources = res.data)
                );
        },
        getFilteredResources() {
            this.parameters.categoriaId = this.selectedDropdownOneFilterResource;
            this.parameters.procedenciaId = this.selectedDropdownTwoFilterResource;
            this.parameters.searchString = this.searchString.trim();
            this.genericCrudService
                .getAllFiltered(this.resourceName, this.parameters)
                .then(async (res) => await (this.resources = res.data));
        },
        getResourcesConditionally() {
            this.selectedDropdownOneFilterResource === 0 &&
            this.selectedDropdownTwoFilterResource === 0 &&
            !this.searchString.length
                ? this.getAll()
                : this.getFilteredResources();
        },
        assignValues() {
            this.resource.id = this.selectedResource.id;
            this.resource.nombre = this.selectedResource.nombre;
            this.resource.descripcion = this.selectedResource.descripcion;
            this.resource.calorias = this.selectedResource.calorias;
            this.resource.categoria = this.selectedResource.categoria;
            this.resource.procedencia = this.selectedResource.procedencia;
        },
        cancel() {
            this.resource = {
                id: null,
                nombre: null,
                descripcion: null,
                calorias: null,
                categoria: {
                    id: null,
                    nombre: null
                },
                procedencia: {
                    id: null,
                    nombre: null
                }
            };
            this.selectedResource = {
                id: null
            };
            this.displayGenericDialog = false;
            this.displayDeleteDialog = false;
            this.getResourcesConditionally();
        }
    }
};
