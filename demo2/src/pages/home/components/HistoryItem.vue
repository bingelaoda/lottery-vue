<template>
  <div class="row divone">
    <div class="col-xs-11 row" style="margin-left: 0;padding-right: 0px">

      <div class="row">
        <span style="font-size: 18px;margin-left: 10px;">{{data.code}}期</span>
        <span style="font-size:12px ; margin-left: 5px;">{{data.date}}</span>
      </div>
      <!--往期球-->
      <div class="ball-item ball-red" v-for="i in data.red.split(',')">
        <span>{{i}}</span>
      </div>
      <div class="ball-item  ball-blue" style="margin-right: 0px">
        <span>{{data.blue}}</span>
      </div>
    </div>
    <div class="col-xs-1" style="margin-top: 20px;">
      <div class="glyphicon glyphicon-chevron-right"></div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "history-item",

      props:['data']
    }
</script>

<style scoped>
.divone{
  border: solid gainsboro 1px ; height: 80px ;padding-top: 5px;
}
</style>
