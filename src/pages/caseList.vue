<template>
  <div class="consut-list">
    <van-tabs v-model="active" @change="onClick">
      <van-tab title="我的病例" >
        <card-list :tabType="type" :listType='"case"'></card-list>
      </van-tab>
      <van-tab title="他人病例">
        <card-list :tabType="type" :listType='"case"'></card-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import cardlist from '@/components/cardlist.vue'
    export default {
      name: "caseList",
      data() {
        return {
          type:0,
          active:0
        }
      },
      methods:{
        onClick(index,title){
          let vm = this;
          vm.type = index;
        }
      },
      components: {
        'card-list': cardlist
      }
    }
</script>

<style scoped>
.consut-list {
  background-color: #eff1f5;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
