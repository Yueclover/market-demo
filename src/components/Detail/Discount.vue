<template>
  <div class="discount">
    <span class="discount-info">
        <strong>限时购</strong> 时间：2002.10.16 23:00:01-2022.10.24 23:59:59，抓紧抢购
    </span>
    <span class="discount-info">
        <strong>限时购</strong> 时间：2002.10.16 23:00:01-2022.10.24 23:59:59，抓紧抢购
    </span>
    <span class="foldup-right icon-angle-right"></span>
  </div>
</template>

<script>
export default {
    name:'Discount',
};
</script>

<style scoped>
.discount {
  margin-bottom: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  font-size: 0.875rem;
  color: #666;
}
.discount-pannel .discount-info {
  padding: 0.3125rem 0;
  padding-right: 2.5rem;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.discount-pannel .discount-info strong {
  padding: 1px 0.1875rem;
  background-color: lightpink;
  color: orangered;
}
.discount-pannel span.foldup-right {
  margin-top: -0.625rem;
  position: absolute;
  top: 50%;
  right: 0.625rem;
  font-size: 1.25rem;
  color: #222;
}
</style>