/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-const */
/* eslint-disable no-case-declarations */
import React, { useEffect } from 'react'
/* Imports */
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { TemperatureTypescript } from '../../typescript/Temperatures'

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated)
// Themes end

export default function Temperature(props: {
  temperatures: TemperatureTypescript[]
  DivId: string
  className?: string
  TitleTextDataAxis: string
  TitleTextValueAxis: string
  TitleTempOne: string
  TitleTempTwo: string
  TitleTopText?: string
  TitleTopFont: number
  TitleTopMarginBottom: number
  ValueAxisMin: number
  ValueAxisMax: number
  MinLineValue: number
  MaxLineValue: number
  MinLineColor: string
  MaxLineColor: string
  LineColor: am4core.Color | string
}) {
  // Create chart instance
  let chart: am4charts.XYChart

  useEffect(() => {
    createChart()
    return () => {
      chart.dispose()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.temperatures])
  console.log(props.temperatures)

  const createChart = () => {
    chart = am4core.create(props.DivId, am4charts.XYChart)
    // Increase contrast by taking evey second color
    chart.colors.step = 2

    // Add data
    chart.data = generateChartData()

    let title = chart.titles.create()
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.TitleTopText !== undefined ? title.text = props.TitleTopText : ''
    title.fontSize = props.TitleTopFont
    title.marginBottom = props.TitleTopMarginBottom

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.minGridDistance = 50
    dateAxis.title.text = props.TitleTextDataAxis !== undefined ? props.TitleTextDataAxis : ''
    // este trecho serve para definir qual o tipo de intervalo usado no DateX da legenda
    dateAxis.baseInterval = {
      //informando o nome do eixo X
      timeUnit: 'minute',
      count: 1
    }
    if (dateAxis.tooltip !== undefined ) dateAxis.tooltip.disabled = false
    createAxisAndSeries('tempOne', props.TitleTempOne, true, 'circle')
    createAxisAndSeries('tempTwo', props.TitleTempTwo, false, 'circle')

    // Add legend
    chart.legend = new am4charts.Legend()
    chart.legend.maxHeight = 40

    // Add cursor
    chart.cursor = new am4charts.XYCursor()
  }

  // Create series
  const createAxisAndSeries = (
    field: string,
    name: string,
    opposite: boolean,
    bullet: string,
    yaxis?: boolean
  ) => {
    const valueAxis: am4charts.ValueAxis<am4charts.AxisRendererY> =
      chart.yAxes.push(new am4charts.ValueAxis())
    if (chart.yAxes.indexOf(valueAxis) !== 0) {
      // valueAxis.syncWithAxis = chart.yAxes.getIndex(0)
      valueAxis.title.text = props.TitleTextValueAxis //informando o nome do eixo Y
    }
    if(valueAxis.tooltip !== undefined ) valueAxis.tooltip.disabled = true
    valueAxis.interpolationDuration = 500
    valueAxis.rangeChangeDuration = 500
    valueAxis.renderer.minLabelPosition = 0.05
    valueAxis.renderer.maxLabelPosition = 0.95
    valueAxis.renderer.axisFills.template.disabled = true
    valueAxis.renderer.ticks.template.disabled = true

    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = field
    series.dataFields.dateX = 'date'
    series.strokeWidth = 2
    if (yaxis) {
      series.yAxis = valueAxis
    }
    series.name = name
    series.tooltipText = `${name}: [bold]{valueY}[/]`
    series.tensionX = 5
    series.showOnInit = true

    // define a cor da linha
    chart.colors.baseColor = am4core.color(props.LineColor)

    valueAxis.min = props.ValueAxisMin
    valueAxis.max = props.ValueAxisMax
    valueAxis.strictMinMax = true

    let range = valueAxis.axisRanges.create()
    range.value = props.MinLineValue
    range.grid.stroke = am4core.color(props.MinLineColor)
    range.grid.strokeWidth = 2
    range.grid.strokeOpacity = 1

    let range2 = valueAxis.axisRanges.create()
    range2.value = props.MaxLineValue
    range2.grid.stroke = am4core.color(props.MaxLineColor)
    range2.grid.strokeWidth = 2
    range2.grid.strokeOpacity = 1

    const interfaceColors = new am4core.InterfaceColorSet()

    switch (bullet) {
      case 'triangle':
        let triangleCase = series.bullets.push(new am4charts.Bullet())
        triangleCase.width = 12
        triangleCase.height = 12
        triangleCase.horizontalCenter = 'middle'
        triangleCase.verticalCenter = 'middle'

        const triangle = triangleCase.createChild(am4core.Triangle)
        triangle.stroke = interfaceColors.getFor('background')
        triangle.strokeWidth = 2
        triangle.direction = 'top'
        triangle.width = 12
        triangle.height = 12
        break
      case 'rectangle':
        let rectangleCase = series.bullets.push(new am4charts.Bullet())
        rectangleCase.width = 10
        rectangleCase.height = 10
        rectangleCase.horizontalCenter = 'middle'
        rectangleCase.verticalCenter = 'middle'

        const rectangle = rectangleCase.createChild(am4core.Rectangle)
        rectangle.stroke = interfaceColors.getFor('background')
        rectangle.strokeWidth = 2
        rectangle.width = 10
        rectangle.height = 10
        break
      case 'circle':
      default:
        let bullet = series.bullets.push(new am4charts.CircleBullet())
        bullet.circle.stroke = interfaceColors.getFor('background')
        bullet.circle.strokeWidth = 2
        bullet.circle.width = 10
        bullet.height = 10
        break
    }

    valueAxis.renderer.line.strokeOpacity = 2
    valueAxis.renderer.line.strokeWidth = 2
    valueAxis.renderer.line.stroke = series.stroke
    valueAxis.renderer.labels.template.fill = series.stroke
    valueAxis.renderer.opposite = opposite
  }

  // generate some random data, quite different range
  const generateChartData = () => {
    const chartData: {
      tempOne: number
      tempTwo: number
      date: string | Date | number
    }[] = []
    // eslint-disable-next-line array-callback-return
    props.temperatures.map((temp, index) => {
      let newDate = temp.timeStamp !== undefined ? new Date(temp.timeStamp) : new Date()
      newDate.setHours(newDate.getHours() + 4)
      if (index !== 0) {
        newDate.setMinutes(newDate.getMinutes() + 1)
      }
      chartData.push({
        tempOne: temp.temperatureOne !== undefined ? temp.temperatureOne : 0,
        tempTwo: temp.temperatureTwo !== undefined ? temp.temperatureTwo : 0,
        date: newDate
      })
    })

    return chartData
  }

  return (
    <React.Fragment>
      <div
        id={props.DivId}
        className={`temperatureDiv ${props.className}`}
      ></div>
    </React.Fragment>
  )
}
