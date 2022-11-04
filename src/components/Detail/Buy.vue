<template>
  <div class="buy">
    <div class="buy-item shop">
      <span class="icon-shop"></span>
      <span>店铺</span>
    </div>
    <div class="buy-item favorites">
      <span class="icon-heart-o"></span>
      <span>收藏</span>
    </div>
    <div class="buy-item cart" @click="goCart">
      <span class="icon-shopping-cart"></span>
      <span>购物车</span>
    </div>
    <div class="buy-item btn">
      <button class="buy-now">立即购买</button>
      <button class="add-cart" @click="addToCart">加入购物车</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Buy",
  computed: {
    ...mapState({
      detail: (state) => state.goodsList.detail,
    }),
  },
  methods: {
    ...mapMutations(['setCartList']),
    goCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      // 业务逻辑
      // 发送axios，存储在数据库
      // 存储在客户端localStorage中
      var cart = [];
      if (localStorage.getItem("cartList")) {
        cart = JSON.parse(localStorage.getItem("cartList")); //数组
      }
      cart.push(this.detail);
      localStorage.setItem("cartList", JSON.stringify(cart));
      this.setCartList(cart)
      // console.log(cart.length);
    },
  },
};
</script>

<style scoped lang="scss">
%display-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
%font-style {
  font-size: 0.75rem;
  color: #999;
  font-weight: lighter;
}
.buy {
  padding: 0.625rem 0;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 4.375rem;
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
  background-color: #fff;
  .buy-item {
    padding: 0 0.625rem;
  }
  .shop,
  .favorites,
  .cart {
    @extend %display-flex;
    flex-shrink: 0;
    span:nth-child(1) {
      font-size: 1.875rem;
    }
    span:nth-child(2) {
      @extend %font-style;
    }
  }
  .btn {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      padding: 0.625rem 1rem;
      color: #fff;
      font-size: 0.875rem;
      border-radius: 1.5625rem;
    }
    .buy-now {
      background-color: orange;
    }
    .add-cart {
      background-color: red;
    }
  }
}
</style>