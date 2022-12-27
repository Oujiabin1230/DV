import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElMessage } from 'element-plus'

export async function Nav5_SubNav1_Data(searchDate) {
   var url = `http://8.134.93.160:8000/api/map_day_new/?start_date=${searchDate}&end_date=${searchDate}`
   const { data: res, status, statusText } = await axios.get(url)
   console.log(res)
   if (status !== 200) {
      ElMessage.error(statusText)
   }
   let title = res.respdata.sql_name
   var response_country = res.respdata.location
   var response_new_cases_num = res.respdata.new_cases
   var response_new_deaths_num = res.respdata.new_deaths
   // 此处为示例数据
   var data_deaths=[]
   for(let item =0;item<response_country.length;item++){
        data_deaths.push({ value: response_new_deaths_num[item], name: response_country[item] })
   }
   var data_cases=[]
   for(let item =0;item<response_country.length;item++){
        data_deaths.push({ value: response_new_cases_num[item], name: response_country[item] })
   }

  var introduce = 'test introduce'
  let option = {
    title: {
         text: "世界当日新增确诊人数分布图"
     },
    layoutSize:'150%',
    layoutCenter:['45%','50%'],
    tooltip: {
      formatter: '{b} : {c}'
    },
    visualMap: {
      min: 0,
      max: 60000,
      text: ['60000', '0'],
    //  realtime: false,
    //  calculabe: true,
      color: ['orangered', 'yellow', 'lightskyblue'],

    },
    series: [
      { name:"新增确诊",
        zoom: 1.1,
        type: 'map',
        map: 'world',
        data: data_deaths
      },
    ]
  }

  return { option, introduce }
}



export async function Nav5_SubNav2_Data(searchDate) {
   var url = `http://8.134.93.160:8000/api/map_day_new/?start_date=${searchDate}&end_date=${searchDate}`
   const { data: res, status, statusText } = await axios.get(url)
   console.log(res)
   if (status !== 200) {
      ElMessage.error(statusText)
   }
   let title = res.respdata.sql_name
   var response_country = res.respdata.location
   var response_new_cases_num = res.respdata.new_cases
   var response_new_deaths_num = res.respdata.new_deaths
   // 此处为示例数据
   var data_deaths=[]
   for(let item =0;item<response_country.length;item++){
        data_deaths.push({ value: response_new_deaths_num[item], name: response_country[item] })
   }
   var data_cases=[]
   for(let item =0;item<response_country.length;item++){
        data_cases.push({ value: response_new_cases_num[item], name: response_country[item] })
   }

  var introduce = 'test introduce'
  let option = {
    title: {
         text: "世界当日新增死亡人数分布图"
     },
    layoutSize:'150%',
    layoutCenter:['45%','50%'],
    tooltip: {
      formatter: '{b} : {c}'
    },
    visualMap: {
      min: 0,
      max: 30000,
      text: ['30000', '0'],
    //  realtime: false,
    //  calculabe: true,
      color: ['orangered', 'yellow', 'lightskyblue'],

    },
    series: [
      {
        zoom: 1.1,
        type: 'map',
        map: 'world',
        data: data_cases
      },
    ]
  }

  return { option, introduce }
}