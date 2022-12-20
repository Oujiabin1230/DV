<template>
   <el-container>
      <el-header>
         <div class="title-div">
            <h3>广东工业大学大数据综合设计-新冠疫情</h3>
         </div>
         <div class="nav-div">
            <el-menu
               :default-active="this.activeIndex"
               mode="horizontal"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
            >
               <el-menu-item index="1">
                  <router-link to="/welcome">首页介绍</router-link>
               </el-menu-item>
               <el-menu-item index="2">
                  <router-link to="/nav1/subnav1">柱状图</router-link>
               </el-menu-item>
               <el-menu-item index="3">
                  <router-link to="/nav2/subnav1">漏斗图</router-link>
               </el-menu-item>
               <el-menu-item index="5">
                  <router-link to="/nav3/subnav1">线形图</router-link>
               </el-menu-item>
               <el-menu-item index="6">
                  <router-link to="/nav4/subnav1">饼状图</router-link>
               </el-menu-item>
               <el-menu-item index="7">
                  <router-link to="/nav5/subnav1">地图</router-link>
               </el-menu-item>
               <el-menu-item index="8">
                  <router-link to="/nav6/subnav1">导航6</router-link>
               </el-menu-item>
               <el-menu-item index="9">
                  <router-link to="/nav7">预测</router-link>
               </el-menu-item>
            </el-menu>
         </div>
      </el-header>
      <el-main>
         <router-view></router-view>
      </el-main>
   </el-container>
</template>
 



 <script>
export default {
   setup() {
      let activeIndex = "1";

      const handleSelect = (key, keyPath) => {};
      return {
         activeIndex,
         handleSelect,
      };
   },
};
</script>


<style lang="less" scoped>
.el-container {
   width: 100%;
   height: 100%;
   .el-header {
      height: 13%;
      width: 100%;

      padding: 0;

      background-color: rgb(68, 68, 68);

      display: flex;
      flex-direction: column;

      .title-div {
         height: 50%;
         width: 100%;

         display: flex;
         justify-content: center;
         align-items: center;

         h3 {
            margin: 15px;

            color: aliceblue;
         }
      }
      .nav-div {
         width: 100%;
         height: 50%;

         background-color: rgb(49, 49, 50);
         .el-menu {
            height: 100%;
            width: 100%;

            border: none;

            display: flex;
            justify-content: center;
            align-items: center;
         }
      }
   }
   .el-main {
      height: 70%;
      width: 100%;
   }
}
</style>