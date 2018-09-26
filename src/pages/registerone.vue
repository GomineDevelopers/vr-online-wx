<template>
  <div>
    <div class="registerbg_header"></div>
    <div class="registeroneContent">
      <div class="logoDiv">
        <img src="../../static/images/registerLogo.png" class="registerLogo"/>
      </div>
      <div class="projectDiv">
        <div class="inputTitle">请选择您的项目名称：</div>
        <van-field v-model="projectName" placeholder="请选择" @focus="showProject" readonly/>
        <van-popup v-model="isShow" position="bottom">
          <van-picker :columns="columns" show-toolbar title="项目名称" @cancel="onCancel" @confirm="onConfirm"/>
        </van-popup>
      </div>
      <div class="bottomDiv">
        <van-button type="primary" size="large" @click="nextStep">下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "registerone",
      data() {
        return {
          columns: ['银杏'],
          isShow:false,
          projectName:'银杏'
        };
      },
      mounted(){
        this.getRegister();
        this.getExistData();
      },
      methods:{
        getRegister(){
          let vm = this;
          vm.$http.get('http://icampaign.com.cn/customers/noob/app/index.php',{
            params: {
              i:"10",
              c:"entry",
              p:"user",
              do:"shop",
              m:"ewei_shop",
              ac:"get_info"
            }
          })
            .then(function (response) {
              if(response.data.result.is_registered == '1'){
                vm.$toast('您已注册，处于待审核状态');
              }else if(response.data.result.is_registered == '2'){
                vm.$toast('您已注册，并且审核已通过');
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        showProject(){
          let vm = this;
          vm.isShow = true;
        },
        onCancel(){
          this.isShow = false;
        },
        onConfirm(selected){
          let vm = this;
          vm.projectName = selected;
          vm.isShow = false;
        },
        nextStep(){
          let vm = this;
          if(vm.validator()){
            vm.setCookies();
            vm.$router.push({name:'registerTwo'});
          }
        },
        validator(){
          let vm = this;
          if(!vm.projectName){
            vm.$toast.fail('未选择项目名称');
            return false;
          }else{
            return true;
          }
        },
        setCookies(){
          let vm = this;
          let temp = {};
          if(vm.$commonTools.getCookie("cookieData")){
            temp = JSON.parse(vm.$commonTools.getCookie("cookieData"));
          }
          temp.project_name = encodeURI(vm.projectName);

          vm.$commonTools.setCookie("cookieData",JSON.stringify(temp),1);
        },
        getExistData(){
          let vm = this;
          if(vm.$commonTools.getCookie("cookieData")){
            let existData = JSON.parse(decodeURI(vm.$commonTools.getCookie("cookieData")));
            vm.projectName = existData.project_name;
          }
        }
      }
    }
</script>

<style scoped>
  .registeroneContent{
    margin-top: 20vh;
  }

  .logoDiv{
    padding: 5vh;
    text-align: center;
  }
  .logoDiv .registerLogo{
    width: 28vh;
  }

  .projectDiv{
    margin: 0 5vh;
  }
  .bottomDiv{
    margin:7vh 5vh;
  }
</style>
