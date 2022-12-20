<template>
   <el-container class="nav-div">
      <el-aside width="200px">
         <el-menu
            :default-active="this.activeIndex"
            background-color="rgb(236,245,255)"
            active-text-color="#3091ff"
         >
            <el-menu-item index="1">
               <router-link to="/nav1/subnav1">累计确诊人数</router-link>
            </el-menu-item>
            <el-menu-item index="2">
               <router-link to="/nav1/subnav2">累计死亡人数</router-link>
            </el-menu-item>
            <el-menu-item index="3">
               <router-link to="/nav1/subnav3">累计测试人数</router-link>
            </el-menu-item>
            <el-menu-item index="4">
               <router-link to="/nav1/subnav4">期间新增确诊</router-link>
            </el-menu-item>
            <el-menu-item index="5">
               <router-link to="/nav1/subnav5">期间新增死亡</router-link>
            </el-menu-item>
         </el-menu>
      </el-aside>
      <el-main>
         <h2>筛选项</h2>
         <router-view></router-view>
      </el-main>
   </el-container>
</template>

<script>
export default {
   setup() {
      let activeIndex = "1";

      return {
         activeIndex,
      };
   },
};
</script>

<style lang="less" scoped>
.el-container {
   width: 100%;
   height: 100%;
   .el-aside {
      width: 123px;
      height: 100%;
      .el-menu {
         height: 100%;
         .el-menu-item {
            border-bottom: solid 1px #aaa;
            padding: 0 5px;
            a {
               display: block;
               width: 100%;
               height: 100%;

               color: #000;
               word-break: normal;
            }
         }
         .el-menu-item.is-active {
            background-color: rgb(198, 226, 255);
            a {
               color: #3091ff;
            }
         }
      }
   }
   .el-main {
      padding: 10px;
   }
}
</style>