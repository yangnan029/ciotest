<template>
    <div class="all">
        <div class="main">
            <div class="monitorList">
                <div class="titles">
                    <span>监控列表</span>
                    <span class="settings">推送设置</span>
                </div>
                <div class="content">
                    <div class="icons clearfix">
                        <div class="icon_left">
                            <span class="active">监控列表</span>
                            <span>风险事件</span>
                            <span>新闻舆情</span>
                        </div>
                        <div class="badge">
                            <div class="tag">
                                <strong>{{today_used}}</strong>
                                <span>今日已处理</span>
                            </div>
                            <div class="tag">
                                <strong>{{today_new}}</strong>
                                <span>今日新增量</span>
                            </div>
                            <div class="tag">
                                <strong>{{remaining_untreated}}</strong>
                                <span>剩余未处理</span>
                            </div>
                        </div>
                    </div>
                    <p class="filtered">已筛选></p>
                    <div class="bottom">
                        <div class="screen clearfix">
                            <div class="left">
                                <div class="operate">企业组别</div>
                                <div class="search"><input type="text" placeholder="搜索企业"></div>
                            </div>
                            <div class="right"><input type="checkbox" name="" id="">
                                <span>只显示未读</span>
                            </div>
                        </div>
                        <div class="tables">
                            <table>
                                <thead>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>监控开始日期</td>
                                        <td>企业名称</td>
                                        <td>企业组别</td>
                                        <td class="noe">企业计划(未读/合计)</td>
                                        <td>最后一次事件日期</td>
                                        <td>快速操作</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in monitorList" :key="index">
                                        <td><input type="checkbox" name="" id=""></td>
                                        <td>{{item.begin_expiry_date}}</td>
                                        <td>{{item.entname}}</td>
                                        <td>{{item.group_name}}</td>
                                        <td>
                                            <div class="occupy-wrap">
                                                <div class="occupy">
                                                    <span class="title">危险</span>
                                                    <span class="progressbar"></span>
                                                    <span class="bar__outer">00/00</span>
                                                </div>
                                                <div class="occupy">
                                                    <span class="title">注意</span>
                                                    <span class="progressbar"></span>
                                                    <span class="bar__outer">00/00</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{{item.last_event_date==''?'-':item.last_event_date}}</span>
                                        </td>
                                        <td>
                                            <span>危险</span>
                                            <span>监控</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import {ajax} from "../common"
export default {
    data(){
        return {
            monitorList:[],
            remaining_untreated:'',
            today_new:'',
            today_used:''
        }
    },
    created(){
        this.getMonitorList();
        this.getMonitorNum();
    },
    methods:{
        getMonitorList(){
            const _self=this;
            const params={
                url:'/api/monitor/monitorList',
                params:{
                    keyword:'',
                    type:1,
                    limit:10,
                    offset:1,
                    status:false,
                    sort_field:'begin_expiry_date',
                    sort_by:-1,
                    countType:''
                }
            }
            ajax.get(params).then((res)=>{
                _self.monitorList=res.data.data;
            })
        },
        getMonitorNum(){
            const _self=this;
            const params={
                url:'/api/monitor/monitorTotal',
                params:{
                    keyword:'',
                    type:1,
                    limit:10,
                    offset:1,
                    status:false,
                    sort_field:'begin_expiry_date',
                    sort_by:-1,
                    countType:''
                }
            };
            ajax.get(params).then((res)=>{
                console.log(res.data.data)
                _self.remaining_untreated=res.data.data.remaining_untreated;
                _self.today_new=res.data.data.today_new;
                _self.today_used=res.data.data.today_used;
            })
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/monitorList.scss";
@import "../assets/css/common.scss";
</style>
