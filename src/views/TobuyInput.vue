<template>
  <h1>購物筆記</h1>
  <div class="box">
    <div class="inputBox">
      商品名<input type="text" v-model="tobuy">價格<input type="num" v-model="price">
      <button type="button" @click="addTobuy">新增</button> <button type="button" @click="clearTobuy">清除全部</button>
    </div>
    <TobuyItem @removeIndex="removeTobuy" :tobuyslist="tobuys"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TobuyItem from '@/components/TobuyItem.vue'

export default {
  name: 'TobuyInput',
  components: {
    TobuyItem
  },
  data(){
    return {
      tobuy:'',
      price:'',
      tobuys:[],
    }
  },
  methods:{
    addTobuy:function(){
      if(this.tobuy != '' && this.price != '' && isNaN(this.price) == false){
        let TobuyItem = {};
        TobuyItem.name = this.tobuy;
        TobuyItem.price = this.price;
        this.tobuys.push(TobuyItem)
      }else if(this.tobuy == '' || this.price == ''){
        window.alert('請輸入資料');
      }else if(isNaN(this.price) == true){
        window.alert('價格請輸入數字');
      }
    },
    removeTobuy:function(index){
      this.tobuys.splice(index,1)
    },
    clearTobuy:function(){
      this.tobuys = [];
    },
  }
}
</script>

<style lang="scss">
  .box{
    padding: 20px 0;
    .inputBox{
      width: 50%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      input{
        border: none;
        box-shadow:0 0 3px #3337;
        height: 24px;
      }
      button{
        border: none;
        background:rgb(68, 124, 255);
        font-weight: 600;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        margin: 0 5px ;
      }
    }
  }
</style>
