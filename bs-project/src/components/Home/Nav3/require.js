import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElMessage } from 'element-plus'

export async function Nav3_SubNav1_Data(searchDate,searchCountry) {
   var url_cases = `http://127.0.0.1:8000/api/country_new_cases/?start_date=${searchDate[0]}&end_date=${searchDate[1]}&country=${searchCountry}`
   const { data: res_cases, status_cases, statusText_cases } = await axios.get(url_cases)
   if (status_cases !== 200) {
      ElMessage.error(statusText_cases)
   }

   var url_deaths = `http://127.0.0.1:8000/api/country_new_deaths/?start_date=${searchDate[0]}&end_date=${searchDate[1]}&country=${searchCountry}`
   const { data: res_deaths, status_deaths, statusText_deaths } = await axios.get(url_deaths)
   if (status_deaths !== 200) {
      ElMessage.error(statusText_deaths)
   }
   console.log(res_deaths)
   let title = "国家新增确诊和新增死亡数量图"
  var introduce = `test introduce  ${searchDate}  ${searchCountry}`
  var option = {
    title: {
         text: title
     },
    legend: {
        data: ['新增确诊','新增死亡']//图例
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} '
    },
    xAxis: {
      type: 'category',
      data: res_cases.respdata.date
    },
    yAxis: {
      type: 'value'
    },
    series: [
      { name: '新增确诊',
        data: res_cases.respdata.new_cases,
        type: 'line',
      },
      { name: '新增死亡',
        data: res_deaths.respdata.new_deaths,
        type: 'line',
        itemStyle: {
                color:'red'
        },
      }
    ]
  };
  return { option, introduce }
}


export async function Nav3_SubNav2_Data(searchDate,searchCountry) {
   var url_cases = `http://127.0.0.1:8000/api/country_now_data/?start_date=${searchDate[0]}&end_date=${searchDate[1]}&country=${searchCountry}`
   const { data: res, status, statusText } = await axios.get(url_cases)
   if (status !== 200) {
      ElMessage.error(statusText)
   }
   let title = "国家总确诊和总死亡数量图"
  var introduce = `test introduce  ${searchDate}  ${searchCountry}`
  var option = {
    title: {
         text: title
     },
    legend: {
        data: ['总确诊','总死亡']//图例
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} '
    },
    xAxis: {
      type: 'category',
      data: res.respdata.date
    },
    yAxis: {
      type: 'value'
    },
    series: [
      { name: '总确诊',
        data: res.respdata.total_cases,
        type: 'line',
      },
      { name: '总死亡',
        data: res.respdata.total_deaths,
        type: 'line',
        itemStyle: {
                color:'red'
        },
      }
    ]
  };
  return { option, introduce }
}