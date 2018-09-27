<template>
  <div class="bgCol">
    <div class="caseReportBg">
      <div class="caseReportContent">

        <div class="inputTitle"><span class="necessary">*</span>就诊日期</div>
        <van-field v-model="date" placeholder="请选择" @focus="showPop(1)" readonly/>
        <van-popup v-model="isShowDate"  position="bottom" :overlay="true">
          <van-datetime-picker type="date"  @cancel="onCancel(1)" @confirm="onConfirmDate" v-model="currentDate" :formatter="formatter"/>
        </van-popup>

        <div class="inputTitle"><span class="necessary">*</span>年龄</div>
        <van-field v-model="age" type="number"/>

        <div class="inputTitle"><span class="necessary">*</span>性别</div>
        <van-field v-model="sex" placeholder="请选择" @focus="showPop(2)" readonly/>
        <van-popup v-model="isShowSex" position="bottom" :overlay="true">
          <van-picker :columns="columnsex" show-toolbar title="性别" @cancel="onCancel(2)" @confirm="onConfirmSex"/>
        </van-popup>

        <div class="inputTitle"><span class="necessary">*</span>分组</div>
        <van-field v-model="groups" placeholder="请选择" @focus="showPop(3)" readonly/>
        <van-popup v-model="isShowPro" position="bottom" :overlay="true">
          <van-picker :columns="columns" show-toolbar title="分组" @cancel="onCancel(3)" @confirm="onConfirm"/>
        </van-popup>

        <div class="inputTitle"><span class="necessary">*</span>主述与病史</div>
        <van-field type="textarea" v-model="condition" rows="5"/>

        <div class="inputTitle"><span class="necessary">*</span>检查检验及诊断</div>
        <van-field type="textarea" v-model="diagnosis"/>

        <div class="inputTitle"><span class="necessary">*</span>治疗方案</div>
        <van-field type="textarea" v-model="treatmentPlan"/>

        <div class="inputTitle">上传资料</div>
        <van-uploader :after-read="onRead">
          <img v-if="imgUrl" :src="imgUrl" class="avatar">
          <van-icon v-else name="photo" size="36px"/>
        </van-uploader>

        <div class="inputTitle">其他信息</div>
        <van-field type="textarea" v-model="otherMsg"/>

        <div class="bottomDiv">
          <van-button type="primary" size="large" @click="submitData">提&nbsp;交</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "casereport",
  data() {
    return {
      date:"",
      age: "",
      sex: "",
      columnsex: ["男", "女"],
      isShowSex: false,
      isShowDate:false,
      isShowPro:false,
      columns: ["金纳多","路犹泰","莉芙敏"],
      groups: "",
      condition: "",
      diagnosis: "",
      treatmentPlan: "",
      imgUrl: "",
      filename:'',
      otherMsg:'',
      currentDate:new Date()
    }
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }else if(type === 'day'){
        return `${value}日`
      }
      return value;
    },
    showPop(type){
      let vm = this;
      switch(type){
        case 1:
          vm.isShowDate = true;
          break;
        case 2:
          vm.isShowSex = true;
          break;
        case 3:
          vm.isShowPro = true;
          break;
      }
    },
    onCancel(type) {
      let vm = this;
      switch(type){
        case 1:
          vm.isShowDate = false;
          break;
        case 2:
          vm.isShowSex = false;
          break;
        case 3:
          vm.isShowPro = false;
          break;
      }
    },
    onConfirm(selected) {
      let vm = this;
      vm.groups = selected;
      vm.isShowPro = false;
    },
    onConfirmSex(selected) {
      let vm = this;
      vm.sex = selected;
      vm.isShowSex = false;
    },
    onConfirmDate(selected) {
      let vm = this;
      let endvalue = new Date(selected);
      let Y = endvalue.getFullYear() + '-';
      let M = (endvalue.getMonth()+1 < 10 ? '0'+(endvalue.getMonth()+1) : endvalue.getMonth()+1)+'-';
      let D = (endvalue.getDate() < 10 ? '0'+(endvalue.getDate()) : endvalue.getDate());

      vm.date = Y+M+D;
      vm.isShowDate = false;
    },
    onRead(imgCon) {
      let vm = this;
      let postData = {};
      postData.img = imgCon.content;
      this.$http({
        method: "post",
        url: vm.$commonTools.g_restUrl,
        params: {
          i: "10",
          c: "entry",
          p: "images",
          do: "shop",
          m: "ewei_shop",
          ac: "add_images"
        },
        data: vm.$qs.stringify(postData)
      })
        .then(function(response) {
          vm.imgUrl = response.data.result.path;
          vm.filename = response.data.result.filename;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    validator() {
      let vm = this;
      let msg = "";
      if (!vm.date) {
        msg = "未选择就诊日期";
      } else if (!vm.age) {
        msg = "未填写年龄";
      } else if (!vm.sex) {
        msg = "未选择性别";
      } else if (!vm.groups) {
        msg = "未选择分组";
      } else if (!vm.condition) {
        msg = "未填写主述与病史";
      } else if (!vm.diagnosis) {
        msg = "未填写检查检验与诊断";
      } else if (!vm.treatmentPlan) {
        msg = "未填写治疗方案";
      }

      if (msg) {
        vm.$toast.fail(msg);
        return false;
      } else {
        return true;
      }
    },
    submitData(){
      let vm = this;
      if(vm.validator()){
        let postData = {};
        postData.visit_time  = vm.date;
        postData.age = vm.age;
        postData.gender  = vm.sex;
        postData.group = vm.groups;
        postData.illness = vm.condition;
        postData.diagnosis = vm.diagnosis;
        postData.programs  = vm.treatmentPlan;
        postData.information  = vm.otherMsg;
        postData.img   = vm.filename;

        this.$http({
          method: "post",
          url: vm.$commonTools.g_restUrl,
          params: {
            i: "10",
            c: "entry",
            p: "case",
            do: "shop",
            m: "ewei_shop",
            ac: "add_case"
          },
          data: vm.$qs.stringify(postData)
        })
          .then(function(response) {
            vm.$toast.success('提交成功！');
            WeixinJSBridge.call('closeWindow');
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style scoped>
.bgCol {
  background-color: #eff1f5;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}

.caseReportBg {
  background-color: #ffffff;
  margin: 2vh;
  border-radius: 5px;
}

.caseReportContent {
  padding: 3vh 5vh;
  max-height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.necessary {
  color: #f44;
}

.bottomDiv {
  margin: 5vh 0;
}

.avatar {
  width: 50%;
}
</style>
