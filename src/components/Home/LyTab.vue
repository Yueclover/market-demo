<template>
  <div class="ly-tab">
    <ul>
      <li
        v-for="(item, index) in lytab"
        :key="index"
        :class="currentIndex == index ? 'selected' : ''"
        @click="sendAxios(index,item.name)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getHomePage } from "@/common/api"
export default {
  name: "LyTab",
  props:['lytab'],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    //修改样式 并发送axios 请求页面数据
    sendAxios(index,name) {
      this.currentIndex = index;
      getHomePage({
        id: index,
        name,
      }).then((res) => {
        this.$bus.$emit('getPageData',res.data)
      });
    },
  },
};
</script>

<style scoped>
.ly-tab {
  width: 100vw;
  background-color: #fff;
}
.ly-tab ul {
  display: flex;
  height: 2.5rem;
  overflow-x: auto;
  font-size: 1.125rem;
}
.ly-tab ul::-webkit-scrollbar {
  display: none;
}
.ly-tab ul li {
  flex: none;
  line-height: 2.5rem;
  margin: 0 10px;
}
.ly-tab ul li.selected {
  color: firebrick;
  border-bottom: 2px solid firebrick;
}
</style>