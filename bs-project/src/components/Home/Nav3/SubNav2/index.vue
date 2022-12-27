<template>
   <div class="form-div">
      <el-select v-model="this.searchCountry" class="m-2" placeholder="Select" size="large">
         <el-option
            v-for="item in this.CountryList"
            :key="item"
            :label="item"
            :value="item"
         />
      </el-select>
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
      <div id="nav3chart1" class="chart" style="width: 1000px; height: 600px">chart</div>
      <div>
         <p>{{ this.introduce }}</p>
      </div>
   </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as echarts from "echarts";
import { Nav3_SubNav2_Data } from "../require.js";


export default {
   data() {
      let searchDate = ["2020-12-01", "2021-01-11"];
      let introduce = "null";
      let myChart = null;
      let searchCountry='国家'
      let CountryList=[]
      return {
         searchDate,
         introduce,
         myChart,
         searchCountry,
         CountryList
      };
   },
   methods: {
      search(myChart) {
         Nav3_SubNav2_Data(
            this.searchDate,
            this.searchCountry
         ).then((res)=>{
            this.introduce = res.introduce;
            this.myChart.setOption(res.option);
         });
      },
      country(){
      axios.get('http://8.134.93.160:8000/api/countries').then((response)=>{
        this.CountryList=response.data.respdata.location
      })
      }
   },

   mounted() {
      this.country();
      this.myChart = echarts.init(document.getElementById("nav3chart1"));
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
   .el-select{
      margin:0 10px 0 0
   }
   button {
      margin: 0 0 0 20px;
   }
}
.chart {
   margin: 0 auto;
}
</style>