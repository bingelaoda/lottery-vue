<template>
  <div>
    <title-bar :titlename="title" :needback="true"></title-bar>

    <carousel></carousel>


    <div>
      <div class="row" style="margin-top: 30px;">
        <div style="float: left; margin-left: 10px;">第{{history.code}}期</div>
        <div style="float: right; margin-right: 10px;">{{history.date}}</div>

      </div>

      <!--4 上期开奖情况-->
      <div class="row" style="align-content: center;" v-if="history.red!=null">
        <div class="ball-item ball-red" v-for="i in history.red.split(',')">
          <span >{{i}}</span>
        </div>

        <div class="ball-item ball-blue">
          <span>{{history.blue}}</span>
        </div>
      </div>

      <!--5销量与奖金-->
      <div class="row" style="margin-top: 10px;">
        <table class="table table-bordered">
          <tr style="background-color: gainsboro;">
            <td class="text-center">本期销量</td>
            <td class="text-center">奖池奖金</td>
          </tr>
          <tr>
            <td class="text-center" style="color: red;">{{history.sales}}</td>
            <td class="text-center" style="color: red;">{{history.poolmoney}}</td>
          </tr>

        </table>

      </div>

      <div class="row">
        <table class="table table-bordered">

        <tr style="background-color: gainsboro;">
          <td class="text-center">奖项</td>
          <td class="text-center">中奖注数</td>
          <td class="text-center">奖金</td>
        </tr>


        <tr v-for="one in history.prizegrades">
          <td class="text-center">{{one.type}}</td>
          <td class="text-center">{{one.typenum}}</td>
          <td class="text-center">{{one.typemoney}}</td>
        </tr>



        </table>
      </div>
    </div>

    <menuBar></menuBar>
  </div>

</template>

<script>

  import titleBar from '@/pages/common/TitleBar'
  import carousel from '@/pages/common/carousel'
  import axios from 'axios'
  import menuBar from '@/pages/common/menuBar'

    export default {
        name: "detailPage",
      components:{
        titleBar,
        carousel,
        menuBar
      },
      data(){
          return {
            title:'博彩详情',
            code:this.$route.query.code,
            history:[]
          }
      },

      mounted(){
          axios.get('/api/detail').then((resp)=>{
            this.history=resp.data.data
            // console.log(resp.data.data);
          })
      }
    }
</script>

<style scoped>

</style>
