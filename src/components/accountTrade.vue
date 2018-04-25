<template>
    <div class="all">
        <div class="main">
            <div class="accountTrade">
                <div class="titles">
                    <span>我的交易</span>
                </div>
                <div class="content clearfix">
                    <div class="left">
                        <div class="left_top">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwNkU5RTFEN0IyNDExRTdCMTIxRkM1NjgwODc2MjQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwNkU5RTFFN0IyNDExRTdCMTIxRkM1NjgwODc2MjQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzA2RTlFMUI3QjI0MTFFN0IxMjFGQzU2ODA4NzYyNDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzA2RTlFMUM3QjI0MTFFN0IxMjFGQzU2ODA4NzYyNDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz44JSDSAAAQRklEQVR42uxd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" alt="">
                            <p>张超来测试一下名...</p>
                        </div>
                        <div class="left_middle">
                            <dl>
                                <dd>渠道基本信息</dd>
                                <dd>账户基本信息</dd>
                                <dd>我的交易记录</dd>
                                <dd>审批模式设置</dd>
                            </dl>
                        </div>
                        <div class="left_bottom">
                            <p>剩余情报点数</p>
                            <p>
                                <em>{{remain_amount}}</em>点</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">我的交易记录</div>
                        <ul>
                            <li v-for="(item,index) in accOrderInfo" :key="index">
                                <div class="le">
                                    <span>监控</span>
                                    <span>订阅</span>
                                </div>
                                <div class="mi">
                                    <p>
                                        <span>{{item.approve_date}}</span> --
                                        <span> {{item.approve_username}} </span>
                                    </p>
                                    <!-- <p v-for="(itemm,indexx) in item.product_lines" :key="indexx">{{itemm.entname}}</p> -->
                                </div>
                                <div class="ri">
                                    <div class="dot">
                                        <p class="point">-1</p>
                                        <p>支出点数</p>
                                    </div>
                                    <div class="result">
                                        <span>成功</span>
                                    </div>
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
import {  ajax } from "../common";
export default {
    data(){
        return{
        remain_amount:'',
        accOrderInfo:[],
        product_lines:[]
        }
    },
    components:{},
    created(){
        this.getUserInfo();
        this.getAccountTrade()
    },
    methods:{
        getUserInfo(){
            const _self=this;
            const params={
                url:'/api/account/getAccountInfo',
                params:{}
            };
            ajax.get(params).then((res)=>{
                _self.remain_amount=res.data.data.remain_amount;
            })
        },
        getAccountTrade(){
            const _self=this;
            const params={
                url:'/api/account/getOrderList',
                params:{
                    offset:1,
                    limit:10
                    }
            }
            ajax.get(params).then((res)=>{
                _self.accOrderInfo=res.data.data;
                // _self.product_lines=_self.accOrderInfo.product_lines;
                // console.log(_self.product_lines)
            })
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/common.scss";
@import "../assets/css/accountTrade.scss";
</style>
