<template>
  <div class="bgCol">
    <div v-if="showDiv" class="caseReportBg">
      <div class="caseReportContent">

        <div class="inputTitle">
          <span class="necessary">*</span>就诊登记时间
          <van-button
            size="mini"
            type="primary"
            plain
            @click="goList"
          >病例列表</van-button>
        </div>
        <van-field
          v-model="date"
          placeholder="请选择"
          @focus="showPop(1)"
          readonly
        />
        <van-popup
          v-model="isShowDate"
          position="bottom"
          :overlay="true"
        >
          <van-datetime-picker
            type="date"
            @cancel="onCancel(1)"
            @confirm="onConfirmDate"
            v-model="currentDate"
            :formatter="formatter"
          />
        </van-popup>

        <div class="inputTitle"><span class="necessary">*</span>患者年龄</div>
        <van-field
          v-model="age"
          type="number"
        />

        <div class="inputTitle"><span class="necessary">*</span>患者性别</div>
        <van-field
          v-model="sex"
          placeholder="请选择"
          @focus="showPop(2)"
          readonly
        />
        <van-popup
          v-model="isShowSex"
          position="bottom"
          :overlay="true"
        >
          <van-picker
            :columns="columnsex"
            show-toolbar
            title="性别"
            @cancel="onCancel(2)"
            @confirm="onConfirmSex"
          />
        </van-popup>

        <div class="inputTitle"><span class="necessary">*</span>分组</div>
        <van-field
          v-model="groups"
          placeholder="请选择"
          @focus="showPop(3)"
          readonly
        />
        <van-popup
          v-model="isShowPro"
          position="bottom"
          :overlay="true"
        >
          <van-picker
            :columns="columns"
            show-toolbar
            title="分组"
            @cancel="onCancel(3)"
            @confirm="onConfirm"
          />
        </van-popup>

        <div class="inputTitle">
          <!--<van-row
            type="flex"
            align="center"
            justify="space-between"
          >
            <van-col span="12"><span class="necessary">*</span>主诉与既往史</van-col>
            <van-col span="2">
              <img
                src="../../static/images/down.png"
                v-show="isShow"
                @click="changeShow"
                class="imgTrans"
                style="width:16px;"
              />
              <img
                src="../../static/images/down.png"
                v-show="!isShow"
                @click="changeShow"
                style="width:16px;"
              />
            </van-col>
          </van-row>-->
          <span class="necessary">*</span>主诉与既往史
          <span
            class="subTitle"
          >(主诉指首次就诊时出现的症状，例如剧烈旋转、眼振、恶心、呕吐、出汗、面色苍白、耳鸣、耳聋、平衡障碍、听觉障碍、感知障碍等。既往史指曾患有相关疾病，包括高血压、耳石症、梅尼埃症、埃尔茨海默症、突发性耳聋、老年性耳聋等。如果曾经治疗，应提供治疗史，包括治疗方法、起止时间)</span>
        </div>
        <van-field
          type="textarea"
          v-model="condition"
          rows="5"
        />

        <div class="inputTitle">
          <span class="necessary">*</span>辅助检查及初步诊断
          <span class="subTitle">(提供辅助检查主要指标结果，包括听力检查、前庭功能检查、颞骨CT、内听道MR、MMSE、HDS、HDS)</span>
        </div>
        <van-field
          type="textarea"
          v-model="diagnosis"
        />

        <div class="inputTitle">
          <span class="necessary">*</span>治疗方案
          <span class="subTitle">(应包括治疗中所有的治疗方式、药物及服用剂量、服用时间)</span>
        </div>
        <van-field
          type="textarea"
          v-model="treatmentPlan"
        />

        <div class="inputTitle">上传资料
          <span class="subTitle">(相关检查数据，不得透露病人个人信息)</span>
        </div>
        <van-uploader :after-read="onRead">
          <img
            v-if="imgUrl"
            :src="imgUrl"
            class="avatar"
          >
          <van-icon
            v-else
            name="photo"
            size="36px"
          />
        </van-uploader>

        <div class="inputTitle">随访情况
          <span class="subTitle">(一周后复诊或随访，病人具体哪些症状治愈、改善、未改善)</span>
        </div>
        <van-field
          type="textarea"
          v-model="otherMsg"
        />

        <div class="bottomDiv">
          <van-button
            type="primary"
            size="large"
            @click="submitData"
          >提&nbsp;交</van-button>
        </div>
      </div>
    </div>
    <div v-if="!showDiv" class="noContent">
      <div class="noContent_logo">
        <img src="../../static/images/nocontent_logo.png">
        <div class="noContent_texts">抱歉，病例项目I期已于1月28日结束，<br>II期即将启动，敬请关注</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "casereport",
  data() {
    return {
      date: "",
      age: "",
      sex: "",
      columnsex: ["男", "女"],
      isShowSex: false,
      isShowDate: false,
      isShowPro: false,
      isShow: true,
      columns: ["金纳多", "路犹泰", "莉芙敏"],
      groups: "",
      condition: "",
      diagnosis: "",
      treatmentPlan: "",
      imgUrl: "",
      filename: '',
      otherMsg: '',
      currentDate: new Date(),
      activeNames: ['1'],
      showDiv:false
    }
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      }
      return value;
    },
    showPop(type) {
      let vm = this;
      switch (type) {
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
      switch (type) {
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
      let M = (endvalue.getMonth() + 1 < 10 ? '0' + (endvalue.getMonth() + 1) : endvalue.getMonth() + 1) + '-';
      let D = (endvalue.getDate() < 10 ? '0' + (endvalue.getDate()) : endvalue.getDate());

      vm.date = Y + M + D;
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
        .then(function (response) {
          vm.imgUrl = response.data.result.path;
          vm.filename = response.data.result.filename;
        })
        .catch(function (error) {
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
      } else if (vm.condition && vm.condition.length < 20) {
        msg = "主述与病史不能少于20字";
      } else if (!vm.diagnosis) {
        msg = "未填写检查检验与诊断";
      } else if (vm.diagnosis && vm.diagnosis.length < 20) {
        msg = "检查检验与诊断不能少于20字";
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
    submitData() {
      let vm = this;
      if (vm.validator()) {
        let postData = {};
        postData.visit_time = vm.date;
        postData.age = vm.age;
        postData.gender = vm.sex;
        postData.group = vm.groups;
        postData.illness = vm.condition;
        postData.diagnosis = vm.diagnosis;
        postData.programs = vm.treatmentPlan;
        postData.information = vm.otherMsg;
        postData.img = vm.filename;

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
          .then(function (response) {
            vm.$toast.success('提交成功！');
            WeixinJSBridge.call('closeWindow');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    goList() {
      let vm = this;
      /*if(vm.isAdvisory == 0){
        vm.$toast('您还未有病例咨询记录！');
      }else if(vm.isAdvisory == 1){
        vm.$router.replace({ name: "consultList" });
      }*/
      vm.$router.push({ name: "caseList" });
    },
    changeShow() {
      this.isShow = !this.isShow;
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

.subTitle {
  font-weight: 500;
  font-size: 12px;
  color: #999999;
}

.imgTrans {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}

  .noContent{
    background-image: url("../../static/images/nocontent_bg.png");
    background-size: 100% 100%;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .noContent_logo{
    position: absolute;
    left: 50%;
    top: 36%;
    transform: translate(-50%, -50%);
    width: 80vw;
    text-align: center;
  }

  .noContent_logo img{
    width: 50vw;
  }

  .noContent_texts{
    color:#7f7b7b;
    padding-top: 2vh;
  }
</style>
