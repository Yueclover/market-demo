import Vue from 'vue'
import Vuex from 'vuex'
import goodsList from '@/store/modules/goodsList'
import cartList from '@/store/modules/cartList'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        goodsList,
        cartList
    },
    state:{},
})
export default store