<template>
   <div class="form-div">
      <el-date-picker
         v-model="searchDate"
         type="date"
         value-format="YYYY-MM-DD"
      >
      </el-date-picker>
      <el-button type="primary" @click="this.search(this.myChart)"
         >查询</el-button
      >
   </div>
   <br />
   <div class="chart-div">
      <div id="nav5chart1" class="chart" style="width: 1500px; height: 700px">chart</div>
      <div>
         <p>{{ this.introduce }}</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import world from "../world.json";
import { Nav5_SubNav1_Data } from "../require.js";

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
         Nav5_SubNav1_Data(this.searchDate).then((res) => {
            this.introduce = res.introduce;
            this.myChart.setOption(res.option);
         });
      },
   },

   mounted() {
      echarts.registerMap("world", { geoJSON: world });
      this.myChart = echarts.init(document.getElementById("nav5chart1"));
      this.search(this.myChart);
   },
};
</script>

<style lang="less" scoped>
.form-div {
   width: 500px;
   height: 60px;
   padding: 0 0 0 20px;

   display: flex;
   justify-content: space-between;
   align-items: center;
   button {
      margin: 0 0 0 20px;
   }
}
</style>