<template>
  <div class="consut-list">
    <van-tabs v-model="active" @change="onClick">
      <van-tab title="我的病例" >
        <card-list-case :tabType="type" :listType='"case"'></card-list-case>
      </van-tab>
      <van-tab title="他人病例">
        <card-list-case :tabType="type" :listType='"case"'></card-list-case>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import cardlistCase from '@/components/cardlistCase.vue'
    export default {
      name: "caseListCase",
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
        'card-list-case': cardlistCase
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
