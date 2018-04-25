<template>
  <div class="main">
    <div class="warp">
    </div>
    <div class="login-box">
      <div class="title">
        <span>首席情报官</span>
      </div>
      <div class="row">
        <span></span><input type="text" v-model="username"></div>
      <div class="row">
        <span></span><input type="password" v-model="password"></div>
      <div class="btn">
        <button @click="login">登录系统</button>
      </div>
      <div class="text">
        <p><input type="checkbox">
          <span>记住我</span>
        </p>
        <p><input type="checkbox">
          <span>我已阅读并接受</span>
          <a href="javascript:void(0)">《服务协议》</a>
        </p>
      </div>
    </div>
    <div class="footer">
      <p>© 2016-2017 介末数据 版权所有 ICP证：沪ICP备17030133号-3</p>
      <p>沪公网安备 31011502007090号</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "../config";
import { storageManager, ajax } from "../common";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {},
  methods: {
    login() {
      const _self = this;
      const params = {
        url: "/api/user/login",
        params: {
          username: this.username,
          password: this.password
        }
      };
      if (!_self.username) {
        alert("用户名不能为空");
      } else if (!_self.password) {
        alert("密码不能为空");
      }
      ajax.post(params).then(res => {
        if (res.data.success) {
          window.localStorage.setItem("logined", true);
          storageManager.setItem("token", res.data.data.token);
          _self.$router.push({ path: "/userManager" });
        } else {
          console.log(config[res.data.error_code]);
        }
      });
      // axios
      //   .post("/api/user/login", {
      //     username: this.username,
      //     password: this.password
      //   })
      //   .then(function(res) {
      //     if (res.data.success) {
      //       storageManager.setItem('token',res.data.data.token);
      //       _self.$router.push({ path: "/userManager" });
      //     } else {
      //       console.log(config[res.data.error_code]);
      //     }
      //   });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/css/login.scss";
@import "../assets/css/common.scss";
</style>

