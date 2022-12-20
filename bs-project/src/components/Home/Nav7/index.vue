<template>
   <div>
      预测部分 暂用
   </div>
</template>

<script>
import * as echarts from "echarts";

export default {
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