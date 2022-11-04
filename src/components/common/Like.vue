<template>
  <div class="like">
    <SectionTitle v-show="pageType === '推荐'">猜你喜欢</SectionTitle>
    <ul>
      <li
        v-for="(item, index) in like.likeList"
        :key="index"
        @click="goDetail(item)"
      >
        <img :src="item.imgUrl" alt="" />
        <span class="goods-title">{{ item.title }}</span>
        <span class="goods-price">￥{{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SectionTitle from "@/components/Home/SectionTitle.vue";
export default {
  name: "Like",
  props: ["like", "pageType"],
  components: {
    SectionTitle,
  },
  methods: {
    ...mapMutations(["setDetail"]),
    goDetail(item) {
      this.$router.push({
        name: "Detail",
        params: {
          btitle: item.title,
          imgUrl: item.imgUrl,
          des: item.description,
          bprice: item.price,
        },
      })
      localStorage.setItem('detail',JSON.stringify({
        title: item.title,
        imgUrl: item.imgUrl,
        des: item.description,
        price: item.price,
      }))
      this.setDetail({
        title: item.title,
        imgUrl: item.imgUrl,
        des: item.description,
        price: item.price,
      });
    },
  },
};
</script>

<style scoped>
.like {
  width: 100%;
  background-color: #fff;
}
.like ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.like ul li {
  margin: 0.625rem 2% 0.625rem;
  display: flex;
  flex-direction: column;
  width: 46%;
  background-color: #f5f5f5;
  box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.3);
}
.like ul li span.goods-title {
  padding: 0 0.625rem;
  margin: 0.625rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.like ul li span.goods-price {
  margin-bottom: 0.625rem;
  padding: 0 0.625rem;
  color: red;
}
</style>