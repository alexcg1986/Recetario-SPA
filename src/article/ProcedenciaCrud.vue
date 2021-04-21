<template>
    <Panel v-model:header="resourceHeader" class="p-col-12 p-lg-6 p-mx-auto">
        <crud-menu-bar
            @clickCreate="this.create()"
            @clickEdit="this.edit()"
            @clickDelete="this.delete()"
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
import DeleteDialog from "@/components/DeleteDialog.vue";
import toastMixin from "@/mixin/toastMixin.js";
import crudMixin from "@/mixin/crudMixin.js";
import miscMixin from "@/mixin/miscMixin.js";
import validationMixin from "@/mixin/validationMixin.js";

export default {
    mixins: [toastMixin, crudMixin, miscMixin, validationMixin],
    components: {
        GenericDataTable,
        CrudMenuBar,
        GenericDialog,
        TextInput,
        DeleteDialog
    },
    data() {
        return {
            resources: null,
            resourceName: "procedencia",
            resourceHeader: "Procedencia",
            headerMessage: null,
            resource: {
                id: null,
                nombre: null
            },
            selectedResource: {
                id: null
            },
            displayGenericDialog: false,
            displayDeleteDialog: false
        };
    },
    created() {
        this.genericCrudService = new GenericCrudService();
        this.columns = [
            { field: "id", header: "Id" },
            { field: "nombre", header: "Nombre" }
        ];
    },
    mounted() {
        this.getAll();
    }
};
</script>
