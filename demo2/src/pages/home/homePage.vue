<template>
  <div>
    <title-bar :titlename="title" :needback="false"></title-bar>
    <carousel></carousel>
    <history-list :data="historylist"></history-list>
    <menuBar></menuBar>
  </div>
</template>

<script>
  import titleBar from '@/pages/common/TitleBar'
  import carousel from '@/pages/common/carousel'
  import historyList from '@/pages/home/components/HistoryList'
  import axios from 'axios'
  import menuBar from '@/pages/common/menuBar'

    export default {
        name: "home-page",
        components:{
            titleBar,
            carousel,
          historyList,
          menuBar
        },
        data(){
          return{
            title:'博彩首页',
            historylist:[]
          }
        },


        mounted(){
          axios.get('/api/index').then(resp=>{
            this.historylist=resp.data.data;
          })
        }
    }
</script>

<style scoped>

</style>
