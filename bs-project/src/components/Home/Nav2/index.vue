<template>
   <div>
      <h2>Nav2</h2>
      <div id="chart2" style="width: 600px; height: 400px">chart</div>

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
      var myChart = echarts.init(document.getElementById("chart2"));

      // 指定图表的配置项和数据
      var option = {
         series: [
            {
               type: "pie",
               data: [
                  {
                     value: 100,
                     name: "A",
                  },
                  {
                     value: 200,
                     name: "B",
                  },
                  {
                     value: 300,
                     name: "C",
                  },
                  {
                     value: 400,
                     name: "D",
                  },
                  {
                     value: 500,
                     name: "E",
                  },
               ],
               roseType: "area",
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