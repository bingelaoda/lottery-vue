<template>
  <div>
    <title-bar :titlename="title"></title-bar>
    <!--空出左右两格-->
    <div class="col-xs-1"></div>

    <div class="col-xs-10" style="margin-top: 28px;">

      <!--2 登录与注册标识-->
      <div class="col-xs-6" style="text-align: center;color: green;">登录</div>
      <div class="col-xs-6" style="text-align: center;margin-bottom: 10px;">
        <a href="register.html" style="color: black;">注册</a>
      </div>

      <!--3 水平分割线-->
      <hr style="border: solid gainsboro 2px;" />

      <!--4 输入框 因为要提交数据，所以一定要使用form表单-->

      <form action="">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入你的账号...">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入密码...">
        </div>


        <div class="form-group" style="margin-top: 20px;">
          <input type="button" class="btn btn-success" value="登录" style="width: 100%;">
        </div>

        <div class="clearfix"></div>
        <div>
          <a href=""style="color: green;">忘记密码</a>
          &nbsp;|&nbsp;
          <a href="register.html" style="color: green;" onclick="location.href='register.html'">注册</a>
        </div>

      </form>

      <div class="col-xs-1"></div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/pages/common/TitleBar'
    export default {
        name: "loginPage",
      components:{
        TitleBar
      },
      data(){
          return {
            title:'登录页面'
          }
      }
    }
</script>

<style scoped>

</style>
