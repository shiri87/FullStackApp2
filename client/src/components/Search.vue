<template>
  <div>
    <panel title="Search">
      <b-form-input v-model="search"></b-form-input>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel.vue";
export default {
  name: "Search",
  components: { Panel },
  data() {
    return { search: "" };
  },
  watch: {
    search(value) {
      //current route
      const route = { name: "browse" };
      if (this.search !== "") {
        route.query = {
          search: value,
        };
      }
      this.$router.push(route);
    },
    //addrass bar --> search bar
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style>
</style>