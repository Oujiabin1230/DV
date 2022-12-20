<template>
   <div class="form-div">
      <el-input-number v-model="searchCount" :min="5" :max="15"/>
      <el-date-picker
         v-model="searchDate"
         type="daterange"
         range-separator="至"
         start-placeholder="开始日期"
         end-placeholder="结束日期"
         value-format="YYYY-MM-DD"
      >
      </el-date-picker>
      <el-button
         type="primary"
         @click="this.search(this.myChart)"
         >查询</el-button
      >
   </div>
   <br />
   <div class="chart-div">
      <div id="nav1chart2" class="chart" style="width: 1000px; height: 600px">chart</div>
      <div>
         <p>{{ this.introduce }}</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import { Nav1_SubNav2_Data } from "../require.js";

export default {
   data() {
      let searchDate = ["2020-12-01", "2021-01-11"];
      let introduce = "null";
      let searchCount=8
      let myChart = null;

      return {
         searchDate,
         introduce,
         myChart,
         searchCount,
      };
   },
   methods: {
      search(myChart) {
         Nav1_SubNav2_Data(
            this.searchDate,
            this.searchCount
         ).then((res)=>{
            this.introduce = res.introduce;
            this.myChart.setOption(res.option);
         });
      },
   },
   mounted() {
      this.myChart = echarts.init(document.getElementById("nav1chart2"));
      this.search(this.myChart);
   },
};
</script>

<style lang="less" scoped>
.form-div {
   width: 500px;
   height: 80px;
   padding:0 0 0 20px;

   display: flex;
   justify-content: space-between;
   align-items: center;
   .el-input-number{
      margin: 0 10px 0 0;
   }
   button {
      margin: 0 0 0 20px;
   }
}
.chart {
   margin: 0 auto;
}
</style>