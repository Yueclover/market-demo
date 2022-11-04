<template>
  <div class="search-list">
    <Header :defaultValue="defaultValue"></Header>
    <ul class="sort-pannel">
      <li v-for="(item,index) in sortTypes" :key="index">{{item}}</li>
    </ul>
    <Recomend :isshow="false" :recomend="recomend"></Recomend>
  </div>
</template>

<script>
import Header from '@/components/Search/SearchList/Header.vue'
import Recomend from '@/components/common/Recomend.vue'
export default {
    name:'SearchList',
    data(){
      return {
        sortTypes:['默认','销量','价格','评论量','最新'],
        defaultValue:'',
        recomend:{},
      }
    },
    components:{
      Header,
      Recomend,
    },
    methods:{
      // 自定义事件的处理函数
      getSearchList(value={},defaultValue){
        this.defaultValue = defaultValue
        this.recomend = value
      },
      backSearchPage(){
        this.$router.push('/search')
      }
    },
    created(){
      // this.defaultValue = localStorage.getItem('searchInfo')
    },
    mounted(){
      this.$bus.$on('getSearchList',this.getSearchList)
    },
    beforeDestroy(){
      // localStorage.removeItem('searchInfo')
    }
}
</script>

<style scoped>
.search-list{
  height: 100vh;
  overflow: auto;
}
.search-list::-webkit-scrollbar{
  display: none;
}
header{
  height: 2.5rem;
  width: 100vw;
}
.search-box{
  position: fixed;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  padding:.3125rem .625rem;
  width:100%;
  height: 2.5rem;
}
.search-box .icon-search{
  position:absolute;
  top:.625rem;
  left: 1rem;
  color:#ccc;
}
.search-box input{
  flex-grow: 1;
  padding:.3125rem 1.875rem;
  height:1.875rem;
  color: #222;
  font-weight: bold;
  background-color: #EBF6F9;
  border-radius: 1.25rem;
  border:none;
  outline: none;
}
.sort-pannel{
  margin-top:.625rem;
  display:flex ;
  justify-content: space-around;
  align-items: center;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
}
.sort-pannel li{
  padding:.3125rem .625rem;
}
</style>