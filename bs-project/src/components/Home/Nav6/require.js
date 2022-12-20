export async function getSubNavData() {
  var introduce = 'test introduce'
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        data: [

          {
            value: 200,
            name: 'B'
          },
          {
            value: 300,
            name: 'C'
          },
          {
            value: 400,
            name: 'D'
          },
          {
            value: 500,
            name: 'E'
          }
        ],
        roseType: 'area'
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