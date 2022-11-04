<template>
<!-- 历史记录或热门推荐 -->
  <div class="search-info">
    <div class="search-title">
      <span class="title"><slot></slot></span>
      <span :class="iconClass" @click="iEvent"></span>
    </div>
    <ul class="search-list">
      <li v-for="(item, index) in searchInfo" :key="index" @click="search(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchInfo",
  props: ["searchInfo", "iconClass","iconEvent"],
  methods:{
    search(item){
      this.$bus.$emit('search',item)
    },
    iEvent(){
      this.iconEvent()
    }
  },

};
</script>

<style scoped>
.search-info{
   /* padding:1.25rem .625rem; */
    margin-top:.625rem;
}
.search-title {
  display: flex;
  justify-content: space-between;
  height: 1.875rem;
}
.search-title span {
  font-size: 20px;
  line-height: 1.875rem;
  color:red;
}
.search-title span.title {
  color:#222;
  font-weight: bold;
  font-size: 1.125rem;
}
.search-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  max-height: 12.5rem;
  overflow: auto;
}
.search-list li {
  flex: none;
  padding: 0.3125rem 0.625rem;
  margin: 0.625rem 0.3125rem;
  border-radius: 0.875rem;
  color: #333;
  font-size: 0.875rem;
  background-color: #eee;
}
</style>