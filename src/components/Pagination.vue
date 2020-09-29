<template>
  <b-pagination
    :current="current"
    :total="count"
    :range-before="3"
    :range-after="1"
    :rounded="true"
    :per-page="10"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page"
    @change="getOtherPeople"
  >
  </b-pagination>
</template>

<script>
export default {
  props: {
    paginationData: Object,
  },
  data() {
    return {
      count: null,
      next: null,
      previous: null,
      current: 1,
    };
  },
  methods: {
    getOtherPeople(page) {
      this.current = page;
      this.$store.dispatch("getPeople", page);
    },
  },
  watch: {
    paginationData: {
      deep: true,
      handler() {
        this.count = this.paginationData.count;
        this.next = this.paginationData.next;
        this.previous = this.paginationData.previous;
      },
    },
  },
};
</script>
