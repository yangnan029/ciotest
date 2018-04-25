<template>
    <div class="all">
        <c-header></c-header>
        <div class="main clearfix">
            <c-list></c-list>
            <div class="noticeConsume">
                <div class="titles">
                    <span>通知中心</span>
                </div>
                <div class="content">
                    <div class="icons clearfix">
                        <div class="icon_left">
                            <span>系统通知</span>
                            <span class="active">交易通知</span>
                            <span>业务通知</span>
                        </div>
                        <div class="icon_right">
                            <span>show1</span>
                            <span>show2</span>
                        </div>
                    </div>
                    <div class="top clearfix">
                        <div class="top_left">
                            <span>通知列表</span>
                        </div>
                        <div class="top_right">
                            <span><input type="checkbox" name="" id="">只显示未读</span>
                            <span class="reflash">刷新</span>
                        </div>
                    </div>
                    <div class="bottom clearfix">
                        <div class="items clearfix" v-for="(itemm,index) in notifyList" :key="index">
                            <div class="items_left">
                                <input type="checkbox" name="" id="">
                            </div>
                            <div class="items_right">
                                <div class="item_tit">
                                    <span>{{itemm.title}}</span>
                                    <button @click="showDetail(index)">查看详情</button>
                                </div>
                                <div class="item_content">
                                    <p>通知时间
                                        <span>2018-04-10 18:18</span>
                                    </p>
                                    <p class="details">{{itemm.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="details" v-show="showed">
            <div class="details_box">
                <div class="details_top clearfix">
                    <span class="tit">详情</span>
                    <span class="del" @click="isHide">X</span>
                </div>
                <div class="details_content">
                    <div class="top">
                        <p>订单编号：
                            <span>{{orderInfo.order_no}}</span>
                        </p>
                        <p>业务类型：
                            <span>{{orderInfo.order_type}}</span>
                        </p>
                    </div>
                    <div class="table1">
                        <table>
                            <thead>
                                <tr>
                                    <td>流水号</td>
                                    <td>监控订阅的企业</td>
                                    <td>订阅月份数</td>
                                    <td>实付点数</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in product_lines" :key="index">
                                    <td>{{item.line_no}}</td>
                                    <td>{{item.entname}}</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>合计</td>
                                    <td></td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <td>订单创建时间</td>
                                    <td>系统受理时间</td>
                                    <td>实际交易人 (姓名)</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2018-04-11 22:20</td>
                                    <td>2018-04-11 22:20</td>
                                    <td>{{orderInfo.created_username}}</td>
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
import cHeader from "./header.vue";
import cList from "./list.vue";
import axios from "axios";
import jquery from "jquery";
import { storageManager, ajax } from "../common";
export default {
  data() {
    return {
      notifyList: [],
      showed: false,
      id: "",
      index: "",
      orderInfo: {},
      product_lines: []
    };
  },
  components: {
    cHeader,
    cList
  },
  created() {
    this.getNotice();
  },
  methods: {
    getNotice() {
      const _self = this;
      const params = {
        params: {
          type: [2, 3, 4],
          limit: 12,
          offset: 1,
          status: true
        },
        url: "/api/notify/getNotifyList"
      };
      ajax.get(params).then(res => {
        this.notifyList = res.data.data;
        // console.log(_self.notifyList);
      });
    },
    showDetail(index) {
      const _self = this;
      _self.showed = true;
      _self.index = index;
      _self.id = _self.notifyList[index].order_id;
      // console.log(_self.id);
      const params = {
        params: { order_id: _self.id },
        url: "api/account/getOrderInfo"
      };
      ajax.get(params).then(res => {
        _self.orderInfo = res.data.data;
        _self.product_lines = _self.orderInfo.product_lines;
        console.log(_self.orderInfo);
      });
    },
    isHide() {
      this.showed = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/noticeConsume.scss";
@import "../assets/css/common.scss";
</style>
