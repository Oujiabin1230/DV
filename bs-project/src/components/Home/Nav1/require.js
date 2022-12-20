import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { ElMessage } from 'element-plus'




export async function Nav1_SubNav1_Data(searchDate,searchCount) {
   var url = `http://127.0.0.1:8000/api/total_cases/?start_date=${searchDate[0]}&end_date=${searchDate[1]}&country_count=${searchCount}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
    }
   console.log(res.respdata)
   let title = res.respdata.sql_name
   let response_name = res.respdata.国家
   let response_num = res.respdata.确诊人数
   let introduce = `${searchDate},${searchCount}`


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


export async function Nav1_SubNav2_Data(searchDate,searchCount) {
   var url = `http://127.0.0.1:8000/api/total_deaths/?start_date=${searchDate[0]}&end_date=${searchDate[1]}&country_count=${searchCount}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
    }
   console.log(res.respdata)
   //let { sql_name: title, sql_introduce: introduce, total_new_cases: response_num, iso_code: response_name } = res.respdata
   // introduce = `${introduce}、${searchDate}`
   let title = res.respdata.sql_name
   let response_name = res.respdata.国家
   let response_num = res.respdata.死亡人数
   let introduce = `${searchDate},${searchCount}`
   // 此处为示例数据
   var option = {
      color:'red',
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




export async function Nav1_SubNav3_Data(searchDate,searchCount) {
   var url = `http://127.0.0.1:8000/api/total_tests/?start_date=${searchDate[0]}&end_date=${searchDate[1]}&country_count=${searchCount}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
    }
   console.log(res.respdata)
   //let { sql_name: title, sql_introduce: introduce, total_new_cases: response_num, iso_code: response_name } = res.respdata
   // introduce = `${introduce}、${searchDate}`
   let title = res.respdata.sql_name
   let response_name = res.respdata.国家
   let response_num = res.respdata.测试人数
   let introduce = `${searchDate},${searchCount}`
   // 此处为示例数据
   var option = {
      color:'green',
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

export async function Nav1_SubNav4_Data(searchDate,searchCount) {
   var url = `http://127.0.0.1:8000/api/new_cases_sum/?start_date=${searchDate[0]}&end_date=${searchDate[1]}&country_count=${searchCount}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
    }
   console.log(res.respdata)
   let title = res.respdata.sql_name
   let response_name = res.respdata.国家
   let response_num = res.respdata.新增确诊人数
   let introduce = `${searchDate},${searchCount}`
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