<template>
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3" v-for="(item,index) in product" :key="index" >
      <div class="card">
        <div class="cartPic">
          <img alt="product" :src="require('../assets/images/product/' + item.pic)">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">NT$ {{item.price}}</p>
          <button @click="addCart(item.name,item.price)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardParts',
  data() {
    return {
      product:[
        {
          pic:'product01.jpg',
          name:'牛奶',
          price:'100'
        },
        {
          pic:'product02.jpg',
          name:'蘋果',
          price:'100'
        },
        {
          pic:'product03.jpg',
          name:'牛奶',
          price:'100'
        },
        {
          pic:'product04.jpg',
          name:'牛奶',
          price:'100'
        },
        {
          pic:'product04.jpg',
          name:'牛奶',
          price:'100'
        },
      ],
      tobuy:[],
    }
  },
  methods:{
    addCart:function(name,price){
      let cartItem = {name:name,price:price}
      this.$emit('cartItem',cartItem)
    }
  },
  emits:['cartItem']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
