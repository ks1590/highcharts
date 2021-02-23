document.addEventListener('DOMContentLoaded', () => {
  Highcharts.chart('container1', {
    xAxis: {
      categories: ["Apple", "Bananas", "Oranges"]
    },
    series: [
      {
        name: "John",
        data: [1, 2, 3]
      },
      {
        name: "Jane",
        data: [2, 4, 8]
      }
    ]
  });
});

Highcharts.setOptions({
  colors: ['#01BAF2', 'green', '#71BF45', '#FAA74B']
});
Highcharts.chart('container2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Air Composition',
    y: 225
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.key + ': ' + this.y + '%';
        }
      },
      showInLegend: true
    }
  },
  series: [{
    name: '小計',
    colorByPoint: true,
    innerSize: '70%',
    data: [{
      name: '食費',
      // color: '#01BAF2',
      y: 61,
    }, {
      name: '交通費',
      // color: '#01BAF2',
      y: 17,
    },
    {
      name: '衣類',
      // color: '#71BF45',
      y: 20.9
    }, {
      name: '交際費',
      //color: '#FAA74B',
      y: 1.1
    }]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 273
      },
      chartOptions: {

        // Config for max-width 375 devices (bar chart width is 273 on my page)
      }
    },
    {
      condition: {
        maxWidth: 312
      },
      chartOptions: {

        // Config for max-width 420 devices (bar chart width is 312 on my page)
      }
    }]
  }
});

Highcharts.setOptions({
  colors: ['#01BAF2', 'green', '#71BF45', '#FAA74B']
});
Highcharts.chart('container3', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Air Composition',
    y: 225
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.key + ': ' + this.y + '%';
        }
      },
      showInLegend: true
    }
  },
  series: [{
    name: '小計',
    colorByPoint: true,
    innerSize: '70%',
    data: [{
      name: '食費',
      // color: '#01BAF2',
      y: 30,
    }, {
      name: '交通費',
      // color: '#01BAF2',
      y: 40,
    },
    {
      name: '衣類',
      // color: '#71BF45',
      y: 20
    }, {
      name: '交際費',
      //color: '#FAA74B',
      y: 10
    }]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 273
      },
      chartOptions: {

        // Config for max-width 375 devices (bar chart width is 273 on my page)
      }
    },
    {
      condition: {
        maxWidth: 312
      },
      chartOptions: {

        // Config for max-width 420 devices (bar chart width is 312 on my page)
      }
    }]
  }
});
