<template>
  <!-- <div class="container" @scroll="getData">
    <ul @scroll="getData">
      <li v-for="(item, index) in recomendData" :key="index">
        <img :src="item.bimg" alt="" />
        <span>{{ item.bname }}</span>
      </li>
    </ul>
  </div> -->
  <div class="load">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
import { searchRecomend } from "@/common/api";
export default {
  name: "Test",
  data() {
    return {
      page: 0,
      maxLen: 5,
      recomendData: [],
    };
  },
  methods: {
    sendAxios() {
      searchRecomend({
        offset: this.page * this.maxLen,
        rows: this.maxLen,
      }).then((res) => {
        console.log(res.data.result);
        res.data.result.forEach((e) => {
          this.recomendData.push(e);
        });
      });
    },
    getData() {
      const container = document.getElementsByClassName("container")[0];
      const ul = document.getElementsByTagName("ul")[0];
      console.log(ul.clientHeight);
      if (container.clientHeight + container.scrollTop == ul.clientHeight) {
        this.page += 1;
        this.sendAxios();
      }
    },
  },
  created() {
    this.sendAxios();
  },
  mounted() {},
  destroyed() {},
};
</script>

<style scoped>
.container {
  margin: 50px auto;
  height: 500px;
  width: 400px;
  border: 1px solid #ccc;
  overflow: auto;
}
.container ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
}
.container ul li {
  flex-grow: 1;
  /* height: 220px; */
  width: 100%;
  border: 1px solid pink;
}
</style>