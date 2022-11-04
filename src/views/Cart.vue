<template>
  <div class="cart">
    <div class="havegoods" v-if="cartList">
      <header>
        <span>北京东城区</span>
        <span>编辑商品</span>
      </header>
      <div class="edit-goods">
        <div class="checkbox">
          <input
            type="checkbox"
            name="selectall"
            id=""
            @click="selectAll($event)"
            ref="selectall"
          />
        </div>
        <div class="edit-box">
          <span><strong>学习网</strong></span>
          <span>优惠券</span>
        </div>
      </div>
      <div class="cart-list">
        <li v-for="(item, index) in cartList" :key="index">
          <div class="checkbox">
            <input
              type="checkbox"
              name="radio"
              id=""
              ref="checkbox"
              @click="radioBtn"
            />
          </div>
          <div class="goods-box">
            <div class="discount">
              <span><i>满减额</i> 购满100元，可减50元</span>
              <span>去凑单<span class="icon-angle-right"></span></span>
            </div>
            <div class="goods-info-box">
              <img :src="item.imgUrl" alt="" />
              <div class="goods-info">
                <div class="title">{{ item.title }}</div>
                <div class="price">
                  <span>￥{{ item.newPrice }}</span>
                  <del>￥{{ item.oldPrice }}</del>
                </div>
                <div class="count">
                  <button>-</button>
                  <input type="text" v-model="count" />
                  <button>+</button>
                </div>
              </div>
            </div>
            <div class="mark-up">
              <span><i>加价购</i>购买一件，即可享受换购优惠</span>
              <span>去换购<span class="icon-angle-right"></span></span>
            </div>
          </div>
        </li>
      </div>
      <Like :like="like" :pageType="pageType" v-show="like.likeList"></Like>
      <div class="pay">
        <div class="left">
          <div class="select-all">
            <input type="checkbox" name="" id="" />
            <label for="">&nbsp;全选&nbsp;</label>
          </div>
          <div class="preferential-amount">&nbsp;优惠：￥<span>0.00</span></div>
        </div>
        <div class="right">￥<span>0.00</span> 结算(0)</div>
      </div>
    </div>
    <div class="nogoods" v-else>购物车空空如也~快去逛一逛</div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Like from "@/components/common/Like.vue";
import Tabbar from "@/components/common/Tabbar.vue";
export default {
  name: "Cart",
  components: { Tabbar, Like },
  data() {
    return {
      count: 1,
      ischecked: false,
      pageType: "推荐",
      like: {
        type: "like",
        likeList: [
          {
            id: 1,
            imgUrl: "http://localhost:3000/images/like1.jpg",
            title: " 雅思王听力真题语料库 2022新版 ",
            description: "",
            price: 68,
          },
          {
            id: 2,
            imgUrl: "http://localhost:3000/images/like2.jpg",
            title: " 新东方 100个句子记完7000个雅思单词",
            description:
              " 本书是俞敏洪老师的又一词汇力作，书中收录雅思考试中的100个典型句子，通过对其中核心词、主题归纳词及重要语法点的讲解，帮助考生用句子识记单词，用语境强化记忆，有效解决词汇难题。 每个句子下面都深度分析了该句的语法结构，帮助考生掌握雅思考查的语法难点。本书为四色印刷，配有100余张全彩配图，记忆单词不再枯燥。本书还配有由外教朗读的音频，纯正英音，扫描封底二维码或登录网址即可下载收听，随听随学。另外，新东方4位雅思老师全力助阵，录制全书配套课程，线上与线下学习完美结合，扫描封底二维码即可购课学习。 ",
            price: 68,
          },
          {
            id: 3,
            imgUrl: "http://localhost:3000/images/like3.jpg",
            title:
              " 顾家北手把手教你雅思写作 6.0版 领跑雅思IELTS写作 技法大全 雅思备考经典",
            description:
              "6.0版本是之前所有版本的升华和提炼，书中所讲述的教学体系，在目前在全球雅思行业备受推崇，写作教学口碑一致好评、提分幅度大、速度快，水平遥遥领先。本书通过手把手讲述写作技巧，细致、深入，符合中国学生的学习习惯；本书精选典型题目，深入解析剑桥题库，紧扣评分标准，准确把握考官评判心理；引领考试风向标；提供适合学生学习的高水平范文，强调语言能力，快速提分。 本书设计巧妙，学习手册和练习手册并行，大书学习知识点，小书及时复习巩固。确保学习任务完成。书中所附赠二维码，可以随时补充考试动态，并获得本书配套音频。 ",
            price: 68,
          },
          {
            id: 4,
            imgUrl: "http://localhost:3000/images/like4.jpg",
            title: " 新东方 剑桥雅思语法精讲精练",
            description:
              " 命题方官方出品，覆盖雅思考试常考语法点，搭配巩固练习，诊断语法错误，为考生量身定制的雅思制胜用书！ ",
            price: 68,
          },
          {
            id: 5,
            imgUrl: "http://localhost:3000/images/like5.jpg",
            title: " 新东方 雅思词汇词根+联想记忆法 ",
            description:
              "乱序版 俞敏洪 雅思乱序 新东方绿宝书 新东方雅思乱序全新改版，收录雅思核心词，新增配套词汇课程、影视剧场景、背词小程序，“词根+联想”高效助记。 ",
            price: 68,
          },
        ],
      },
      // cartList: [
      //   {
      //     id: 0,
      //     imgUrl: "#",
      //     title: "瓦尔登湖（经典新读 中央编译出版社）",
      //     newPrice: "22.00",
      //     oldPrice: 26.8,
      //     count: 1,
      //   },
      //   {
      //     id: 1,
      //     imgUrl: "#",
      //     title: "保重",
      //     newPrice: 35.0,
      //     oldPrice: 39.8,
      //     count: 1,
      //   },
      // ],
    };
  },
  computed: {
    ...mapState({
      cartList: (state) => state.cartList.cartList,
    }),
  },
  methods: {
    ...mapMutations(["setCartList"]),
    // 全选按钮
    selectAll(e) {
      var check = e.currentTarget.checked
      this.$refs.checkbox.forEach((e) => {
        e.checked = check;
      });
    },
    // 取消全选
    radioBtn() {
      var count = 0;
      this.$refs.checkbox.forEach((e) => {
        if (e.checked) {
          count += 1;
        }
      });
      if (count === this.cartList.length) {
        this.$refs.selectall.checked = true;
      }else{
        this.$refs.selectall.checked = false;
      }
    },
  },
  created() {
    // console.log();
    this.setCartList(JSON.parse(localStorage.getItem("cartList")));
  },
};
</script>

<style scoped lang="scss">
.checkbox {
  padding: 0 0.3125rem;
  flex-shrink: 0;
  flex-grow: 0;
  input[type="checkbox"] {
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid #999;
    border-radius: 50%;
    vertical-align: bottom;
    -webkit-appearance: none;
    &:checked {
      background-color: red;
    }
  }
}
.cart {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: #eee;
  color: black;
  &::-webkit-scrollbar {
    display: none;
  }
  .havegoods {
    header {
      padding: 0 0.625rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.5rem;
      background-color: #fff;
    }
    .edit-goods {
      padding: 0 0.625rem;
      margin-top: 1.25rem;
      margin-bottom: 0.625rem;
      display: flex;
      .edit-box {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        span:nth-child(2) {
          padding: 0.125rem;
          font-size: 0.75rem;
          color: crimson;
          background-color: lightpink;
        }
      }
    }
    .cart-list {
      padding: 0 0.625rem;
      li {
        margin-bottom: 0.625rem;
        background-color: #fff;
        border-radius: 0.3125rem;
        display: flex;
        align-items: center;
        .goods-box {
          padding-right: 0.625rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          font-size: 0.875rem;
          .discount {
            display: flex;
            justify-content: space-between;
            height: 2.5rem;
            align-items: center;
            i {
              font-style: normal;
              padding: 0.125rem;
              background-color: crimson;
              font-size: 0.75rem;
              color: #fff;
            }
            span:nth-child(2) {
              color: crimson;
            }
          }
          .goods-info-box {
            display: flex;
            img {
              height: 5rem;
              width: 5rem;
            }
            .goods-info {
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding-left: 0.625rem;
              position: relative;
              .title {
                font-size: 1rem;
              }
              .price {
                span {
                  font-size: 1.125rem;
                  color: red;
                }
                del {
                  font-size: 0.875rem;
                  color: #999;
                }
              }
              .count {
                position: absolute;
                bottom: 0.3125rem;
                right: 0;
                button {
                  padding: 0.3125rem;
                  font-size: 1.25rem;
                  background-color: #fff;
                }
                input {
                  padding: 2px 0.3125rem;
                  font-size: 1.125rem;
                  width: 2.5rem;
                  outline: none;
                  border: none;
                  background-color: #eee;
                  text-align: center;
                }
              }
            }
          }
          .mark-up {
            padding: 0.625rem 0;
            display: flex;
            justify-content: space-between;
            span:nth-child(1) {
              color: #999;
              i {
                padding: 0.125rem;
                margin-right: 0.625rem;
                border: 1px solid crimson;
                color: crimson;
                font-style: normal;
              }
            }
          }
        }
      }
    }
    .pay {
      margin: 0 auto;
      position: fixed;
      bottom: 3.75rem;
      right: 0.625rem;
      display: flex;
      width: calc(100vw - 1.25rem);
      height: 3.125rem;
      .left,
      .right {
        flex-grow: 1;
        padding: 0 1.25rem;
        display: flex;
        align-items: center;
        border-top-left-radius: 1.5625rem;
        border-bottom-left-radius: 1.5625rem;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
      }
      .right {
        border-radius: 0;
        border-top-right-radius: 1.5625rem;
        border-bottom-right-radius: 1.5625rem;
        background-color: red;
      }
    }
  }
}
</style>