<template>
  <div class="hello">
    <div>
      <h4>用户名</h4>
      <van-field v-model="userName" placeholder="请输入用户名" />
    </div>
    <div>
      <h4>区域</h4>
      <van-cell-group>
        <van-field v-model="area" placeholder="请选择地区" @focus="showArea" />
      </van-cell-group>
      <van-popup v-model="isShowArea" position="bottom" :overlay="false">
        <van-area :area-list="areaList" @cancel="cancel" @confirm="confirm"/>
      </van-popup>
    </div>
    <div>
      <h4>图片上传</h4>
      <van-uploader :after-read="onRead">
        <van-icon name="photograph" />
      </van-uploader>
    </div>
  </div>
</template>

<script>
  import areaList from '../../static/js/area.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName:'',
      areaList:areaList,
      isShowArea: false,
      area:''
    }
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
      this.area = arr[0].name +','+ arr[1].name+',' + arr[2].name;
      this.isShowArea = false;
    },
    onRead(file,content) {
      console.log(file,content)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
