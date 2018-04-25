<template>
    <div class="title">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="more">
            <img src="../assets/images/more.png" alt="">
        </div>
        <div class="user-info">
            <span><img src="../assets/images/red.png" alt=""></span>
            <span><img src="../assets/images/yellow.png" alt=""></span>
            <span><img src="../assets/images/touxiang.png" alt=""></span>
            <span>阿里巴巴</span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    // props:['xx'],
    props: ['parentMessage'],

    data(){
        return {
            // header:10
        }
    },
    mounted(){
              this.$emit('childEvent', { name: 'zhangsan', age:  10 });

    },
    methods:{
//         xxx(){
// this.$emit('yyy',100)
//         }

    }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/common.scss";
@import "../assets/css/header.scss";
</style>
