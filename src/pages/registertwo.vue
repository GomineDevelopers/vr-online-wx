<template>
  <div class="registerbgCol">
    <div class="registertwobg">
      <div class="registertwoContent">

        <div class="inputTitle"><span class="necessary">*</span>姓名</div>
        <van-field v-model="userName"/>

        <div class="inputTitle"><span class="necessary">*</span>性别</div>
        <van-field v-model="sex" placeholder="请选择" @focus="showSex" />
        <van-popup v-model="isShowSex" position="bottom" :overlay="true">
          <van-picker :columns="columnsex" show-toolbar title="性别" @cancel="onCancelSex" @confirm="onConfirmSex"/>
        </van-popup>

        <div class="inputTitle"><span class="necessary">*</span>所属医院</div>
        <van-field v-model="hospital"/>

        <div class="inputTitle"><span class="necessary">*</span>科室</div>
        <van-field v-model="department"/>

        <div class="inputTitle"><span class="necessary">*</span>所在城市</div>
        <van-field v-model="city" @focus="showArea" />
        <van-popup v-model="isShowArea" position="bottom" :overlay="false">
          <van-area :area-list="areaList" @cancel="cancel" @confirm="confirm" :value="code"/>
        </van-popup>

        <div class="inputTitle">职称</div>
        <van-field v-model="title"/>

        <div class="inputTitle">手机号</div>
        <van-field v-model="mobile"/>

        <div class="inputTitle">邮箱</div>
        <van-field v-model="email"/>

        <van-button type="primary" size="large" @click="submitData">提&nbsp;交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import areaList from '../../static/js/area.js'
    export default {
        name: "registertwo",
      data(){
          return{
            userName:'',
            sex:'',
            isShowSex:false,
            columnsex:['男','女'],
            hospital:'',
            department:'',
            city:'',
            code:'',
            title:'',
            mobile:'',
            email:'',
            areaList:areaList,
            isShowArea:false
          }
      },
      mounted(){
        this.getExistData();
      },
      methods:{
        showArea(){
          let vm = this;
          vm.isShowArea = true;
        },
        cancel(){
          this.isShowArea = false;
        },
        confirm(arr){
          this.city = arr[0].name +','+ arr[1].name+',' + arr[2].name;
          this.code = arr[2].code;
          this.isShowArea = false;
        },
        showSex(){
          let vm = this;
          vm.isShowSex = true;
        },
        onCancelSex(){
          this.isShowSex = false;
        },
        onConfirmSex(selected){
          let vm = this;
          vm.sex = selected;
          vm.isShowSex = false;
        },
        submitData(){
          let vm = this;
          if(vm.validator()){
            vm.setCookies();
          }
        },
        validator(){
          let vm = this;
          let msg = "";
          let regP = /^((13[0-9])|(15[^4])|(166)|(17[0-8])|(18[0-9])|(19[8-9])|(147,145))\d{8}$/;
          let regE = /\w@\w*\.\w/;
          if(!vm.userName){
            msg = "未填写姓名";
          }else if(!vm.hospital){
            msg = "未填写所属医院";
          }else if(!vm.department){
            msg = "未填写科室";
          }else if(!vm.city){
            msg = "未选择所在城市";
          }else if(vm.mobile && !regP.test(vm.mobile)){
            msg = "手机号格式不正确";
          }else if(vm.email && !regE.test(vm.email)){
            msg = "邮箱格式不正确";
          }

          if (msg) {
            vm.$toast.fail(msg);
            return false;
          } else {
            return true;
          }
        },
        setCookies(){
          let vm = this;
          let temp = {};
          if(vm.$commonTools.getCookie("cookieData")){
            temp = JSON.parse(vm.$commonTools.getCookie("cookieData"));
          }
          temp.userName = encodeURI(vm.userName);
          temp.sex = encodeURI(vm.sex);
          temp.hospital = encodeURI(vm.hospital);
          temp.department = encodeURI(vm.department);
          temp.city = encodeURI(vm.city);
          temp.cityCode = vm.code;
          temp.title = encodeURI(vm.title);
          temp.mobile = encodeURI(vm.mobile);
          temp.email = encodeURI(vm.email);

          vm.$commonTools.setCookie("cookieData",JSON.stringify(temp),1);
        },
        getExistData(){
          let vm = this;
          if(vm.$commonTools.getCookie("cookieData")){
            let existData = JSON.parse(decodeURI(vm.$commonTools.getCookie("cookieData")));
            vm.userName = existData.userName;
            vm.sex = existData.sex ? existData.sex:'男';
            vm.hospital = existData.hospital;
            vm.department = existData.department;
            vm.city = existData.city;
            vm.code = existData.cityCode;
            vm.title = existData.title;
            vm.mobile = existData.mobile;
            vm.email = existData.email;
          }
        }
      }
    }
</script>

<style scoped>
  .registerbgCol{
    background-color: #eff1f5;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .registertwobg{
    background-color: #ffffff;
    margin: 2vh;
    border-radius: 5px;
  }

  .registertwoContent{
    padding: 3vh 5vh;
    max-height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .necessary{
    color:#f44;
  }

</style>
