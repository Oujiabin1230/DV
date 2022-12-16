<template>
   <div>
      <div id="nav1chart1" style="width: 600px; height: 400px">chart</div>
      <div>
         <p>细项1---文本内容</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import {getSubNab1Data} from '../require.js'


export default {
   data () {
    return {
      msg: ''
    }
   },

   mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("nav1chart1"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(getSubNab1Data(["项1","3"]));
   },
};
</script>

<style>
</style>