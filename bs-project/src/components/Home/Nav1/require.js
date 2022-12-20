import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

<<<<<<< HEAD

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
=======
import { ElMessage } from 'element-plus'



export async function getSubNavData(searchDate) {

   // var url = `http://127.0.0.1:8000/api/get_bar/?start_date=${searchDate[0]}&end_date=${searchDate[1]}`
   // const { data: res, status, statusText } = await axios.get(url)
   // if (status !== 200) {
   //    ElMessage.error(statusText)
   // }
   // let { sql_name: title, sql_introduce: introduce, total_new_cases: response_num, iso_code: response_name } = res.respdata
   // introduce = `${introduce}、${searchDate}`

   let title = 'test-title'
   let response_name = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
   let response_num = [5, 20, 36, 10, 10, 20]
   let introduce = `文本示例,${searchDate}`
>>>>>>> origin/frontend

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



export async function getSubNavTestData(searchDate) {
   var introduce ='test introduce'
   var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
    return {option,introduce}
}