<template>
   <div class="form-div">
       <el-select v-model="this.searchYear" class="m-2" placeholder="Select" size="large">
         <el-option
            v-for="item in this.YearList"
            :key="item"
            :label="item"
            :value="item"
         />
      </el-select>
      <el-button type="primary" @click="this.search(this.myChart)"
         >查询</el-button
      >
   </div>
   <br />
   <div class="chart-div">
      <div id="nav4chart1" class="chart" style="width: 1000px; height: 600px">
         chart
      </div>
      <div>
         <p>{{ this.introduce }}</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import { Nav6_SubNav1_Data } from "../require.js";

export default {
   data() {
      let searchCountry='国家';
      let CountryList=[];
      let searchYear='年份';
      let YearList = ["2020", "2021"];
      let searchtype='指标';
      let typeList = ["死亡", "确诊"];
      let searchDate = ["2020-12-01", "2021-01-11"];
      let introduce = "null";
      let myChart = null;

      return {
         searchDate,
         introduce,
         myChart,
         CountryList,
         searchCountry,
         searchYear,
         YearList,
         searchtype,
         typeList,

      };
   },
   methods: {
      search(myChart) {
         Nav6_SubNav1_Data(this.searchYear).then((res) => {
            this.introduce = res.introduce;
            this.myChart.setOption(res.option);
         });
      },
   },

   mounted() {
      this.myChart = echarts.init(document.getElementById("nav4chart1"));
      this.search(this.myChart);
   },
};
</script>

<style lang="less" scoped>
.form-div {
   width: 500px;
   height: 80px;
   padding: 0 0 0 20px;

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