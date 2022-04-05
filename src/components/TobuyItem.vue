<template>
    <ol class="tobuyList">
        <li v-for="(item,index) in tobuyslist" :key="index">{{index + 1}}.{{item.name}}價格:{{item.price}}元
            <button @click="getRemoveIndex(index)">刪除</button>
        </li>
    </ol>
    <div class="empty" v-if="tobuyslist.length == 0">您的購物清單是空的</div>
</template>
<script>
export default {
    name: 'TodoItem',
    props: {
        tobuyslist:Array
    },
    methods:{
        getRemoveIndex:function(index){
            this.$emit('removeIndex', index)
        }
    },
    emits:['removeIndex']
}
</script>
<style lang="scss">
.empty{
    text-align: center;
    padding: 50px 0;
    font-size: 30px;
    font-weight: 600;
}
</style>