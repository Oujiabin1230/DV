export async function getSubNavData() {
  var introduce = 'test introduce'
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150],
        type: 'line'
      }
    ]
  };

  return { option, introduce }
}