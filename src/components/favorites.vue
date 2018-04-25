<template>
    <div class="all">
        <div class="main">
            <div class="favorites">
                <div class="titles">
                    <span>监控列表</span>
                    <div class="badge">
                        <div class="tag">
                            <strong>{{monitor_count}}</strong>
                            <span>已监控的企业</span>
                        </div>
                        <div class="tag">
                            <strong>{{collection_count}}</strong>
                            <span>已收藏的企业</span>
                        </div>
                    </div>
                    <p class="filtered">已筛选></p>
                </div>
                <div class="bottom">
                    <div class="screen clearfix">
                        <div class="left">
                            <div class="operate">企业组别</div>
                            <div class="operate">监控状态</div>
                            <div class="search"><input type="text" placeholder="搜索企业"></div>
                        </div>
                    </div>
                    <div class="tables">
                        <table>
                            <thead>
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td>企业名称</td>
                                    <td>企业组别</td>
                                    <td>收藏日期</td>
                                    <td>监控有效期至</td>
                                    <td>监控剩余天数</td>
                                    <td>监控状态</td>
                                    <td>收藏状态</td>                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in moco_list" :key="index">
                                    <td><input type="checkbox" name="" id=""></td>
                                    <td>{{item.entname}}</td>
                                    <td>{{item.group_name}}</td>
                                    <td>{{item.created_date}}</td>
                                    <td>{{item.end_expiry_date}}</td>
                                    <td>
                                        <span>{{item.remain_day}}</span><a href="#">立即续期</a>
                                    </td>
                                    <td><span  class="btn">已监控</span></td>
                                    <td><span class="btn">已收藏</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { ajax } from "../common";
export default {
    data(){
        return {
            monitor_count:'',
            collection_count:'',
            moco_list:[]
        }
    },
    created(){
        this.getCount();
        this.getMocoList();
    },
    methods:{
        getCount(){
            const _self=this;
            const params={
                url:'/api/monitormanager/collectionMonitorTotal',
                params:{
                }
            };
            ajax.get(params).then((res)=>{
                _self.monitor_count=res.data.data.monitor_count;
                _self.collection_count=res.data.data.collection_count;
            })
        },
        getMocoList(){
            const _self=this;
            const params={
                url:'/api/monitormanager/collectionMonitorList',
                params:{
                    keyword:'',
                    status:'',
                    limit:10,
                    type:'',
                    offset:1,
                    sort_field:1,
                    sort_by:-1
                }
            };
            ajax.get(params).then((res)=>{
                _self.moco_list=res.data.data;
                console.log(_self.moco_list)
            })
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/common.scss";
@import "../assets/css/favorites.scss";
</style>
