
export async function getSubNavData() {
  var introduce = 'test introduce'
  let option = {
    layoutSize:'150%',
    layoutCenter:['45%','50%'],
    tooltip: {
      formatter: '{b} : {c}'
    },
    visualMap: {
      min: 0,
      max: 1000000,
      text: ['High', 'Low'],
      realtime: false,
      calculabe: true,
      color: ['orangered', 'yellow', 'lightskyblue'],

    },
    series: [
      {
        zoom: 1.1,
        type: 'map',
        map: 'world',
        data: [
          { name: 'China', value: 114514 }
        ]
      }
    ]
  }

  return { option, introduce }
}