<template>
    <div class="all">
        <div class="main">
            <div class="news">
                <div class="titles">
                    <span>新闻舆情</span>
                </div>
                <div class="content">
                    <div class="icons clearfix">
                        <div class="icon_left">
                            <span>监控列表</span>
                            <span>风险事件</span>
                            <span class="active">新闻舆情</span>
                        </div>
                    </div>
                    <div class="top"><input type="text" placeholder="请输入企业名称">
                        <span></span>
                    </div>
                    <div class="bottom">
                        <ul>
                            <li v-for="(item,index) in newsList" :key="index">
                                <h5>{{item.TITLE}}</h5>
                                <P>
                                    <span>{{item.TITLE+' '+item.NEWSTIME}}</span>
                                    <span>{{item.COMPANYNAME}}</span>
                                </P>
                                <P>{{item.SUMMARY}}</P>
                                <button @click="readMore">阅读全文</button>
                            </li>
                            <li>
                                <h5>深圳市崇达电路技术股份有限公司关于银行授信及担保事项公告</h5>
                                <P>
                                    <span>证券 2018-03-12</span>
                                    <span>兴业银行股份有限公司江门分行</span>
                                </P>
                                <P>（二）授信主体：江门崇达电路技术有限公司 1、对江门崇达电路技术有限公司授信额度20000万元，期限1年，该授信额度由深...</P>
                                <button @click="readMore">阅读全文</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div id="detail" v-show="showed" @click="showed=false"> -->
        <div id="detail" v-show="showed">
            <div class="detail_box">
                <div class="detail_top clearfix">
                    <span class="tit">详情</span>
                    <span class="del" @click="isHide">X</span>
                </div>
                <div class="detail_content">
                    <h5>深圳市崇达电路技术股份有限公司关于银行授信及担保事项公告</h5>
                    <p>证券 2018-03-12</p>
                    <p>兴业银行股份有限公司江门分行</p>
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
      showed: false,
      newsList: []
    };
  },
  components: {
    cHeader,
    cList
  },
  created() {
    this.getNewsList();
  },
  mounted() {
    const _self = this;
    // let mode = document.getElementById("detail");
    document.addEventListener("click", function() {
    //   alert("111");
      _self.showed = false;
      // console.log(this)
    });
  },
  methods: {
    readMore(ev) {
      this.showed = true;
      var oEvent = ev || event;
      oEvent.cancelBubble = true;
    },
    getNewsList() {
      const _self = this;
      const params = {
        params: {
          keyword: "",
          offset: 1,
          limit: 10
        },
        url: "/api/monitor/searchNewsInfo"
      };
      ajax.get(params).then(res => {
        _self.newsList = res.data.data;
      });
    },
    isHide() {
      this.showed = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/news.scss";
@import "../assets/css/common.scss";
</style>