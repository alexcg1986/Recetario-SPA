<template>
    <div>
        <DataTable
            :value="resources"
            :paginator="true"
            :rows="5"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            responsiveLayout="stack"
            breakpoint="640px"
            selectionMode="single"
            dataKey="id"
        >
            <Column
                v-for="col in columns"
                :field="col.field"
                :header="col.header"
                :key="col.field"
                :sortable="true"
            />
        </DataTable>
    </div>
</template>

<script>
export default {
    props: {
        resources: {
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    }
};
</script>
