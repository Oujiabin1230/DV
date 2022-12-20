import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export function getSubNavData(searchDate,searchCount) {
   var response_num, response_name, title, introduce = null
   var s = `http://127.0.0.1:8000/api/get_bar/?start_date=${searchDate[0]}&end_date=${searchDate[1]}`
   console.log(s)
   axios.get(s).then((response) => {
        title = response.data.respdata.sql_name
        response_name = response.data.respdata.国家
        response_num = response.data.respdata.确诊人数
        introduce = response.data.respdata.sql_introduce
    })

        console.log(response_num)
        console.log(response_name)

  // title = 'test-title'

   // 此处为示例数据
   var option = {
      title: {
         text: title,
      },
      tooltip: {},
      legend: {
         data: ["数量"],
      },
      xAxis: {
         data: response_name,
         axisLabel: {
            rotate: 40
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
   return { option, introduce }
}


