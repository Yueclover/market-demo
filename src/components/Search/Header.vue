<template>
  <header>
    <div class="header-container">
      <div class="back" @click="backHome">
        <span class="icon-angle-left"></span>
      </div>
      <div class="search-box">
        <input
          type="text"
          placeholder="搜您感兴趣的"
          autofocus
          v-model="searchInfo"
          @keyup.enter="search(searchInfo)"
        />
        <span class="icon-search" @click="search(searchInfo)"></span>
      </div>
      <div class="cannel">
        <button @click="deleteSearching">取消</button>
      </div>
    </div>
    <div class="searching-results" v-show="searchInfo">
      <ul>
        <li v-for="(item,index) in searchingResults" :key="index" @click="search(item)">{{item}}</li>
      </ul>
    </div>
  </header>
</template>

<script>
import {searchGoodsList} from '@/common/api'
// import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      searchInfo: "",//v-model的值
      searchingResults:['361','361度男鞋'],
    };
  },
  computed:{
  },
  methods: {
    // 返回按钮
    backHome() {
      this.$router.push('/home');
    },
    //取消按钮
    deleteSearching(){
      if(!this.searchInfo) return
      this.searchInfo=''
    },
     // 发送axios 查询
    sendSearch() {
      searchGoodsList({
        name:this.searchInfo
      }).then((res) => {
        this.$bus.$emit('getSearchList',res.data.search.recomends,this.searchInfo)
      });
    },
    // 更新localStorage历史记录,
    // 返回值：新的历史记录
    setHistory(){
      var historyList=[]
       if(localStorage.getItem("historyList")){
        historyList = JSON.parse(localStorage.getItem("historyList"))//从localStorage中获取历史搜索
      }
      historyList.unshift(this.searchInfo)// 将v-model值插入历史搜索中，然后去重
      historyList = Array.from(new Set(historyList))
      localStorage.setItem("historyList",JSON.stringify(historyList))
      return historyList
    },
    // 发送axios
    // 新的历史记录传给search组件
    async search(searchInfo) {
      this.searchInfo = searchInfo
      if (! this.searchInfo ) return
      await this.sendSearch();//发送axios查询商品
      var historyList = this.setHistory()//新的历史记录
      this.$bus.$emit("update",historyList)//把新的历史记录传给search组件
      localStorage.setItem("searchInfo",this.searchInfo)
      await this.$router.push({
        name:'SearchList',
        params:{
          name:this.searchInfo,
        }
      })
    },
  },
  mounted() {
    this.$bus.$on('search',this.search)
    this.sendSearch();
  },
};
</script>

<style scoped>
header {
  height: 2.5rem;
  width: 100vw;
}
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 2.5rem;
  background-color: firebrick;
  color: #fff;
}
header .back {
  padding: 0.3125rem;
  font-size: 1.25rem;
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
header .cannel button {
  padding: 0.3125rem 0.625rem;
  color: #fff;
  font-size: 1rem;
  background-color: transparent;
}
.searching-results{
  position:fixed;
  top:2.5rem;
  left:0;
  height: calc(100vh - 2.5rem);
  width: 100vw;
  background-color: #fff;
}
.searching-results ul{

}
.searching-results ul li{
  padding:.625rem;
  border-bottom:1px solid #ccc;
}
</style>