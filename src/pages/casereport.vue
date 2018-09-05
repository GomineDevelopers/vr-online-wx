<template>
  <div class="bgCol">
    <div class="caseReportBg">
      <div class="caseReportContent">
        <div class="inputTitle"><span class="necessary">*</span>年龄</div>
        <van-field v-model="age"/>
        <div class="inputTitle"><span class="necessary">*</span>性别</div>
        <van-field v-model="sex" placeholder="请选择" @focus="showSex" />
        <van-popup v-model="isShowSex" position="bottom" :overlay="true">
          <van-picker :columns="columnsex" show-toolbar title="性别" @cancel="onCancelSex" @confirm="onConfirmSex"/>
        </van-popup>
        <div class="inputTitle">病人组</div>
        <van-field v-model="patientGroup" placeholder="请选择" @focus="showProject" />
        <van-popup v-model="isShow" position="bottom" :overlay="true">
          <van-picker :columns="columns" show-toolbar title="病人组" @cancel="onCancel" @confirm="onConfirm"/>
        </van-popup>
        <div class="inputTitle"><span class="necessary">*</span>病情</div>
        <van-field type="textarea" v-model="condition" rows="5"/>
        <div class="inputTitle"><span class="necessary">*</span>诊断</div>
        <van-field type="textarea" v-model="diagnosis"/>
        <div class="inputTitle"><span class="necessary">*</span>治疗方案</div>
        <van-field type="textarea" v-model="treatmentPlan"/>
        <div class="inputTitle">上传图片</div>
        <van-uploader :after-read="onRead">
          <img v-if="imgUrl" :src="imgUrl" class="avatar">
          <van-icon v-else name="photo" size="36px"/>
        </van-uploader>
        <div class="bottomDiv">
          <van-button type="primary" size="large" @click="">提&nbsp;交</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "casereport",
      data(){
          return{
            age:'',
            sex:'',
            isShowSex:false,
            columnsex:['男','女'],
            columns:['病人组'],
            isShow:false,
            patientGroup:'',
            condition:'',
            diagnosis:'',
            treatmentPlan:'',
            imgUrl:''

          }
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
          vm.patientGroup = selected;
          vm.isShow = false;
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
        onRead(imgCon) {
          let vm = this;
          let postData = {};
          postData.img = imgCon.content;
          this.$http({
            method: 'post',
            url: 'http://192.168.0.132/abc.php',
            data: vm.$qs.stringify(postData)
          })
            .then(function (response) {
              vm.imgUrl = response.data.path;
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
</script>

<style scoped>
  .bgCol{
    background-color: #eff1f5;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .caseReportBg{
    background-color: #ffffff;
    margin: 2vh;
    border-radius: 5px;
  }

  .caseReportContent{
    padding: 3vh 5vh;
    max-height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .necessary{
    color:#f44;
  }

  .bottomDiv{
    margin:5vh 0;
  }

  .avatar{
    width:50%;
  }
</style>
