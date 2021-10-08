<template>
  <div class="111">
    <div class="Echarts">
      <div ref="chart" style="width: 100%; height: 500px" ></div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myChart: {},
      option: {},
      oldata: {
        status: 1,
        type: 'data',
        x: [1612792000, 1612793802, 1612795599, 1612797399, 1612799199],
        y: [120, 240, 280, 50, 100]
      }
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(this.$refs.chart)
    this.updateEcharts()
  },
  methods: {
    updateEcharts () {
      console.log('|||', window.echarts)
      // 指定图表的配置项和数据
      this.option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: this.oldata.x
        },
        yAxis: {
          scale: true,
          minInterval: 1
        },
        series: [
          {
            name: '销量',
            type: 'line',
            data: this.oldata.y
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option)
    }
  }
}
</script>
