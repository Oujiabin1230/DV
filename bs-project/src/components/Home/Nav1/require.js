import axios from 'axios'
import VueAxios from 'vue-axios'


export function getSubNavData(searchDate,searchCount) {

   let response_num, response_name, title, introduce = ''

   // var s = `http://127.0.0.1:8000/api/get_bar/?start_date=${this.start_date}&end_date=${this.end_date}`
   // axios.get(s).then((response) => {
   //    sql_name = response.data.respdata.sql_name
   //    response_name = response.data.respdata.iso_code.__v_raw
   //    response_num = response.data.respdata.total_new_cases.__v_raw
   //    sql_introduce = response.data.respdata.sql_introduce
   // }).catch((err) => {
   //    console.log(err)
   //    reject(err)
   // })


   title = 'test-title'
   response_name = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
   response_num = [5, 20, 36, 10, 10, 20]
   introduce = `文本示例,${searchDate},${searchCount}`

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


