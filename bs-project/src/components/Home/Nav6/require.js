import * as echarts from "echarts";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { ElMessage } from 'element-plus'


export async function Nav6_SubNav1_Data(searchYear) {
  var url = `http://8.134.93.160:8000/api/rili_world_new/?start_date=${searchYear}&end_date=${searchYear}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
    }
   console.log(res)
   let title = res.respdata.sql_name
   let response_date = res.respdata.date
   let response_num = res.respdata.new_cases
   var data = [];
   for(let item =0;item<response_date.length;item++){
    data.push([
      response_date[item],
      response_num[item]
    ]);
  }
  console.log(data)

  var introduce = 'test introduce'
  var option = {
  title: {
    left: 'center',
    text: `${searchYear} 年世界新增确诊人数日历图`
  },
  tooltip: {},
  visualMap: {
    min: Math.min.apply(null, res.respdata.new_cases),
    max: Math.max.apply(null, res.respdata.new_cases),
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: searchYear,
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: true }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: data
  }
};

  return { option, introduce }
}



export async function Nav6_SubNav2_Data(searchYear,searchCountry) {
  var url = `http://8.134.93.160:8000/api/rili_country_new/?start_date=${searchYear}&end_date=${searchYear}&country=${searchCountry}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
    }
   console.log(res)
   let title = res.respdata.sql_name
   let response_date = res.respdata.date
   let response_num = res.respdata.new_cases
   var data = [];
   for(let item =0;item<response_date.length;item++){
    data.push([
      response_date[item],
      response_num[item]
    ]);
  }
  console.log(data)

  var introduce = 'test introduce'
  var option = {
  title: {
    left: 'center',
    text: `${searchYear} 年世界新增确诊人数日历图`
  },
  tooltip: {},
  visualMap: {
    min: Math.min.apply(null, res.respdata.new_cases),
    max: Math.max.apply(null, res.respdata.new_cases),
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: searchYear,
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: true }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: data
  }
};

  return { option, introduce }
}