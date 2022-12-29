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
      <el-select v-model="this.searchYear" class="m-2" placeholder="Select" size="large">
         <el-option
            v-for="item in this.YearList"
            :key="item"
            :label="item"
            :value="item"
         />
      </el-select>
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
import { Nav6_SubNav2_Data } from "../require.js";
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as echarts from "echarts";


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
         Nav6_SubNav2_Data(
            this.searchYear,
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