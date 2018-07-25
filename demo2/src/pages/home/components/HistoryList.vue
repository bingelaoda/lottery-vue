<template>
  <div>
    <history-item v-for="i in data":key="i.code" :data="i" @click.native="convert('/detailPage?code='+i.code)"></history-item>
  </div>
</template>

<script>
  import historyItem from './HistoryItem'
    export default {
        name: "history-list",
      props:['data'],
      methods:{
        convert(path){
          this.$router.push(path)
        }
      },
      components:{
          historyItem
      }
    }
</script>

<style scoped>

</style>
