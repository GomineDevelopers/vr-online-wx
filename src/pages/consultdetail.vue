<template>
  <div class="bgCol">
    <div class="problem status-success">
      <div class="problemContent">
        <div>化疗期间呕吐吃什么比较好？</div>
        <div class="time">2018-04-12 08:09</div>
      </div>
      <div class="c1"></div>
      <div class="c2"></div>
      <div class="c3">已回复</div>
    </div>
    <div class="answer">
      <div class="logoDiv">
        <img src="../../static/images/answerLogo.png" class="logo"/>
      </div>
      <div class="answerContent">
        <div>有很多癌症患者在接受化疗时会突然发生严重的恶心和呕吐，针对这些，已经在很多化疗药物上采用了新的药物，稍微减少了呕吐的严重性。</div>
        <div class="time">
          <van-row>
            <van-col span="10"><span>2018-04-12 08:09</span></van-col>
            <van-col span="8" offset="6"><div class="doctorName">[王已]</div></van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "consultdetail"
};
</script>

<style scoped>
.bgCol {
  background-color: #eff1f5;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}

.problem {
  text-align: left;
  background: #ffffff;
  -webkit-box-shadow: 0px 0px 20px 5px #e9e9e9;
  box-shadow: 0px 0px 20px 5px #e9e9e9;
  position: relative;
  border-radius: 5px;
  margin: 2vh;
  min-height: 11vh;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.problemContent {
  padding: 2vh 5vh 2vh 2vh;
}

.problem .c1 {
  width: 0;
  height: 0;
  border-left: 7.5vh solid transparent;
  position: absolute;
  top: 0;
  right: 0;
}

.problem .c2 {
  width: 0;
  height: 0;
  border-top: 3vh solid white;
  border-left: 3vh solid transparent;
  position: absolute;
  top: 0;
  right: 0;
}

.problem .c3 {
  top: 1vh;
  right: -1.3vh;
  color: white;
  position: absolute;
  width: 8vh;
  height: 3.6vh;
  line-height: 3.6vh;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg) scale(0.9);
  z-index: 111;
  font-size: 2vw;
  text-align: center;
  letter-spacing: 0.5px;
}

.status-success .c1 {
  border-top: 7.5vh solid #66c661;
}

.status-wait .c1 {
  border-top: 7.5vh solid #d26e7a;
}

.time {
  margin: 2vh 1vh 0 0;
  color: #808080;
  font-size: 12px;
}

.logoDiv {
  margin: 2vh 2vh 1vh 2vh;
}

.logo {
  width: 32px;
}

.answerContent {
  background-color: #fff;
  margin: 0 2vh;
  padding: 2vh;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.doctorName {
  text-align: right;
}
</style>
