<template>
  <div class="my">
    <div class="user-login">
      <img src="" alt="">
      <div class="login-status">
        <strong  v-show="false" class="non-login">登录/注册</strong>
        <div class="user-account">
          <strong>180****9821</strong>
          <span>暂无购书</span>
        </div>
      </div>
    </div>
    <div class="user-behavior">
      <div class="user-preference">
        <li>商品收藏</li>
        <li>关注店铺</li>
        <li>浏览记录</li>
      </div>
      <div class="orders-info">
        <li>
          <span></span>
          <span>待付款</span>
        </li>
        <li>
          <span></span>
          <span>待收货</span>
        </li>
        <li>
          <span></span>
          <span>待评价</span>
        </li>
        <li>
          <span></span>
          <span>退款/售后</span>
        </li>
        <li>
          <span></span>
          <span>全部订单</span>
        </li>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
export default {
    name:'My',
    components:{
      Tabbar,
    }
}
</script>

<style scoped lang="scss">
.my{
  padding:.3125rem .625rem;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: #eee;
  .user-login{
    margin-bottom:1.25rem;
    display: flex;
    img{
      height: 3.75rem;
      width: 3.75rem;
      border-radius: 50%;
    }
    .login-status{
      padding:.3125rem .625rem;
      .none-login{
        font-size: 1.25rem;
      }
      .user-account{
        display: flex;
        flex-direction: column;
        span{
          font-size: .875rem;
          color:#999;
        }
      }
    }
  }
  .user-behavior{
    margin-bottom:.625rem;
    padding:.625rem;
    background-color: #fff;
    border-radius: .3125rem;
    .user-preference{
      padding-bottom:.625rem;
      display: flex;
      border-bottom:1px solid #eee;
      li{
        flex-grow: 1;
        margin-right:.625rem;
        border-right:1px solid #eee;
        &:nth-child(3){
          margin-right:none;
          border:none;
        }
      }
    }
    .orders-info{
      padding-top:1.25rem;
      display: flex;
      li{
        flex-grow: 1;
      }
    }
  }
}
</style>