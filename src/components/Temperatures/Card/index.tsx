import React from 'react'
import { RiDoorClosedFill, RiDoorOpenFill } from 'react-icons/ri'
import { DashboardTemperatureTypescript } from '../../../typescript/Temperatures'

export default function CardTemperature(
  props: DashboardTemperatureTypescript
): JSX.Element {
  // último registro no intervalo
  if (props.temperatures === undefined) return (<React.Fragment></React.Fragment>)
  if (props.temperatures.length < 1) return (<React.Fragment></React.Fragment>)
  for (let i = 0; i < props.temperatures.length; i++) {
    if (props.temperatures[i] === undefined)  (<React.Fragment></React.Fragment>)   
  }

  const lastTime = props.temperatures[0].timeStamp !== undefined ? new Date(props.temperatures[0].timeStamp) : new Date()

  // primeiro registro no intervalo
  const firstTime = props.temperatures[0].timeStamp !== undefined ? new Date(props.temperatures[0].timeStamp) : new Date()

  // acertando o TimeZone
  lastTime.setHours(lastTime.getHours() + 4)
  firstTime.setHours(firstTime.getHours() + 4)

  // adicionando 0 em números com menos de 2 dígitos
  function formatHours(time: Date) {
    if (time.getHours() < 10) {
      return '0' + time.getHours()
    } else {
      return time.getHours()
    }
  }
  function formatMinutes(time: Date) {
    if (time.getMinutes() < 10) {
      return '0' + time.getMinutes()
    } else {
      return time.getMinutes()
    }
  }
  function formatDay(date: Date) {
    if (date.getDate() < 10) {
      return '0' + date.getDate()
    } else {
      return date.getDate()
    }
  }
  function formatMonth(date: Date) {
    date.setMonth(date.getMonth() + 1)
    if (date.getMonth() < 10) {
      return '0' + date.getMonth()
    } else {
      return date.getMonth()
    }
  }

  return (
    <React.Fragment>
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="h6 font-weight-bold text-uppercase">
              Status: {console.log(props.temperatures[0], 'aqui')}
              {props.temperatures[0].inputOne &&
              props.temperatures[0].inputTwo ? (
                <span style={{ color: 'blue' }}>
                  <RiDoorClosedFill /> - Fechado
                </span>
              ) : (
                <span style={{ color: 'red' }}>
                  <RiDoorOpenFill /> - Aberto
                </span>
              )}
            </div>
          </div>
          <div className="col-12 pt-2 row">
            <div className="h6 col-12 bg-dark font-weight-bold text-light text-uppercase p-1">
              Período de Gráfico <br />
              {formatDay(firstTime) +
                '/' +
                formatMonth(firstTime) +
                ' à ' +
                formatDay(lastTime) +
                '/' +
                formatMonth(lastTime) +
                '/' +
                String(lastTime.getFullYear()).substr(2, 4)}{' '}
              às {formatHours(lastTime) + ':' + formatMinutes(lastTime)}
            </div>
          </div>
          <div className="col-12 row">
            <p></p>
          </div>
          <div className="col-12 pt-2 row">
            <div className="h6 bg-dark font-weight-bold text-light text-uppercase p-1 col-12">
              Últimos 15 dias
            </div>
            <table className="table table-sm table-bordered text-center col-12">
              <thead>
                <tr>
                  <th
                    colSpan={3}
                    scope="col"
                    style={{ borderBottom: '1px solid red' }}
                  >
                    Total de Leituras: {props.records}
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={3}
                    scope="col"
                    style={{ borderBottom: '1px solid red' }}
                  >
                    Total de Aberturas: {props.openings}
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th colSpan={3} scope="col">
                    Temperatura Externa
                  </th>
                </tr>
                <tr>
                  <th scope="col">Min.</th>
                  <th scope="col">Max.</th>
                  <th scope="col">Média</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ borderBottom: '1px solid red' }}>
                    {props.minimumTwo !== undefined ? props.minimumTwo.toFixed(2) : 0} °C
                  </td>
                  <td style={{ borderBottom: '1px solid red' }}>
                    {props.maximumTwo !== undefined ? props.maximumTwo.toFixed(2) : 0} °C
                  </td>
                  <td style={{ borderBottom: '1px solid red' }}>
                    {props.averageTwo !== undefined ? props.averageTwo.toFixed(2) : 0} °C
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={3} scope="col">
                    Temperatura Interna
                  </th>
                </tr>
                <tr>
                  <th scope="col">Min.</th>
                  <th scope="col">Max.</th>
                  <th scope="col">Média</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ borderBottom: '1px solid red' }}>
                    {props.minimumOne !== undefined ? props.minimumOne.toFixed(2) : 0} °C
                  </td>
                  <td style={{ borderBottom: '1px solid red' }}>
                    {props.maximumOne !== undefined ? props.maximumOne.toFixed(2) : 0} °C
                  </td>
                  <td style={{ borderBottom: '1px solid red' }}>
                    {props.averageOne !== undefined ? props.averageOne.toFixed(2) : 0} °C
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
