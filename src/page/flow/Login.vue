<template>
  <div>
    <e-chart
      ref="echart"
      class="test"
      slot="widget-content"
      height="280px"
      width="100%"
      title="zhuzhuz"
    ></e-chart>
  </div>
</template>

<script>
import EChart from '../../common/chart/echart'
export default {
  components: {
    EChart
  },
  data () {
    return {
      olineInfo: {
        product: ['CSPG', 'CVEBU', 'ERBU', 'N.W.E', 'PABU', 'SFPG', 'SRGBU', 'UAG', 'UCEBU', 'WNBU'],
        'ACT2 Oline': [0, 0, 0, 0, 2, 0, 36, 78, 106, 186, 0],
        'ACT2 NoData': [0, 0, 0, 10, 20, 0, 0, 7, 0, 0, 20],
        Percent: [20, 10, 100, 100, 100, 86, 52, 78, 100, 100, 0]
      },
      xType: [
        { type: 'category',
          gridIndex: 0,
          axisLabel: {
            rotate: 30
          }
        }
      ],
      updateTime: '2020-12-30 18:00',
      lsatLsatVersion: '7.5'
    }
  },
  computed: {
    appChartOption () {
      const series = Object.keys(this.olineInfo)
      series.shift()
      return [
        ['title.text', `数据更新时间：${this.updateTime}\n最新版本: ${this.lsatLsatVersion}`],
        ['title.padding', 0],
        ['title.textStyle.fontSize', 10],
        ['title.textStyle.fontWeight', 'lighter'],
        ['tooltip.show', true],
        ['tooltip.axisPointer.type', 'shadow'],
        ['tooltip.formatter', (args) => {
          let fmt = '<div>'
          args.forEach((s) => {
            const seriesValue = s.value[s.seriesIndex + 1]
            if (seriesValue > 0) {
              fmt = `${fmt}
              <p style="margin-bottom: 0">
                <span
                  style="
                    width: 10px;
                    height: 10px;
                    background: ${s.color};
                    float: left;
                    font-size: 0;
                    border-radius: 50%;
                    margin-top:5px;";
                >
                </span>
                <span
                  style="
                   margin-left: 7px;"
                >
                  ${s.seriesName}: ${seriesValue}
                </span>
              </p>`
            }
          })
          fmt = `${fmt}</div>`
          return fmt
        }],
        ['color', ['#64DD17', '#FF3D00', '#64DD17']],
        ['calculable', true],
        ['dataset.source', this.olineInfo],
        ['legend.show', true],
        ['series', series.map(v => {
          const defSeries = JSON.parse(JSON.stringify({
            label: {
              show: false,
              textStyle: {
                fontSize: 12
              }
            }
          }))
          if (v.indexOf('Percent') > -1) {
            defSeries.type = 'line'
            defSeries.yAxisIndex = 1
            defSeries.label.position = 'top'
            defSeries.label.show = true
            defSeries.smooth = true
            defSeries.itemStyle = {
              normal: {
                // 以下为是否显示，显示位置和显示格式的设置了
                label: {
                  show: true,
                  position: 'top',
                  formatter (params) {
                    // console.log(params);
                    const labelStr = `${params.value[params.encode.y[0]]}%`
                    return labelStr
                  }
                },
                color (params) {
                  if (`${params.value[params.encode.y[0]]}` < 70) {
                    return '#FF3D00'
                  } else if (`${params.value[params.encode.y[0]]}` >= 70) {
                    return '#64DD17'
                  }
                },
                lineStyle: {
                  color: 'green',
                  width: '1'
                }
              }
            }
          } else {
            defSeries.yAxisIndex = 0
            defSeries.type = 'bar'
            defSeries.itemStyle = {
              normal: {
                label: {
                  show: true,
                  position: 'top'
                }
              }
            }
          }
          return defSeries
        })],
        ['xAxis.type', 'category'],
        ['xAxis.axisLabel.show', true], // x轴数据名
        // 图像在面板的位置
        // ['xAxis.axisLabel.textStyle.color', ['#000000']],
        // ['xAxis.axisLine.lineStyle.color', ['#000000']],
        // ['xAxis.axisLine.lineStyle.type', 'solid'], // x轴为实线
        // ['xAxis.axisTick.interval', 2],
        // ['xAxis.splitLine.show', false],
        ['xAxis', this.xType],
        ['yAxis.show', true],
        ['yAxis.axisLabel.show', true],
        ['yAxis.axisLabel.color', 'black'],
        ['yAxis.axisLine.show', true],
        ['yAxis.axisLine.lineStyle.type', 'solid'],
        ['yAxis.axisLine.lineStyle.color', 'black'],
        ['yAxis.splitLine.lineStyle.type', 'solid'],
        ['yAxis', Array(2).fill(0).map((v) => {
          const y = JSON.parse(JSON.stringify({
            axisLabel: {
              show: true // Y轴数据名
            },
            axisLine: {
              lineStyle: {
                color: '#000000',
                type: 'solid'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'solid'
              }
            }
          }))
          // y.splitLine = false;
          // y.axisLabel.show = show;
          if (v === 1) {
            y.type = 'value'
            y.splitLine = false
            y.axisLabel = {
              formatter (params) {
                const labelStr = `${params}%`
                return labelStr
              }
            }
          }
          return y
        })],
        ['grid.top', 60],
        ['grid.bottom', 10],
        ['grid.x', 0],
        ['grid.x2', '3%'],
        ['toolbox.orient', 'vertical'],
        ['toolbox.feature.dataView.show', true],
        ['toolbox.feature.dataView.readOnly', false],
        ['toolbox.feature.magicType.show', true],
        ['toolbox.feature.magicType.type', ['line', 'bar', 'stack', 'tiled']],
        ['toolbox.feature.restore.show', true],
        ['toolbox.feature.saveAsImage.show', true],
        ['toolbox.x', 'right'],
        ['toolbox.y', 'center']

      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.echart && this.$refs.echart.update()
      // this.$refs.echart.update();
    })
  }
}
</script>>
