export function getSubNabData(sql_name,response_name,response_num){
   // 此处为示例数据
   var option = {
      title: {
         text: sql_name,
      },
      tooltip: {},
      legend: {
         data: ["数量"],
      },
      xAxis: {
         data: response_name,
         axisLabel:{
            rotate:40
         }
      },
      yAxis: {},
      series: [
         {
            name: "数量",
            type: "bar",
            data: response_num,
         },
      ],
   };
   return option
}