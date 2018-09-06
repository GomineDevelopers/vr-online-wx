<template>
 <div class="consut-list">
     <van-row type="flex" justify="center">
     <van-col span="22">
       <div class="list-wrapper" v-for="item in listData">
         <div class="list-item" v-text="item.problem"></div>
         <div class="list-time" v-text="$commonTools.formatDate(item.create_time)"></div>
         <div class="rotate-tag" :class="[item.status == 0 ? 'status-wait':'status-success']">
          <div class="c1"></div>
          <div class="c2"></div>
          <div class="c3" v-if="item.status == 0">未回复</div>
          <div class="c3" v-if="item.status == 1">已回复</div>
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
      listData:[],
    };
  },
  mounted(){
    this.getListData();
  },
  methods:{
    getListData(){
      let vm = this;
      this.$http({
        method: 'get',
        url: 'http://192.168.0.5/noob/app/index.php',
        params:{
          i: '8',
          c: 'entry',
          p: 'advisory',
          do: 'shop',
          m: 'ewei_shop',
          ac:'list_advisory'
        },
      })
        .then(function (response) {
          if(response.data.status == '200'){
            vm.listData = response.data.result;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
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
  width: 94%;
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

</style>
