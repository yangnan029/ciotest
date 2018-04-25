<template>
    <div class="all">
        <div class="main clearfix">
            <div class="userManager">
                <div class="titles">
                    <span>用户管理</span>
                    <span class="new" @click="isShow">新增用户</span>
                </div>
                <div class="content">
                    <div class="top">
                        <span>用户列表</span>
                        <span>用户类型</span>
                        <span>渠道名称</span>
                        <span>账户状态</span>
                        <span><input type="text" placeholder="请输入您要输入的内容">
                            <i></i>
                        </span>
                        <span>刷新</span>
                    </div>
                    <div class="bottom">
                        <table>
                            <thead>
                                <tr>
                                    <td>用户类型</td>
                                    <td>用户姓名</td>
                                    <td>电话号码</td>
                                    <td>电子邮箱</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in userList" :key="index">
                                    <td>{{item.role_name}}</td>
                                    <td>{{item.username}}</td>
                                    <td>{{item.mobile}}</td>
                                    <td>{{item.email}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div id="new" v-show="showed">
            <div class="new_box">
                <div class="new_top clearfix"><span class="tit">新增用户</span><span class="del" @click="isHide">X</span></div>
                <div class="new_middle">
                    <div class="rows"><span>用户类型</span><span class="info"><input type="text"></span></div>
                    <div class="rows"><span>用户姓名</span><span class="info"><input type="text"></span></div>
                    <div class="rows"><span>电话号码</span><span class="info"><input type="text"></span></div>
                    <div class="rows"><span>电子邮箱</span><span class="info"><input type="text"></span></div>                    
                </div>
                <div class="new_bottom"><button @click="isHide">取消</button><button class="newAcc">新增用户</button></div>
            </div>
        </div>
    </div>
</template>
<script>
import cHeader from "./header.vue";
import cList from "./list.vue";
import axios from "axios";
import jquery from "jquery";
import {storageManager,ajax} from "../common"

export default {
  data() {
    return {
        showed:false,
        keyword:'',
        limit:10,
        offset:1,
        userList:[]
    };
  },
  components: {
    cHeader,
    cList
  },
  created(){
      this.getUserList();
  },
  methods: {
      isShow(){
          console.log(this.showed);
          this.showed=true;
      },
      isHide(){
          this.showed=false;
      },
      getUserList(){
          const params={
              params: { keyword:'',limit:10,offset:1},
              url:'api/user/getUserList'
          }
          ajax.get(params).then((res)=>{
               this.userList=res.data.data;
              
          })
//           const _self=this;
//           const token=storageManager.getItem('token')
//           axios.get('api/user/getUserList', {
//     params: { keyword:'',limit:10,offset:1},
//   headers: { Authorization: token}}).then((res)=>{
//               _self.userList=res.data.data;
//           })
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/userManage.scss";
@import "../assets/css/common.scss";
</style>
