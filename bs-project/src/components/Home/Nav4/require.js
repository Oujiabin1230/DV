import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElMessage } from 'element-plus'

export async function Nav4_SubNav1_Data(searchDate) {
   var url = `http://8.134.93.160:8000/api/continent_cases/?start_date=${searchDate}&end_date=${searchDate}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
   }
   let title = res.respdata.sql_name
   var response_name = res.respdata.continent
   var response_num = res.respdata.total_cases_continent
   // 此处为示例数据
   var funnel_data=[]
   for(let item =0;item<response_name.length;item++){
        funnel_data.push({ value: response_num[item], name: response_name[item] })
   }
   console.log(funnel_data)
  var introduce = 'test introduce'
  var option = {
  legend: {
        // 图例
        data: response_name,
        right: "10%",
        top: "30%",
        orient: "vertical"
    },
    tooltip: {
      trigger: 'item',
      formatter: '<br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: ["40%", "70%"],
        label: {
                show: true,
                formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
            },
        data: funnel_data,

      }
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  };
  return { option, introduce }
}

export async function Nav4_SubNav2_Data(searchDate) {
   var url = `http://8.134.93.160:8000/api/continent_deaths/?start_date=${searchDate}&end_date=${searchDate}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
   }
   let title = res.respdata.sql_name
   var response_name = res.respdata.continent
   var response_num = res.respdata.num
   // 此处为示例数据
   var funnel_data=[]
   for(let item =0;item<response_name.length;item++){
        funnel_data.push({ value: response_num[item], name: response_name[item] })
   }
   console.log(funnel_data)
  var introduce = 'test introduce'
  var option = {
  legend: {
        // 图例
        data: response_name,
        right: "10%",
        top: "30%",
        orient: "vertical"
    },
    tooltip: {
      trigger: 'item',
      formatter: '<br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: ["40%", "70%"],
        label: {
                show: true,
                formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
            },
        data: funnel_data,

      }
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  };
  return { option, introduce }
}




export async function Nav4_SubNav3_Data(searchDate) {
   var url = `http://8.134.93.160:8000/api/continent_new_cases/?start_date=${searchDate[0]}&end_date=${searchDate[1]}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
   }
   let title = res.respdata.sql_name
   var response_name = res.respdata.continent
   var response_num = res.respdata.num
   // 此处为示例数据
   var funnel_data=[]
   for(let item =0;item<response_name.length;item++){
        funnel_data.push({ value: response_num[item], name: response_name[item] })
   }
   console.log(funnel_data)
  var introduce = 'test introduce'
  var option = {
  legend: {
        // 图例
        data: response_name,
        right: "10%",
        top: "30%",
        orient: "vertical"
    },
    tooltip: {
      trigger: 'item',
      formatter: '<br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: ["40%", "70%"],
        label: {
                show: true,
                formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
            },
        data: funnel_data,

      }
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  };
   return {option,introduce}
}



export async function Nav4_SubNav4_Data(searchDate) {
   var url = `http://8.134.93.160:8000/api/continent_new_deaths/?start_date=${searchDate[0]}&end_date=${searchDate[1]}`
   const { data: res, status, statusText } = await axios.get(url)
   if (status !== 200) {
      ElMessage.error(statusText)
   }
   let title = res.respdata.sql_name
   var response_name = res.respdata.continent
   var response_num = res.respdata.num
   // 此处为示例数据
   var funnel_data=[]
   for(let item =0;item<response_name.length;item++){
        funnel_data.push({ value: response_num[item], name: response_name[item] })
   }
   console.log(funnel_data)
  var introduce = 'test introduce'
  var option = {
  legend: {
        // 图例
        data: response_name,
        right: "10%",
        top: "30%",
        orient: "vertical"
    },
    tooltip: {
      trigger: 'item',
      formatter: '<br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: ["40%", "70%"],
        label: {
                show: true,
                formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
            },
        data: funnel_data,

      }
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  };
   return {option,introduce}
}