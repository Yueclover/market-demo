<template>
  <div class="description">
    <div class="book-title">
      <span>自营</span>
      <span>新东方 四级英语新大纲词汇表</span>
    </div>
    <div class="book-description">
      新版 畅销原版 词汇学习书 词根背单词 小巧便携
    </div>
  </div>
</template>

<script>
export default {
    name:'Description'
};
</script>

<style scoped>
.description {
  margin-bottom: 0.625rem;
}
.description .book-title {
  margin-bottom: 0.3125rem;
}
.description .book-title span:nth-child(1) {
  margin-right: 0.3125rem;
  background-color: orangered;
  color: #fff;
}
.description .book-title span:nth-child(2) {
  font-size: 1.25rem;
  color: #222;
  font-weight: bold;
}
.description .book-description {
  color: #888;
}
</style>