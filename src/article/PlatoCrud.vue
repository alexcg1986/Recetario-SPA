<template>
    <Panel v-model:header="resourceHeader" class="p-col-12 p-lg-9 p-mx-auto">
        <crud-menu-bar
            @clickCreate="this.create()"
            @clickEdit="this.edit()"
            @clickDelete="this.delete()"
        />
        <div class="p-d-flex p-d-row p-jc-between p-ai-center">
            <div class="p-col-6 p-pl-0">
                <dropdown-input
                    :options="this.dropdownOneResources"
                    inputLabel="Filtro Categoría"
                    :inputValue="this.selectedDropdownOneFilterResource"
                    @update:inputValue="
                        (value) => {
                            this.selectedDropdownOneFilterResource = value;
                            this.getFilteredResources();
                        }
                    "
                >
                    <Button
                        class="p-button-sm p-button-text"
                        icon="pi pi-refresh"
                        @click="
                            {
                                this.selectedDropdownOneFilterResource = 0;
                                this.getResourcesConditionally();
                            }
                        "
                    />
                </dropdown-input>
            </div>
            <div class="p-col-6 p-pr-0">
                <dropdown-input
                    :options="this.dropdownTwoResources"
                    inputLabel="Filtro Procedencia"
                    :inputValue="this.selectedDropdownTwoFilterResource"
                    @update:inputValue="
                        (value) => {
                            this.selectedDropdownTwoFilterResource = value;
                            this.getFilteredResources();
                        }
                    "
                >
                    <Button
                        class="p-button-sm p-button-text"
                        icon="pi pi-refresh"
                        @click="
                            {
                                this.selectedDropdownTwoFilterResource = 0;
                                this.getResourcesConditionally();
                            }
                        "
                    />
                </dropdown-input>
            </div>
        </div>
        <search-input
            v-model:inputValue="this.searchString"
            @clickSearch="this.getResourcesConditionally()"
        />
        <Toast position="top-center" />
        <generic-data-table
            :columns="this.columns"
            :resources="this.resources"
            v-model:selection="this.selectedResource"
        />
        <generic-dialog
            :headerMessage="this.headerMessage"
            @cancel="this.cancel()"
            @save="this.save()"
            v-model:visible="this.displayGenericDialog"
        >
            <text-input
                inputLabel="Nombre"
                v-model:inputValue="this.resource.nombre"
            />
            <textarea-input
                inputLabel="Descripción"
                v-model:inputValue="this.resource.descripcion"
            />
            <number-input
                inputLabel="Calorías"
                v-model:inputValue="this.resource.calorias"
            />
            <dropdown-input
                :options="this.dropdownOneResources"
                inputLabel="Categoría"
                v-model:inputValue="this.resource.categoria.id"
            />
            <dropdown-input
                :options="this.dropdownTwoResources"
                inputLabel="Procedencia"
                v-model:inputValue="this.resource.procedencia.id"
            />
        </generic-dialog>
        <delete-dialog
            @cancel="this.cancel()"
            @remove="this.remove()"
            v-model:visible="this.displayDeleteDialog"
        />
    </Panel>
</template>

<script>
import GenericCrudService from "@/service/GenericCrudService.js";
import GenericDataTable from "@/components/GenericDataTable.vue";
import CrudMenuBar from "@/components/CrudMenuBar.vue";
import GenericDialog from "@/components/GenericDialog.vue";
import TextInput from "@/components/TextInput.vue";
import SearchInput from "@/components/SearchInput.vue";
import TextareaInput from "@/components/TextareaInput.vue";
import NumberInput from "@/components/NumberInput.vue";
import DropdownInput from "@/components/DropdownInput.vue";
import DeleteDialog from "@/components/DeleteDialog.vue";
import toastMixin from "@/mixin/toastMixin.js";
import crudMixin from "@/mixin/crudMixin.js";
import miscMixinExtra from "@/mixin/miscMixinExtra.js";
import validationMixin from "@/mixin/validationMixin.js";

export default {
    mixins: [toastMixin, crudMixin, miscMixinExtra, validationMixin],
    components: {
        GenericDataTable,
        CrudMenuBar,
        GenericDialog,
        TextInput,
        SearchInput,
        TextareaInput,
        NumberInput,
        DropdownInput,
        DeleteDialog
    },
    data() {
        return {
            resources: null,
            dropdownOneResources: null,
            dropdrownTwoResources: null,
            selectedDropdownOneFilterResource: 0,
            selectedDropdownTwoFilterResource: 0,
            searchString: "",
            resourceName: "plato",
            dropdownOneResourceName: "categoria",
            dropdownTwoResourceName: "procedencia",
            resourceHeader: "Plato",
            headerMessage: null,
            resource: {
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
            },
            selectedResource: {
                id: null
            },
            parameters: {
                categoriaId: null,
                procedenciaId: null,
                searchString: null
            },
            displayGenericDialog: false,
            displayDeleteDialog: false
        };
    },
    created() {
        this.genericCrudService = new GenericCrudService();
        this.columns = [
            { field: "id", header: "Id" },
            { field: "nombre", header: "Nombre" },
            { field: "descripcion", header: "Descripción" },
            { field: "calorias", header: "Calorías (kcal/100g)" },
            { field: "categoria.nombre", header: "Categoría" },
            { field: "procedencia.nombre", header: "Procedencia" }
        ];
    },
    mounted() {
        this.getDropdownOneResources();
        this.getDropdownTwoResources();
        this.getAll();
    }
};
</script>
