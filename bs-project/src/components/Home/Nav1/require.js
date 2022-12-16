export function getSubNab1Data(canshu1){
   // 此处为示例数据
   var option = {
      title: {
         text: canshu1[1],
      },
      tooltip: {},
      legend: {
         data: ["销量"],
      },
      xAxis: {
         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","dawd"],
      },
      yAxis: {},
      series: [
         {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 100, 19],
         },
      ],
   };
   return option
}


export function getSubNab2Data(){
   // 此处为示例数据
   var option = {
      title: {
         text: "细项2",
      },
      tooltip: {},
      legend: {
         data: ["销量"],
      },
      xAxis: {
         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
         {
            name: "销量",
            type: "bar",
            data: [11, 45, 14, 19, 19, 81],
         },
      ],
   };
   return option
}