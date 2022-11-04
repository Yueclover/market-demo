<template>
  <div class="detail">
    <div class="img-container">
      <div class="img-pannel">
        <img :src="imgUrl" alt="" />
        <img src="@/assets/images/detail2.jpg" alt="" />
        <img src="@/assets/images/detail3.jpg" alt="" />
      </div>
    </div>
    <div class="detail-container">
      <div class="price-pannel">
        <span class="new-price">￥{{ newPrice }}</span>
        <span class="old-price"
          >定价￥<del>{{ oldPrice }}</del> <i>{{ discount }}折</i></span
        >
      </div>
      <div class="detail-pannel">
        <div class="discount-pannel" @click="foldup">
          <span class="discount-info"
            ><strong>限时购</strong> 时间：2002.10.16 23:00:01-2022.10.24
            23:59:59，抓紧抢购</span
          >
          <span class="discount-info"
            ><strong>限时购</strong> 时间：2002.10.16 23:00:01-2022.10.24
            23:59:59，抓紧抢购</span
          >
          <span class="foldup-right icon-angle-right"></span>
        </div>
        <div class="book-title">
          <span>自营</span>
          <span>{{ title }}</span>
        </div>
        <div class="book-description">
          <!-- 新版 畅销原版 词汇学习书 词根背单词 小巧便携 -->
          {{ des }}
        </div>
        <div class="rank-pannel">
          <div><i>排行榜</i>当当英语考试好评榜 第5名</div>
        </div>
        <div class="book-info">
          <div>
            <strong>作者</strong>
            <span class="book-info-detail">新东方考试研究中心</span>
            <span class="foldup-right icon-angle-right"></span>
          </div>
          <div>
            <strong>出版社</strong>
            <span class="book-info-detail">浙江教育出版社 2016-11</span>
            <span class="foldup-right icon-angle-right"></span>
          </div>
          <div>
            <strong>分类</strong>
            <span class="book-info-detail"
              >图书>外语>英语考试>大学英语四级</span
            >
            <span class="foldup-right icon-angle-right"></span>
          </div>
        </div>
        <div class="dilivery">
          <div class="dilivery-info">
            <div class="address">
              <strong>送至</strong>
              <div class="location">
                <span>北京东城区</span>
                <span>明天22:25前下单，预计后天送达</span>
              </div>
            </div>
            <div class="dilivery-cost">
              <strong>运费</strong>
              <span>运费6元，满49包邮</span>
            </div>
          </div>
          <div class="after-sales">
            <span>支持7日无理由退货</span>
            <span>当当发货&售后</span>
            <span>正品保障 </span>
          </div>
        </div>
        <div class="comment">
          <div class="comment-header">
            <div class="left">
              <strong>评论</strong>
              <span>100+</span>
            </div>
            <div class="right">
              <span>100%好评</span>
              <span class="icon-angle-right"></span>
            </div>
          </div>
          <div class="comment-content"></div>
          <div class="comment-foldup">
            <button>查看更多评论</button>
          </div>
        </div>
        <div class="other-market">
          <span>更多卖家 <i>57</i>个卖家在售</span>
          <span class="icon-angle-right"></span>
        </div>
        <div class="relate-books">
          <div class="relate-books-header">
            <strong>买此书的顾客还买了</strong>
            <span>查看更多</span>
            <span class="icon-angle-right"></span>
          </div>
        </div>
        <div class="market-info">
          <button>进店逛逛</button>
          <div class="market-info-top">
            <img src="" alt="" />
            <div class="market-info-detail">
              <strong class="market-name">博库网旗舰店<i>明星店铺</i></strong>
              <span class="market-fans">2.0万人关注</span>
              <div class="market-scores">
                <span>描述相符4.76</span>
                <span>服务态度4.80</span>
                <span>发货速度4.81</span>
              </div>
            </div>
          </div>
          <div class="market-info-btm">
            <div class="inner-box">
              <span>10.26-11.6好书5折封顶获得</span>
              <span>晨诵暮读</span>
              <span>10.26-11.6好书5折封顶活动</span>
            </div>
          </div>
        </div>
      </div>
      <div class="book-detail">
        <p>商品详情</p>
        <img src="@/assets/images/details2.jpg" alt="" />
      </div>
    </div>
    <div class="discount-foldup-pannel" v-show="isshow">
      <div class="discount-details">
        <h3>优惠明细<span class="icon-cancel" @click="fold"></span></h3>
        <div class="discount-details-container">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
    </div>
    <Buy></Buy>
  </div>
</template>

<script>
import { mapState,mapMutations} from "vuex";
import Buy from "@/components/Detail/Buy.vue";
export default {
  name: "Deatil",
  components: {
    Buy,
  },
  data() {
    return {
      oldPrice: 39.8,
      isshow: false,
    };
  },
  computed: {
    ...mapState({
      newPrice: (state) => state.goodsList.detail.price,
      imgUrl: (state) => state.goodsList.detail.imgUrl,
      title: (state) => state.goodsList.detail.title,
      des: (state) => state.goodsList.detail.des,
    }),
    discount() {
      return Math.round((this.newPrice / this.oldPrice) * 100);
    },
  },
  methods: {
    ...mapMutations(["setDetail"]),
    foldup() {
      this.isshow = true;
    },
    fold() {
      this.isshow = false;
    },
  },
  // 刷新页面，保存数据
  created() {
    if (localStorage.getItem("detail")) {
      this.setDetail(JSON.parse(localStorage.getItem("detail")));
    }
  },
};
</script>

<style scoped lang="scss">
$margin-btm: 0.625rem;
%basic {
  margin-bottom: $margin-btm;
  background-color: #fff;
  border-radius: 0.3125rem;
}
%foldup-right {
  margin-top: -0.625rem;
  position: absolute;
  top: 50%;
  right: 0.625rem;
  font-size: 1.25rem;
  color: #222;
}
.detail {
  background-color: #f6f6f6;
  .img-container {
    width: 100vw;
    height: 100vw;
    overflow: hidden;
    .img-pannel {
      height: 100vw;
      img {
        width: 100vw;
        height: auto;
      }
    }
  }
  .detail-container {
    width: 100vw;
    .price-pannel {
      padding: 0.3125rem 0.625rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: left;
      height: 5rem;
      background-color: orangered;
      border-top-right-radius: 0.625rem;
      border-top-left-radius: 0.625rem;
      .new-price {
        margin-bottom: 0.625rem;
        font-size: 1.625rem;
        color: #fff;
      }
      .old-price {
        color: #e6e6e6;
        del {
          font-size: 0.875rem;
          font-style: normal;
        }
        i {
          color: orange;
          font-size: 0.875rem;
          font-style: normal;
        }
      }
    }
    .detail-pannel {
      padding: 0.625rem;
      width: 100%;
      .discount-pannel {
        margin-bottom: $margin-btm;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        font-size: 0.875rem;
        color: #666;
        .discount-info {
          padding: 0.3125rem 0;
          padding-right: 2.5rem;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          strong {
            padding: 1px 0.1875rem;
            background-color: lightpink;
            color: orangered;
          }
        }
        .foldup-right {
          @extend %foldup-right;
        }
      }
      .book-title {
        margin-bottom: $margin-btm;
        span:nth-child(1) {
          margin-right: 0.3125rem;
          background-color: orangered;
          color: #fff;
        }
        span:nth-child(2) {
          font-size: 1.25rem;
          color: #222;
          font-weight: bold;
        }
      }
      .book-description {
        margin-bottom: $margin-btm;
        color: #888;
      }
      .rank-pannel {
        margin-bottom: 0.625rem;
        width: 21rem;
        div {
          padding: 0.125rem 0.3125rem;
          font-size: 1.25rem;
          border-radius: 0.3125rem;
          color: #a0522d;
          background-color: #ffdead;
          i {
            font-weight: bold;
            font-size: 1rem;
            padding-right: 0.625rem;
          }
        }
      }
      .book-info {
        @extend %basic;
        display: flex;
        flex-direction: column;
        div {
          position: relative;
          padding: 0.625rem;
          padding-right: 2.5rem;
          display: flex;
          flex-wrap: nowrap;
          strong {
            width: 3.75rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .book-info-detail {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .foldup-right {
            @extend %foldup-right;
          }
        }
      }
      .dilivery {
        @extend %basic;
        .dilivery-info {
          padding: 0.625rem;
          display: flex;
          flex-direction: column;
          .address,
          .dilivery-cost {
            display: flex;
            padding: 0.625rem 0;
            padding-right: 2.5rem;
            strong {
              width: 3.75rem;
            }
          }
          .address .location {
            display: flex;
            flex-direction: column;
            span:nth-child(2) {
              padding: 0.3125rem 0;
              color: orangered;
            }
          }
        }
        .after-sales {
          padding: 0.625rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          background-color: #e2e2e2;
        }
      }
      .comment {
        @extend %basic;
        padding: 0.625rem;
        .comment-header {
          display: flex;
          justify-content: space-between;
        }
      }
      .other-market {
        @extend %basic;
        padding: 0.625rem;
      }
      .relate-books {
        @extend %basic;
        padding: 0.625rem;
      }
      .market-info {
        @extend %basic;
        position: relative;
        padding: 0.625rem;
        button {
          position: absolute;
          top: 1.25rem;
          right: 0.625rem;
          padding: 0.3125rem 0.625rem;
          font-size: 0.75rem;
          border-radius: 0.8125rem;
          background-color: #fff;
          border: 1px solid #aaa;
        }
        .market-info-top {
          padding-bottom: 0.625rem;
          display: flex;
          img {
            height: 3.5rem;
            width: 3.5rem;
            margin-right: 0.3125rem;
          }
          .market-info-detail {
            display: flex;
            flex-direction: column;
            .market-name {
              margin-bottom: 0.3125rem;
              i {
                margin-left: 0.25rem;
                padding: 2px 0.25rem;
                font-size: 0.625rem;
                color: #fff;
                font-style: normal;
                background-color: orangered;
              }
            }
            .market-fans {
              margin-bottom: 0.3125rem;
              font-size: 0.625rem;
              color: #aaa;
            }
            .market-scores {
              font-size: 0.625rem;
              span {
                margin-right: 0.3125rem;
              }
            }
          }
        }
        .market-info-btm {
          overflow-x: auto;
          width: 100%;
          &::-webkit-scrollbar {
            display: none;
          }
          .inner-box {
            display: flex;
            flex-wrap: nowrap;
            width: 500px;
            height: 1.5rem;
            span {
              margin-right: 0.3125rem;
              padding: 0.125rem 0.625rem;
              background-color: lightpink;
              font-size: 0.875rem;
              border-radius: 0.6875rem;
            }
          }
        }
      }
    }
    .book-detail {
      background-color: #fff;
      p {
        padding: 0.625rem;
        border-left: 2px solid #222;
        color: #222;
        font-weight: bold;
      }
      img {
        width: 100vw;
      }
    }
  }
  .discount-foldup-pannel {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
    .discount-details {
      padding: 0 0.625rem;
      width: 100%;
      height: 31.25rem;
      overflow: auto;
      background-color: #eee;
      border-top-right-radius: 0.625rem;
      border-top-left-radius: 0.625rem;
      &::-webkit-scrollbar {
        display: none;
      }
      h3 {
        position: relative;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
      }
      .icon-cancel {
        margin-top: -0.625rem;
        position: absolute;
        top: 50%;
        right: 0.3125rem;
        font-size: 1.25rem;
      }
      .discount-details-container {
        height: 28.75rem;
        width: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
          display: none;
        }
        .item {
          margin-bottom: 0.625rem;
          height: 150px;
          width: 100%;
          background-color: #fff;
          border-radius: 0.625rem;
        }
      }
    }
  }
}
</style>