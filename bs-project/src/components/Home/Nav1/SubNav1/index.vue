<template>
   <div>
      <div id="nav1chart1" style="width: 600px; height: 400px">chart</div>
      <div>
         <p>{{this.sql_introduce}}</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import {getSubNabData} from '../require.js'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
   data () {
    return {
      start_date:'2020-02-10',
      end_date:'2020-02-10',
      total_new_cases:[],
      iso_code:[],
      sql_name:"",
      sql_introduce:""
    }
   },
   mounted() {
      var myChart = echarts.init(document.getElementById("nav1chart1"));
      var s=`http://127.0.0.1:8000/api/get_bar/?start_date=${this.start_date}&end_date=${this.end_date}`
      axios.get(s).then((response)=>{
         this.total_new_cases=response.data.respdata.total_new_cases
         this.iso_code=response.data.respdata.iso_code
         this.sql_name=response.data.respdata.sql_name
         this.sql_introduce=response.data.respdata.sql_introduce
         myChart.setOption(getSubNabData(this.sql_name,this.iso_code.__v_raw,this.total_new_cases.__v_raw));
      }).catch((err) => {
        reject(err)
      })
   },
};
</script>

<style>
</style>