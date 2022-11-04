import {post,get,del,put} from "@/common/api/request"


// get layTab
export const getLyTab = (params={})=>{
    return get("/api/home/lytab",{
        params
    })
}
// get home page
export const getHomePage = (params={})=>{
    return get("api/home/page",{
        params
    })
}
// 搜索商品
export const searchGoodsList = (params={})=>{
    return get("/api/search",{
        params
    })
}
// test模块
export const searchRecomend = (params={})=>{
    return get("/api/search/goods",{
        params
    })
}
// 获取二级菜单
export const searchSecondMenu =(params={})=>{
    return get("/api/search/menu",{
        params
    })
}
// 点击二级菜单，搜索相关数据
export const searchList =(params={})=>{
    return get("/api/search/menu/list",{
        params
    })
}