<template>
  <div class="home">
    <div class="table">
      <Input />
      <Table :data="getData" />
      <Pagination :paginationData="getPagination" />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

export default {
  components: {
    Pagination,
    Table,
    Input,
  },
  computed: {
    getData() {
      return this.$store.state.people;
    },
    getPagination() {
      return this.$store.state.pagination;
    },
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      this.$store.dispatch("getPeople");
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
