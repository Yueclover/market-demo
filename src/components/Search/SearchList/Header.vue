<template>
  <header>
    <div class="search-box">
      <span class="icon-search"></span>
      <input type="text" placeholder="搜索当当产品" :value="defaultValue" @focus="backSearchPage" />
    </div> 
  </header>
</template>
<script>
export default {
  name: "Header",
  props: ["defaultValue"],
  methods: {
    backSearchPage() {
      this.$router.push("/search");
    },
  },
};
</script>
<style scoped>
header {
  height: 2.5rem;
  width: 100vw;
}
.search-box {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0.3125rem 0.625rem;
  width: 100%;
  height: 2.5rem;
}
.search-box .icon-search {
  position: absolute;
  top: 0.625rem;
  left: 1rem;
  color: #ccc;
}
.search-box input {
  flex-grow: 1;
  padding: 0.3125rem 1.875rem;
  height: 1.875rem;
  color: #222;
  font-weight: bold;
  background-color: #ebf6f9;
  border-radius: 1.25rem;
  border: none;
  outline: none;
}
</style>