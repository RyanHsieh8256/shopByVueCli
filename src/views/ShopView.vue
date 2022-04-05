<template>
  <div>
    <h1>商城</h1>
  </div>
  <div class="shopBtnBox">
    <button v-for="tab in tabs" :key="tab" :class="['shopBtn', { active: currentTab === tab }]" @click="currentTab = tab">
      {{ tab }}
    </button>
  </div>
  <ProductCard v-if="currentTabComponent == '商城'" @cartItem="addToCart"/>
  <TobuyItem v-if="currentTabComponent == '購物車'" @removeIndex="removeTobuy" :tobuyslist="tobuys"/>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
import TobuyItem from '@/components/TobuyItem.vue'

export default {
  name: 'ShopView',
  data(){
    return {
      tobuys:[],
      currentTab: '商城',
      tabs: ['商城', '購物車']
    }
  },
  components: {
    ProductCard,
    TobuyItem
  },
  methods:{
    addToCart:function(cartItem){
      this.tobuys.push(cartItem)
      console.log(this.tobuys)
    },
    removeTobuy:function(index){
      this.tobuys.splice(index,1)
    },
    clearTobuy:function(){
      this.tobuys = [];
    },
  },
  computed: {
    currentTabComponent() {
      return `${ this.currentTab}`;
    }
  }
}
</script>
<style lang="scss">
  .shopBtnBox{
    margin: auto;
    text-align: center;
    .shopBtn{
      width: 50%;
      padding: 20px 0;
      margin: 0;
      text-align: center;
      background-color: #3333;
      border-radius:0 ;
      border: none;
    }
    .active{
      background-color: rgb(117, 181, 255);
    }
  }
</style>