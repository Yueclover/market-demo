<template>
  <div class="title">
      <span class="dot"></span><span><slot></slot></span><span class="dot"></span>
  </div>
</template>

<script>
export default {
name:'SectionTitle',
}
</script>

<style scoped>
.title{
  display: flex;
  width: 100%;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
}
.title span.dot {
  height: 0.3125rem;
  width: 0.3125rem;
  border-radius: 50%;
  background-color: coral;
}
.title span:nth-child(2) {
  padding: 0 0.625rem;
  font-size: 1.125rem;
  font-weight: bold;
}
</style>