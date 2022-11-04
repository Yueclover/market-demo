<template>
  <div class="recomend">
    <SectionTitle v-show="pageType === '推荐'">火爆推荐</SectionTitle>
    <ul>
      <li
        v-for="(item, index) in recomend.recomendList"
        :key="index"
        @click="goDetail(item)"
      >
        <div class="left"><img :src="item.imgUrl" alt="" /></div>
        <div class="right">
          <div class="goods-top">
            <h3 class="goods-title">{{ item.title }}</h3>
            <span class="goods-description">{{ item.description }}</span>
          </div>
          <div class="goods-btm">
            <span class="goods-price">￥{{ item.price }}</span>
            <div class="cart-box"><span class="icon-shopping-cart"></span></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SectionTitle from "@/components/Home/SectionTitle.vue";
export default {
  name: "Recomend",
  props: ["recomend", "pageType"],
  components: {
    SectionTitle,
  },
  methods: {
    ...mapMutations(["setDetail"]),
    goDetail(item) {
      this.$router.push({
        name: "Detail",
        params:{
          id:1,
        }
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
      })
    },
  },
};
</script>

<style scoped>
.recomend {
  width: 100%;
  background-color: #fff;
}
.recomend ul li {
  margin-bottom: 0.3125rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fffafa;
  border-radius: 0.3125rem;
}
.recomend ul li:last-child {
  margin-bottom: 0rem;
}
.recomend ul li .left img {
  height: 9.375rem;
  width: 9.375rem;
}
.recomend ul li .right {
  padding: 0 1rem;
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  color: #333;
  overflow: hidden;
}
.recomend ul li .right .goods-top {
  margin-bottom: 0.625rem;
}
.recomend ul li .right .goods-top .goods-title {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.recomend ul li .right .goods-top .goods-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.recomend ul li .right .goods-btm {
  display: flex;
  justify-content: space-between;
  align-items: cenetr;
  color: red;
  font-size: 1.125rem;
}
.recomend ul li .right .goods-btm .cart-box {
  padding: 0 0.3125rem;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #fff;
}
</style>