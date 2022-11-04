<template>
  <div class="list">
    <Header :defaultValue="defaultValue"></Header>
    <div class="list-container">
      <div class="first-menu-container">
        <ul class="first-menu">
          <li
            v-for="(item, index) in firstMenu"
            :key="index"
            :class="currentIndex === index ? 'selected' : ''"
            @click="getSecondMenu(item, index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="second-menu-container">
        <div class="second-menu">
          <ul v-for="(item, index) in secondMenu" :key="index" :class="item.id">
            <h3>{{ item.type }}</h3>
            <div class="lis-container">
              <li v-for="(child, index) in item.goodsList" :key="index" @click="getSearchList(child.name)">
                <img :src="child.imgUrl" alt="" />
                <span>{{ child.name }}</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    这是分类
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import {searchSecondMenu,searchList} from '@/common/api'
import Header from "@/components/Search/SearchList/Header.vue";
import Tabbar from "@/components/common/Tabbar.vue";
export default {
  name: "List",
  data() {
    return {
      defaultValue: "",
      currentIndex: 0,
      firstMenu: [
        "热搜推荐",
        "精品好店",
        "图书",
        "教辅",
        "文具",
        "热搜推荐",
        "精品好店",
        "图书",
        "教辅",
        "文具",
        "热搜推荐",
        "精品好店",
        "图书",
        "教辅",
        "文具",
      ],
      secondMenu:[],
    };
  },
  components: {
    Header,
    Tabbar,
  },
  methods: {
    // axios:获取二级菜单
    sendAxios(value){
      searchSecondMenu({
        name:value
      }).then(res=>{
        this.secondMenu = res.data.secondMenu
      })
    },
    // 点击一级菜单，发送axios 获取二级菜单
    getSecondMenu(item, index) {
      this.currentIndex = index;
      this.sendAxios(item)
    },
    // 点击二级菜单，发送axios查询
    getSearchList(name){
      searchList({
        name,
      }).then(res=>{
         this.$bus.$emit('getSearchList',(res.data.search.recomends,name))
         this.$router.push('/search/searchlist')
      })
    },
  },
  created(){
    this.sendAxios('热搜推荐')
  }
};
</script>

<style scoped>
.list {
  height: 100vh;
  width: 100vw;
  overflow: auto;
}
.list::-webkit-scrollbar {
  display: none;
}
.list-container {
  display: flex;
  justify-content: flex-start;
  height: calc(100vh - 5.625rem);
  width:100vw;
  border-top: 1px solid #ccc;
  background-color: #ebf6f9;
}
.first-menu-container {
  margin-right:.625rem;
  height: 100%;
  width:5.625rem;
  background-color: #fff;
  overflow: auto;
}
.second-menu-container {
  flex-grow: 1;
  height: calc(100vh - 5.625rem);
  width: 16.875rem;
}
.first-menu-container::-webkit-scrollbar,
.second-menu-container::-webkit-scrollbar {
  display: none;
}
.first-menu-container .first-menu {
  display: flex;
  flex-direction: column;
}
.first-menu-container .first-menu li {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
}
.first-menu-container .first-menu li.selected {
  background-color: #ebf6f9;
  color: firebrick;
}
/* 二级菜单 */
.second-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.second-menu ul {
  margin-bottom: 0.625rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
}
.second-menu ul h3 {
  padding: 10px;
}
.second-menu ul .lis-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.second-menu ul li {
  margin:.625rem 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.625rem;
}
.second-menu ul li img {
  height: 3.125rem;
  width: 2.5rem;
  background-color: pink;
}
</style>