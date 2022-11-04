import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false
// 公共css文件
import '@/assets/style.css'
import '@/assets/icomoon/style.css'
export default new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  store,
}).$mount('#app')
