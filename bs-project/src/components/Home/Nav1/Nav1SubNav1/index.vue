<template>
   <div class="form-div">
      <el-input-number v-model="searchCount" :min="5" :max="15" placeholder="排行数" />

      <el-date-picker
         v-model="searchDate"
         type="daterange"
         range-separator="至"
         start-placeholder="开始日期"
         end-placeholder="结束日期"
         value-format="yyyy-MM-DD"
      >
      </el-date-picker>
      <el-button type="primary" @click="search()">查询</el-button>
   </div>
   <br />
   <div class="chart-div">
      <div id="nav1chart1" style="width: 1000px; height: 600px">chart</div>
      <div>
         <p>细项1---文本内容</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import { getSubNavData } from "../require.js";

export default {
   data() {
      let searchDate = ''
      let searchCount= null

      function search(){
         console.log(this.searchDate,this.searchCountry)
      }
      return {
         searchDate,
         searchCount,

         search,
      };
   },

   mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("nav1chart1"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(getSubNavData()[0]);
   },
};
</script>

<style lang="less" scoped>
.form-div {
   width: 600px;
   height: 80px;

   display: flex;
   justify-content: space-between;
   align-items: center;
   .el-input-number {
      width: 200px;

      margin: 0 20px 0 15px;
   }
   button{
      margin: 0 0 0 20px;
   }
}
.chart-div {
   #nav1chart1 {
      margin: 0 auto;
   }
}
</style>