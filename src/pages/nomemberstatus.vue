<template>
  <div class="nomemberstatus_bg">
    <div class="main">
      <div class="logoDiv">
        <img src="../../static/images/logo.png">
      </div>
      <div class="wordDiv">~感谢您的注册~</div>
      <div class="borderDiv">我们会在1-3个工作日对您的申请进行审核，请耐心等待。</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "nomemberstatus"
    }
</script>

<style scoped>
  .main{
    text-align: center;
    margin:5vh;
    color: #fff;
  }
  .logoDiv img{
    width: 50vw;
  }

  .wordDiv{
    font-size: .88rem;
    font-weight: 600;
    margin: 4vh 0 3vh;
  }

  .borderDiv{
    margin: 0 auto;
    border: 1px dashed #fff;
    border-radius: 3px;
    width: 62vw;
    padding: 3vh;
    font-size: .9rem;
  }
</style>
