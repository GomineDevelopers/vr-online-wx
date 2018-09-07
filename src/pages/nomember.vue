<template>
    <div class="noMemberDiv">
      <div class="noMemberLogo">
        <img src="../../static/images/nomember.png">
      </div>
      <div class="message">您还没有注册，相关功能无法使用哦</div>
      <div class="downLogo">
        <img src="../../static/images/down.png">
      </div>
      <div class="button">
        <van-button type="primary" size="large" @click="register">去注册</van-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "nomember",
      data(){
          return{}
      },
      mounted(){},
      methods:{
        register(){
          this.$router.replace({name:'registerOne'});
        }
      }
    }
</script>

<style scoped>
  .noMemberDiv{
    text-align: center;
    margin: 5vh;
  }

  .noMemberLogo img{
    width: 86vw;
  }

  .message{
    margin-top: 5vh;
  }

  .downLogo{
    margin:2vh 0 2.5vh;
  }

  .downLogo img{
    width: 22px;
  }
</style>
