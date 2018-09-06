<template>
 <div class="consut-list">
     
         <van-row type="flex" justify="center">
         <van-col span="22">
             <div class="list-wrapper">
             <div class="list-item">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
             <div class="list-time">哈哈哈</div>
             <div class="rotate-tag status-success">
             <div class="c1"></div>
              <div class="c2"></div>
              <div class="c3" v-if="status == 1">未处理</div>
              <div class="c3" v-if="status == 3">通过</div>
              <div class="c3" v-if="status == 4">未通过</div>
              </div>
             </div>
             
         </van-col>
         </van-row>
         <van-row type="flex" justify="center">
         <van-col span="22">
             <div class="list-wrapper">
             <div class="list-item">哈哈哈</div>
             <div class="list-time">哈哈哈</div>
             <div class="rotate-tag status-wait">
             <div class="c1"></div>
              <div class="c2"></div>
              <div class="c3" v-if="status == 1">未处理</div>
              <div class="c3" v-if="status == 3">通过</div>
              <div class="c3" v-if="status == 4">未通过</div>
              </div>
             </div>
             
         </van-col>
         </van-row>
         <van-row type="flex" justify="center">
         <van-col span="22">
             <div class="list-wrapper">
             <div class="list-item">哈哈哈</div>
             <div class="list-time">2018-1-1 12:00</div>
             <div class="rotate-tag status-refuse">
             <div class="c1"></div>
              <div class="c2"></div>
              <div class="c3" v-if="status == 1">未处理</div>
              <div class="c3" v-if="status == 3">通过</div>
              <div class="c3" v-if="status == 4">未通过</div>
              </div>
             </div>
             
         </van-col>
         </van-row>
    
 </div>
</template>

<script>
export default {
  name: "consultlist",
  data() {
    return {
      status: "3"
    };
  }
};
</script>

<style scoped>
.consut-list {
  background-color: #eff1f5;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.list-wrapper {
  position: relative;
  padding: 1.5vh;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-top: 2vh;
}
.list-item {
  padding: 0.8vh 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-wrap: break-word;
  width: 95%;
  min-height: 3vh;
  max-height: 5vh;
}
.list-time {
  font-size: 0.65rem;
  padding: 0.3rem 0;
  color: #808080;
}
/* 状态 */
.c1 {
  width: 0;
  height: 0;
  border-left: 7.5vh solid transparent;
  position: absolute;
  top: 0;
  right: 0;
}
.c2 {
  width: 0;
  height: 0;
  border-top: 3vh solid white;
  border-left: 3vh solid transparent;
  position: absolute;
  top: 0;
  right: 0;
}

.c3 {
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

.status-refuse .c1 {
  border-top: 7.5vh solid #e6a23c;
}
</style>
