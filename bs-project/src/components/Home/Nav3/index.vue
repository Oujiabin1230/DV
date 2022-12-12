<template>
   <div>
      <h2>Nav3</h2>
      <div id="chart3" style="width: 600px; height: 400px">chart</div>

      <div>
         <p>文本内容</p>
      </div>
   </div>
</template>

<script>
import * as echarts from "echarts";

export default {
   mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("chart3"));

      // 指定图表的配置项和数据
      var option = {
         xAxis: {
            data: ["A", "B", "C", "D", "E"],
         },
         yAxis: {},
         series: [
            {
               data: [10, 22, 28, 43, 49],
               type: "line",
               stack: "x",
            },
            {
               data: [5, 4, 3, 5, 10],
               type: "line",
               stack: "x",
            },
         ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
   },
};
</script>

<style>
</style>