<template>
  <b-input
    class="search-input"
    placeholder="Введите название персонажа"
    @input="changeInput"
  >
  </b-input>
</template>

<script>
export default {
  data() {
    return {
      timeout: null,
    };
  },
  methods: {
    changeInput(value) {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(async () => {
        this.$store.dispatch("searchPeople", value);
      }, 300);
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss">
.search-input {
  width: 75%;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
