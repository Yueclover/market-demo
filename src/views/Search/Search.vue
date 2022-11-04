<template>
  <div class="search">
    <Header v-show="$route.path == '/search'"></Header>
    <div class="main-container">
      <div class="search-info-container" v-show="$route.path == '/search'">
        <searchInfo
          :searchInfo="historyList"
          :iconClass="historyIcon"
          :iconEvent="deleteHistoryList"
          v-show="historyListLen"
          >搜索历史</searchInfo
        >
        <searchInfo :searchInfo="hotList" :iconClass="hotIcon"
          >热门搜索</searchInfo
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SearchInfo from "@/components/Search/SearchInfo.vue";
import Header from "@/components/Search/Header.vue";
export default {
  name: "Search",
  data() {
    return {
      historyIcon: "icon-trash-o",
      hotIcon: "icon-fire",
      historyList: [],
      hotList: [
        "羊绒衫",
        "橄榄皮私藏散粉",
        "不怕上火电热毯",
        "秋日软糯毛衣",
        "居家休闲拖地裤",
        "秋季开胃无花果",
        "早八档即食好物",
        "熬夜也不垮脸",
      ],
    };
  },
  components: {
    Header,
    SearchInfo,
  },
  computed: {
    historyListLen() {
      return this.historyList.length;
    },
  },
  methods: {
    // 清空历史记录和localStorage中的history
    deleteHistoryList() {
      this.historyList = [];
      localStorage.setItem("historyList", this.historyList);
    },
    // 更新历史记录
    updateHistory(value) {
      this.historyList = value;
    },
  },
  created() {
    this.$bus.$on("update", this.updateHistory)
    if (!localStorage.getItem("historyList")) {
      this.historyList=[]
    }else{
      this.historyList = JSON.parse(localStorage.getItem("historyList"))
    } 
    
  },
};
</script>

<style scoped>
.main-container {
}
.search-info-container {
  padding: 1.25rem 0.625rem;
}
</style>