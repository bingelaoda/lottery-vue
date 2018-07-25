<template>
  <div class="row title">
    <div class="col-xs-12">
        <div class="needbackDiv" v-if="needback">&lt;返回</div>
        {{titlename}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "title-bar",
        props:['titlename','needback']
    }
</script>

<style scoped>
  .needbackDiv{
    position: absolute;
  }
</style>
