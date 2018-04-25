<template>
  <div id="app">
    <c-header ref="header" @childEvent="parentMethod"></c-header>
    <c-list></c-list>
    <div class="main">
      <router-view/>
    </div>

  </div>
</template>

<script>
import cHeader from "./components/header.vue";
import cList from "./components/list.vue";
export default {
  name: "App",
  components: {
    cHeader,
    cList
  },
  data() {
    return {
      xx: 1111,
      parentMessage:'1213',

      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },
  mounted() {
    // console.log(this.$refs.header.header);
  },
  methods:{
    // xxx(val){
    //  this.xx+=val
    // }
    parentMethod({ name, age }) {
        console.log(this.parentMessage, name, age);
      },
  }
};
</script>
<style>
* {
  margin: 0;
}
.main {
  padding-left: 190px;
  padding-top: 80px;
  box-sizing: border-box;
  min-height: 100vh;
  background: #eef1f5;
}
</style>

