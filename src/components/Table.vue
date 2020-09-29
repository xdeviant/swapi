<template>
  <b-table
    :data="data"
    :columns="columns"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    default-sort="name"
    isPaginated="true"
  >
  </b-table>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      columns: [
        {
          field: "name",
          label: "Name",
          sortable: true,
        },
        {
          field: "height",
          label: "Height",
          sortable: true,
        },
        {
          field: "mass",
          label: "Mass",
          sortable: true,
        },
        {
          field: "gender",
          label: "Gender",
          sortable: true,
        },
        {
          field: "hair_color",
          label: "Hair Color",
          sortable: true,
        },
      ],
    };
  },
};
</script>
