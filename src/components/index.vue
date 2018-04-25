<template>
    <div class="all">
        <div class="main">
            <div class="index">
                <div class="title">
                    <h4>企业查询</h4><button @click="offset++">翻offset={{offset}}页{{arr.slice(4*(offset-1),4*offset)}}</button>
                </div>
                <div class="search"><input type="text" placeholder="请输入企业名称" v-model="input_name"><span @click="getSearchList" class="searBtn"></span>
                </div>
                <p><a href="#">查询更多条件</a></p>
            </div>
            <div class="search_result" v-show="showed">
                <div class="more_filter">
                    <span class="name">过滤条件</span>
                    <i>/</i>
                    <span>企业区域</span>
                    <span>企业行业</span>
                    <span>成立年限</span>
                    <span>企业状态</span>
                    <span>企业类型</span>
                </div>
                <div class="results">
                    <div class="top clearfix">
                        <div class="left">
                            <span>查询列表</span><input type="text" placeholder="默认排序">
                        </div>
                        <div class="depth_search">没有想要的查询结果？<button>深度搜索</button></div>
                    </div>
                    <div class="items">
                        <ul>
                            <li v-for="(item,index) in searchList" :key="index">
                                <div class="logo"><img src="https://sandbox.cio.company/static/img/logo.06fa5a5.png" alt=""></div>
                                <div class="info">
                                    <h5><a href="#">{{item.ENTNAMEWS}}</a><span>{{item.ENTSTATUSDESC}}</span></h5>
                                    <p>法定代表人: <span>{{item.LEGALPERSON}}</span> 成立日期：<span>{{item.ESDATE}}</span> 注册资本: <span>{{item.REGCAP+item.REGCAPCUR}}</span></p>
                                    <p>公司类型：</p>
                                    <p>公司地址： <span>{{item.OPLOC}}</span></p>
                                    <p>历史名称：<span>{{item.ENTNAME}}</span></p>
                                </div>
                                <div class="options">
                                    <button class="collect">已收藏</button><button class="monitor">已监控</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import config from "../config";
import { storageManager, ajax } from "../common";
export default {
    data(){
        return{
            showed:false,
            searchList:[],
            input_name:'',
            offset:1,
            arr:[1,2,3,4,5,6,7,8,9,10],
        }
    },
    components:{

    },
    methods:{
        getSearchList(){
            const _self=this;
            console.log(_self.input_name);
            _self.showed=true;
            const params ={
                url:'/api/enterprise/search',
                params:{
                    keyword:_self.input_name,
                    esdate:0,
                    entstatus:'',
                    enttype:'',
                    industryphy:'',
                    limit:10,
                    offset:1,
                    orderby:0
                }
            };
            ajax.get(params).then((res)=>{
                _self.searchList=res.data.data.items;
            })
        }
    }
  
}
</script>
<style lang="scss" scoped>
@import "../assets/css/index.scss";
@import "../assets/css/common.scss";
.searBtn{
    background: #7087a3 url('../assets/images/search.png') no-repeat center;
    background-size: 80% 80%;

}
</style>
