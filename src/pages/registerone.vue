<template>
  <div>
    <div class="registerbg_header"></div>
    <div class="registeroneContent">
      <div class="logoDiv">
        <img src="../../static/images/registerLogo.png" class="registerLogo"/>
      </div>
      <div class="projectDiv">
        <div class="inputTitle">请选择您的项目名称：</div>
        <van-field v-model="projectName" placeholder="请选择" @focus="showProject" />
        <van-popup v-model="isShow" position="bottom" :overlay="true">
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
          projectName:''
        };
      },
      methods:{
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
        }
      }
    }
</script>

<style scoped>
  .registeroneContent{
    margin-top: 18vh;
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
