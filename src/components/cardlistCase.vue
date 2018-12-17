<template>
    <div class="card-list">
      <div v-for="item in listData" @click="goDetail(item)" v-if="mark == 'case'">
        <van-row type="flex" justify="center">
          <van-col span="22">
            <div class="list-wrapper">
              <div class="list-item" v-text="item.illness"></div>
              <div class="list-time">
                <van-row>
                  <van-col span="12"><span v-text="$commonTools.formatDate(item.create_time)"></span></van-col>
                </van-row>
              </div>
              <div class="rotate-tag" :class="[item.check == 1 ? 'status-wait':'status-success']">
                <div class="c1"></div>
                <div class="c2"></div>
                <div class="c3" v-if="item.check == 0">合格</div>
                <div class="c3" v-if="item.check == 1">不合格</div>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
    export default {
      name: "cardlist",
      data() {
        return {
          listData: [],
          mark: '',
          curPage: 1,
          pType: '',
          acType: ''
        };
      },
      props: {
        tabType: '',
        listType: ''
      },
      mounted() {
        let vm = this;
        if (vm.listType == 'case') {
          vm.pType = "case";
          vm.acType = "case_list";
        }
        vm.getCaseList();
      },
      methods: {
        getCaseList() {
          let vm = this;
          this.$http({
            method: "get",
            url: vm.$commonTools.g_restUrl,
            params: {
              i: "10",
              c: "entry",
              p: vm.pType,
              do: "shop",
              m: "ewei_shop",
              ac: vm.acType,
              type: vm.tabType,
              page: 1
            }
          })
            .then(function (response) {
              if (response.data.status == "200") {
                vm.mark = response.data.result.mark;
                vm.listData = response.data.result.list;
              }

            })
            .catch(function (error) {
              console.log(error);
            });

        },
        goDetail(temp) {
          let vm = this;
          if (vm.listType == 'consult') {
            this.$router.push({name: "consultDetail", params: {id: temp}});
          } else if (vm.listType == 'case') {
            if (temp.check == '0') {
              this.$router.push({name: "caseDetail", params: {id: temp.id}});
            } else if (temp.check == '1') {
              vm.$notify('不合格的病例无法查看！');
            }

          }

        }
      }
    }
</script>

<style scoped>
  .card-list{
    height: 91vh;
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
    min-height: 20px;
    max-height: 35px;
  }
  .list-time {
    font-size: 0.8rem;
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
