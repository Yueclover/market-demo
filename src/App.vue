<template>
  <div id="app">
    <Loading v-show="isshow"></Loading>
     <router-view></router-view>
     <!-- <Test></Test> -->
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Test from '@/views/Test.vue'
export default {
  name: 'App',
  data(){
    return {
      isshow:false,
    }
  },
  components:{
    Loading,
    Test,
  },
  methods:{
    openLoading(){
      this.isshow = true
    },
    closeLoading(){
      this.isshow = false
    },
  },
  mounted(){
    this.$bus.$on('openLoading',this.openLoading)
    this.$bus.$on('closeLoading',this.closeLoading)
  }
}
</script>

<style scoped>

</style>
