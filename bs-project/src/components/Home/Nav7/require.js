export async function getSubNavData(){
   var introduce = 'test introduce'
   var option = {
    tooltip: {
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 100,
            name: 'A'
          },
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
    ]
   };

   return {option,introduce}
}