<template>
  <div class="home">
    <div class="header">
      <Header v-show="true"></Header>
      <LyTab v-show="true" :lytab="lyTab"></LyTab>
    </div>
    <section>
      <Menu v-show="false"></Menu>
      <Swiper :swiper="swiper" v-show="swiper.swiperImg"></Swiper>
      <Active v-show="pageType==='推荐'"></Active>
      <Recomend :recomend="recomend" :pageType="pageType" v-show="recomend.recomendList"></Recomend>
      <Like :like="like" :pageType="pageType" v-show="like.likeList"></Like>
    </section>
    <Footer v-show="true"></Footer>
    <Tabbar v-show="true"></Tabbar>
  </div>
</template>

<script>
import { getLyTab, getHomePage } from "@/common/api";
import Tabbar from "@/components/common/Tabbar.vue";
import Header from "@/components/Home/Header.vue";
import LyTab from "@/components/Home/LyTab.vue";
import Swiper from "@/components/Home/Swiper.vue";
import Active from "@/components/Home/Active.vue";
import Menu from "@/components/Home/Menu.vue";
import Recomend from "@/components/common/Recomend.vue";
import Like from "@/components/common/Like.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  name: "Home",
  data() {
    return {
      lyTab: [],
      swiper: {},
      recomend: {},
      like: {},
      pageType:'',
    };
  },
  components: {
    Tabbar,
    Header,
    LyTab,
    Swiper,
    Active,
    Menu,
    Recomend,
    Like,
    Footer,
  },
  methods:{
    // 自定义事件的处理函数
    getPageData(pageData={}){
      this.pageType = pageData.pageType
      this.swiper = pageData.swipers
      this.recomend = pageData.recomends
      this.like = pageData.likes
    }
  },
  created() {
    // 获取lyTab数据
    getLyTab().then((res) => {
      this.lyTab = res.data.lyTab.goodsList;
    });
    getHomePage({
      id: 0,
      name: "推荐",
    }).then((res) => {
      this.pageType = res.data.pageType
      this.swiper = res.data.swipers
      this.recomend = res.data.recomends
      this.like = res.data.likes
    });
  },
  mounted() {
    this.$bus.$on('getPageData',this.getPageData)
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #eee;
}
.home::-webkit-scrollbar {
  display: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
section {
  margin-top: 5rem;
  width: 100vw;
}
</style>