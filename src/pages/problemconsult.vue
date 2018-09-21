<template>
 <div class="problemConsult">
  <div class="probleconsult_header">
      <div class="title">
          <van-row type="flex" justify="center">
            <van-col span="24" v-text="consultUserName"></van-col>
          </van-row>
      </div>
  </div>
  <div class="problemConsult-content">
      <van-row type="flex" justify="center" class="row-wrapper">
        <van-col span="20">
            <van-row type="flex">
                <van-col span="12"> <div class="sub-title">问题咨询</div> </van-col>
                <van-col span="12"><van-button class="consult-record" type="primary" plain @click="goList">咨询记录</van-button></van-col>
            </van-row>
        </van-col>
        </van-row>
        <van-row type="flex" justify="center" class="row-wrapper">
        <van-col span="20">
            <van-row type="flex">
                <van-col span="24"> <div class="sub-comment">请填写您的问题并提交</div> </van-col>
            </van-row>
        </van-col>

      </van-row>
      <van-row type="flex" justify="center" class="row-wrapper">
        <van-col span="20">
            <van-row type="flex">
                <van-col span="24">
                  <textarea class="consult-inputBox" v-model="problemContent" maxlength="400"  placeholder="请输入您的问题~"></textarea>
                   <div class="count">
                       <span v-text="problemContent.length"></span>
                       <span>/</span>
                       <span>400</span>
                   </div>
                </van-col>
            </van-row>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" class="row-wrapper bottom-button">
         <van-col span="20">
            <div class="bottomDiv">
              <van-button type="primary" size="large" @click="submitData">提&nbsp;交</van-button>
            </div>
        </van-col>
      </van-row>
  </div>
 </div>
</template>

<script>
export default {
  name: "problemconsult",
  data() {
    return {
      consultUserName: "",
      problemContent: "",
      isAdvisory:""
    };
  },
  mounted() {
    this.getRealName();
  },
  methods: {
    getRealName() {
      let vm = this;
      this.$http.get(vm.$commonTools.g_restUrl, {
          params: {
            i: "10",
            c: "entry",
            p: "user",
            do: "shop",
            m: "ewei_shop",
            ac: "get_info"
          }
        })
        .then(function(response) {
          if (response.data.status == "200") {
            vm.consultUserName = response.data.result.realname;
            vm.isAdvisory = response.data.result.is_advisory;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submitData() {
      let vm = this;
      if (vm.validator()) {
        let postData = {};
        postData.problem = vm.problemContent;
        this.$http({
          method: "post",
          url: vm.$commonTools.g_restUrl,
          params: {
            i: "10",
            c: "entry",
            p: "advisory",
            do: "shop",
            m: "ewei_shop",
            ac: "add_advisory"
          },
          data: vm.$qs.stringify(postData)
        })
          .then(function(response) {
            if (response.data.status == "200") {
              vm.$router.replace({ name: "consultList" });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    validator() {
      let vm = this;
      if (!vm.problemContent) {
        vm.$toast.fail("未填写问题内容");
        return false;
      } else {
        return true;
      }
    },
    goList() {
      let vm = this;
      if(vm.isAdvisory == 0){
        vm.$toast('您还未有病例咨询记录！');
      }else if(vm.isAdvisory == 1){
        vm.$router.replace({ name: "consultList" });
      }
    }
  }
};
</script>

<style scoped>
.problemConsult .title {
  text-align: center;
  height: 10vh;
  line-height: 10vh;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}
.problemConsult .problemConsult-content {
  margin-top: 15vh;
}
.problemConsult .row-wrapper {
  margin: 1vh 0;
  position: relative;
}
.problemConsult .sub-title {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-align: center !important;
  color: #333333;
  font-weight: bold;
}
.problemConsult.sub-comment {
  font-size: 1rem;
}
.problemConsult .consult-record {
  border-radius: 5px;
  height: 35px;
  line-height: 35px;
  text-align: right;
  float: right;
}
.problemConsult .consult-inputBox {
  height: 40vh;
  margin-top: 1vh;
  border: 1px dashed #ccc;
  border-radius: 5px;
  width: 100%;
}
.problemConsult .bottom-button {
  margin-top: 3vh;
}
.problemConsult .count {
  width: 60px;
  position: absolute;
  text-align: right;
  color: #b2b2b2;
  right: 8vw;
  bottom: 6px;
}
</style>
