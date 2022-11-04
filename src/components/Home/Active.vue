<template>
  <div class="active">
    <ul>
        <li v-for="(item , index) in activeList" :key="index">
            <span :class="item.className"></span>
            <span>{{item.title}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Active',
    data(){
        return {
            activeList:[
                {
                    title:'新高考',
                    className:'icon-graduation-cap'
                },
                {
                    title:'考研大礼包',
                    className:'icon-library',
                },
                {
                    title:'文具',
                    className:'icon-ruler',
                },
                {
                    title:'领福利',
                    className:'icon-gift',
                },
                {
                    title:'电子书',
                    className:'icon-file-archive-o',
                },
                
            ]
        }
    }
}
</script>

<style scoped>
.active{
    margin-bottom: .625rem;
    background-color: #fff;
}
.active ul{
    display: flex;
    justify-content: space-around;
}
.active ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.active ul li span{
    margin-bottom:.3125rem;
    font-size: 1.875rem;
}
.active ul li span:nth-child(2){
    font-size:.875rem;
}
</style>