<template>
    <div class="bgCol">
      <div class="problem" :class="[detailData.check == 1 ? 'status-wait':'status-success']">
        <div class="problemContent">
          <div class="wordBreak" v-text="detailData.illness"></div>
          <van-row type="flex" justify="space-between">
            <van-col span="12">
              <div class="font1" v-text="detailData.citys"></div>
            </van-col>
            <van-col span="9">
              <div class="font1" v-text="$commonTools.formatDate(detailData.create_time)"></div>
            </van-col>
          </van-row>
        </div>
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3" v-if="detailData.check == '0'">合格</div>
        <div class="c3" v-if="detailData.check == '1'">不合格</div>
      </div>

      <div class="caseCard font1">
        <van-row class="caseCardRow">
          <van-col span="17">
            <span>就诊时间：</span>{{$commonTools.formatDate(detailData.visit_time)}}
          </van-col>
          <van-col span="7">
            <span>年龄：</span>{{detailData.age}}
          </van-col>
        </van-row>
        <van-row>
          <van-col span="17">
            <span>分&emsp;&emsp;组：</span>{{detailData.group}}
          </van-col>
          <van-col span="7">
            <span>性别：</span>{{detailData.gender}}
          </van-col>
        </van-row>
      </div>

      <div class="caseTitle">
        <van-tag mark plain type="primary">检查检验及诊断</van-tag>
      </div>
      <div class="caseCard">
        <span v-text="detailData.diagnosis"></span>
      </div>

      <div class="caseTitle">
        <van-tag mark plain type="success">治疗方案</van-tag>
      </div>
      <div class="caseCard">
        <span v-text="detailData.programs"></span>
      </div>

      <div class="caseTitle" v-if="detailData.information">
        <van-tag mark plain type="danger">随访情况</van-tag>
      </div>
      <div class="caseCard" v-if="detailData.information">
        <span v-text="detailData.information"></span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "caseDetail",
      data(){
          return{
            detailData: ""
          }
      },
      mounted(){
        this.getDetailData();
      },
      methods:{
        getDetailData(){
          let vm = this;
          this.$http({
            method: "get",
            url: vm.$commonTools.g_restUrl,
            params: {
              i: "10",
              c: "entry",
              p: "case",
              do: "shop",
              m: "ewei_shop",
              ac: "case_detail",
              id: vm.$route.params.id
            }
          })
            .then(function(response) {
              if (response.data.status == "200") {
                vm.detailData = response.data.result;
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    }
</script>

<style scoped>
  .bgCol {
    background-color: #eff1f5;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .problem {
    text-align: left;
    background: #ffffff;
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

  .font1 {
    margin: 1vh 0 0 0;
    color: #808080;
    font-size: 12px;
  }
  .wordBreak {
    word-break: break-all;
  }

  .caseCard {
    background-color: #fff;
    margin: 1vh 2vh 2vh 2vh;
    padding: 2vh;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .caseCardRow{
    padding-bottom: 1vh;
  }

  .caseTitle{
    padding: 0 0 1vh 2vh;
  }
</style>
