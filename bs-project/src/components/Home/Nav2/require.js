import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElMessage } from 'element-plus'

export async function Nav2_SubNav1_Data(searchDate) {
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
   var introduce =`test introduce  ${searchDate}`
   var option = {
      title: {
         text: title
      },
      tooltip: {
         trigger: 'item',
         formatter: '洲名-数量 <br/>{b} : {c}'
      },
      toolbox: {
         feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
         }
      },
      legend: {
         data: response_name
      },
      series: [
         {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            //min: 0,
            //max: 100,
            minSize: '6%', //漏斗最小值的宽度
            maxSize: '100%', //漏斗最大值的宽度
            sort: 'descending',
            gap: 2,
            label: {
               show: true,
               position: 'inside'
            },
            labelLine: {
               length: 10,
               lineStyle: {
                  width: 1,
                  type: 'solid'
               }
            },
            itemStyle: {
               borderColor: '#fff',
               borderWidth: 1
            },
            emphasis: {
               label: {
                  fontSize: 20
               }
            },
            data: funnel_data
         }
      ]
   };
   return {option,introduce}
}



export async function Nav2_SubNav2_Data(searchDate) {
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
   var introduce =`test introduce  ${searchDate}`
   var option = {
      title: {
         text: title
      },
      tooltip: {
         trigger: 'item',
         formatter: '洲名-数量 <br/>{b} : {c}'
      },
      toolbox: {
         feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
         }
      },
      legend: {
         data: response_name
      },
      series: [
         {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            //min: 0,
            //max: 100,
            minSize: '10%', //漏斗最小值的宽度
            maxSize: '100%', //漏斗最大值的宽度
            sort: 'descending',
            gap: 2,
            label: {
               show: true,
               position: 'inside'
            },
            labelLine: {
               length: 10,
               lineStyle: {
                  width: 1,
                  type: 'solid'
               }
            },
            itemStyle: {
               borderColor: '#fff',
               borderWidth: 1
            },
            emphasis: {
               label: {
                  fontSize: 20
               }
            },
            data: funnel_data
         }
      ]
   };
   return {option,introduce}
}



export async function Nav2_SubNav3_Data(searchDate) {
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
   var introduce =`test introduce  ${searchDate}`
   var option = {
      title: {
         text: title
      },
      tooltip: {
         trigger: 'item',
         formatter: '洲名-数量 <br/>{b} : {c}'
      },
      toolbox: {
         feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
         }
      },
      legend: {
         data: response_name
      },
      series: [
         {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            //min: 0,
            //max: 100,
            minSize: '5%', //漏斗最小值的宽度
            maxSize: '100%', //漏斗最大值的宽度
            sort: 'descending',
            gap: 2,
            label: {
               show: true,
               position: 'inside'
            },
            labelLine: {
               length: 10,
               lineStyle: {
                  width: 1,
                  type: 'solid'
               }
            },
            itemStyle: {
               borderColor: '#fff',
               borderWidth: 1
            },
            emphasis: {
               label: {
                  fontSize: 20
               }
            },
            data: funnel_data
         }
      ]
   };
   return {option,introduce}
}



export async function Nav2_SubNav4_Data(searchDate) {
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
   var introduce =`test introduce  ${searchDate}`
   var option = {
      title: {
         text: title
      },
      tooltip: {
         trigger: 'item',
         formatter: '洲名-数量 <br/>{b} : {c}'
      },
      toolbox: {
         feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
         }
      },
      legend: {
         data: response_name
      },
      series: [
         {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            //min: 0,
            //max: 100,
            minSize: '2%', //漏斗最小值的宽度
            maxSize: '100%', //漏斗最大值的宽度
            sort: 'descending',
            gap: 2,
            label: {
               show: true,
               position: 'inside'
            },
            labelLine: {
               length: 10,
               lineStyle: {
                  width: 1,
                  type: 'solid'
               }
            },
            itemStyle: {
               borderColor: '#fff',
               borderWidth: 1
            },
            emphasis: {
               label: {
                  fontSize: 20
               }
            },
            data: funnel_data
         }
      ]
   };
   return {option,introduce}
}