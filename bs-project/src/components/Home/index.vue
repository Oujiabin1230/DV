<template>
   <div class="common-layout">
      <el-container>
         <el-header>
            <div class="title-div">
               <h3>标题</h3>
            </div>
            <div class="nav-div">
               <el-menu
                  :default-active="this.activeIndex"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  router
               >
                  <el-menu-item index="welcome">首页</el-menu-item>
                  <el-menu-item index="nav1">导航1</el-menu-item>
                  <el-menu-item index="nav2">导航2</el-menu-item>
                  <el-menu-item index="nav3">导航3</el-menu-item>
               </el-menu>
            </div>
         </el-header>
         <el-main>
            <router-view></router-view>
         </el-main>
      </el-container>
   </div>
</template>
 



 <script>
export default {
   setup() {
      const activeIndex = "1";

      const handleSelect = (key, keyPath) => {};
      return {
         activeIndex,
         handleSelect,
      };
   },
};
</script>


<style lang="less" scoped>
.common-layout {
   width: 100%;
   height: 600px;
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

               display: flex;
               justify-content: center;
               align-items: center;
            }
         }
      }
      .el-main {
      }
   }
}
</style>