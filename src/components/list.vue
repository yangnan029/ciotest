<template>
<div class="list">
    <ul>
        <router-link tag="li" to="index">企业查询</router-link>
        <router-link tag="li" to="monitorList">企业监控</router-link>
        <router-link tag="li" to="favorites">监控与收藏夹</router-link>        
                
        <li>
            <dl>
        <router-link tag="dd" to="accountTrade">我的交易</router-link>
        <router-link tag="dd" to="groupManager">组别管理</router-link>
        <router-link tag="dd" to="news">新闻通知</router-link>
        <router-link tag="dd" to="userManager">用户管理</router-link>
            </dl>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import "../assets/css/common.scss";
@import "../assets/css/list.scss";
</style>
