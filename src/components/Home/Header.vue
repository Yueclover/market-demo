<template>
  <header>
    <div><img src="@/assets/images/logo.png" alt="" /></div>
    <div class="search-box">
      <input type="text" placeholder="搜您感兴趣的" @click="goSearch()"/>
      <span class="icon-search"></span>
    </div>
    <div>
      <span class="icon-headset_mic"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    goSearch(){
      this.$router.push('/search')
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 2.5rem;
  background-color: firebrick;
}
header div img{
  height: auto;
  width: 4.375rem;
  background-color:  transparent;
}
header .search-box {
  position: relative;
}
header .search-box input[type="text"] {
  padding: 0.125rem 0.625rem;
  padding-right: 1.5rem;
  height: 1.875rem;
  width: 15.625rem;
  outline: none;
  border: none;
  border-radius: 0.9375rem;
}
header .search-box .icon-search {
  margin-top: -10px;
  position: absolute;
  top: 50%;
  right: 0.3125rem;
  color: #666;
  font-size: 1.25rem;
}
header div .icon-headset_mic {
  font-size: 1.5rem;
}
</style>