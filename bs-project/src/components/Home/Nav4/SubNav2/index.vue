<template>
   <div class="form-div">
      <el-date-picker
         v-model="searchDate"
         type="date"
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
      <div id="nav4chart2" class="chart" style="width: 1000px; height: 600px">chart</div>
      <div>
         <p>{{ this.introduce }}</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import { Nav4_SubNav2_Data } from "../require.js";

export default {
   data() {
      let searchDate = "2020-12-01";
      let introduce = "null";
      let myChart = null;

      return {
         searchDate,
         introduce,
         myChart,
      };
   },
   methods: {
      search(myChart) {
         Nav4_SubNav2_Data(
            this.searchDate,
         ).then((res)=>{
            this.introduce = res.introduce;
            this.myChart.setOption(res.option);
         });
      },
   },

   mounted() {
      this.myChart = echarts.init(document.getElementById("nav4chart2"));
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
   button {
      margin: 0 0 0 20px;
   }
}
.chart {
   margin: 0 auto;
}
</style>