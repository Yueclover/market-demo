<template>
  <div class="menu-container">
    <div :class="menuStyle ? 'unfold': 'menu'">
      <div class="inner-container">
        <ul class="grade-pannel">
          <li
            v-for="(item, index) in grade"
            :key="index"
            :class="index == gradeIndex ? 'colored' : ''"
            @click="selectedcol(index)"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="subject-pannel" v-show="menuStyle">
          <li
            v-for="(item, index) in subject"
            :key="index"
            :class="index == subjectIndex ? 'bgced' : ''"
            @click="selectedbgc(index)"
          >
            {{ item }}
          </li>
        </ul>
        <div @click="changeMenuStyle" class="down-up">
          <span :class="iconStyle?'icon-chevron-down' :'icon-chevron-up' "></span>
        </div>
        <div class="grade-menu">
          <div>
            <div class="inner-container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      iconStyle:true,
      grade: ["初一", "初二", "初三", "中考"],
      subject: [
        "语文11",
        "数学",
        "英语",
        "物理1111",
        "化学",
        "政治",
        "历史113567",
        "地理",
        "生物",
        "语文11",
        "数学",
        "英语",
        "物理1111",
        "化学",
        "政治",
        "历史113567",
        "地理",
        "生物",
      ],
      gradeIndex: 0,
      subjectIndex: 0,
      menuStyle: false,
    };
  },
  methods: {
    selectedcol(index) {
      this.gradeIndex = index;
    },
    selectedbgc(index) {
      this.subjectIndex = index;
    },
    changeMenuStyle() {
      this.iconStyle=!this.iconStyle
      this.menuStyle = !this.menuStyle;
    },
  },
};
</script>

<style scoped>
.menu-container {
  position: relative;
  height: 2.5rem;
  width: 100%;
}
.menu {
  position: fixed;
  height: 2.5rem;
  width: 100vw;
  background-color: #fff;
}
.unfold {
  position: fixed;
  height: calc(100vh - 8.125rem);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.inner-container {
  position: relative;
  width: 100vw;
  background-image: url("@/assets/images/bgc1.jpg");
  background-position: top center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.grade-pannel {
  padding-right: 1.875rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100vw;
  height: 2.5rem;
  overflow: auto;
}
.grade-pannel::-webkit-scrollbar {
  display: none;
}
.grade-pannel li {
  margin: 0 5px;
  padding: 0.3125rem 0.625rem;
  flex-grow: 1;
  flex-shrink: 0;
  text-align: center;
}
.grade-pannel li.colored {
  color: #daa520;
}
.subject-pannel {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  height: 10rem;
  overflow: auto;
  font-size: 0.875rem;
}
.subject-pannel::-webkit-scrollbar {
  display: none;
}
.subject-pannel li {
  flex: none;
  padding: 0.3125rem 0.625rem;
  margin: 5px 10px;
  border-radius: 0.875rem;
  background-color: #fff;
}
.subject-pannel li.bgced {
  background-color: crimson;
  color: #fff;
}
.down-up {
  padding: 0.625rem 0.625rem;
  position: absolute;
  top: 0;
  right: 0;
  height: 2.5rem;
  width: 1.875rem;
  background-color: #fdf7ef;
  border-top-right-radius: 1rem;
}
.down-up span {
  border-left: 1px solid #ccc;
}
</style>