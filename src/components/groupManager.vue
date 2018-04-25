<template>
    <div class="all">
        <div class="main clearfix">
            <div class="groupManager">
                <div class="titles">
                    <span>组别管理</span>
                </div>
                <div class="content">
                    <div class="top">
                        <span>企业列表</span>
                    </div>
                    <div class="bottom">
                        <table>
                            <thead>
                                <tr>
                                    <td>操作</td>
                                    <td>组别名称</td>
                                    <td>监控企业的数据</td>
                                    <td>收藏企业的数量</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(items,index) in groupList" :key="index">
                                    <td>
                                        <button @click="edit(items)">编辑</button>
                                    </td>
                                    <td>{{items.title}}</td>
                                    <td>{{items.monitor_count}}</td>
                                    <td>{{items.monitor_count+items.collection_count}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div id="edit" v-show="showed">
            <div class="edit_box">
                <div class="edit_box">
                    <div class="edit_top clearfix">
                        <span class="tit">编辑组别</span>
                        <span class="del" @click="isHide">X</span>
                    </div>
                    <div class="edit_middle">
                        <div class="rows">
                            <span>请输入用户组别：</span>
                            <span class="info"><input type="text" id="input01" v-model="title"></span>
                        </div>
                    </div>
                    <div class="edit_bottom">
                        <button @click="isHide">取消</button>
                        <button class="sure" @click="sureInfo(index)">确认保存</button>
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
      showed: false,
      groupList: [],
      index: "",
      title: "",
      active: {}
    };
  },
  components: {
    cHeader,
    cList
  },
  created() {
    this.getGroupList();
  },
  methods: {
    edit(items) {
      this.showed = true;
      this.active = items;
      this.title = items.title;
    },
    sureInfo() {
      const _self = this;
      if (this.title) {
        const params = {
          params: {
            group_id: this.active._id,
            title: this.title
          },
          url: "/api/group/modifyGroup"
        };
        ajax.post(params).then(() => {
          alert("修改成功");
          _self.getGroupList();
        });
      this.showed = false;
        
      }else{
          alert("组别名称不能为空");
          
      }
    },
    isHide() {
      this.showed = false;
    },
    getGroupList() {
      const _self = this;
      const params = {
        url: "/api/group/getGroupsList"
      };
      ajax.get(params).then(res => {
        this.groupList = res.data.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/groupManager.scss";
@import "../assets/css/common.scss";
</style>
