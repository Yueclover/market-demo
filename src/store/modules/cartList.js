const cartList = {
    state(){
        return {
           cartList:[]
            
        }
    },
    mutations:{
       setCartList(state,playload){
        state.cartList = playload
       }
    },
    actions:{},
}
export default cartList