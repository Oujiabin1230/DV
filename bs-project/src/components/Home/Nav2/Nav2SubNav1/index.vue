<template>
   <div>
      <div id="nav2chart1" style="width: 1000px; height: 600px">chart</div>
      <div>
         <p>细项2---文本内容</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";
import {getSubNavData} from '../require.js'

export default {
   mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("nav2chart1"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(getSubNavData());
   },
};
</script>

<style lang="less" scoped>
   #nav1chart2{
      margin: 0 auto;
   }
</style>