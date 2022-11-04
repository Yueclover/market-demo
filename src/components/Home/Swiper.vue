<template>
  <div
    class="swiper" @mouseenter="pause()" @mouseleave="restart()">
    <transition
      name="list"
      tag="li"
      v-for="(item, index) in swiper.swiperImg"
      :key="index"
    >
      <img :src="item.imgUrl" alt="" v-show="index == currentIndex" />
    </transition>
    <!-- 小圆点 -->
    <ul class="slider">
      <li
        v-for="(item, index) in swiper.swiperImg"
        :key="index"
        :class="index == currentIndex ? 'actived' : ''"
        @mouseenter="checkoutImg(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props:['swiper'],
  data() {
    return {
      sliderTime: 3000,
      currentIndex: 0,
      timer: null,
    };
  },
  computed: {
  },
  methods: {
    // 定时器函数
    timerFunc() {
      if (this.swiper.swiperImg) {
        if (this.currentIndex == this.swiper.swiperImg.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      }
    },
    // 鼠标移动到图片上时，轮播图暂停
    pause() {
      clearInterval(this.timer);
    },
    // 鼠标离开图片时，轮播图重启
    restart() {
      this.timer = setInterval(this.timerFunc, this.sliderTime);
    },
    // 手动切换轮播图
    checkoutImg(index) {
      this.currentIndex = index;
    },
  },
  created() {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer);
    this.timer = null;
    this.timer = setInterval(this.timerFunc, this.sliderTime);
  },
  destroyed() {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style scoped>
.swiper {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 27vw;
}
.swiper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
}
.list-enter {
  transform: translateX(100vw);
}
.list-leave-to {
  transform: translateX(-100vw);
}
.list-move,
.list-leave-active,
.list-enter-active {
  position: absolute;
  transition: transform 1s ease;
}
.swiper .slider {
  display: flex;
  margin-left: -50px;
  position: absolute;
  bottom: 0.625rem;
  left: 50%;
}
.swiper .slider li {
  margin: 0 0.3125rem;
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 50%;
  border: 1px solid #222;
}
.swiper .slider li.actived {
  background-color: crimson;
}
</style>