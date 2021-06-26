import React from 'react'
import { Marker, Popup } from 'react-leaflet'

export default function Mark(props: {
  lat: number
  long: number
  popup: string
}) {
  return (
    <React.Fragment>
    <Marker position={[props.lat, props.long]}>
        <Popup>
          <div style={{ width: 300 }}>
            <div style={{ paddingBottom: 5 }}>
              <div style={{ flex: 1, flexDirection: 'row' }}>
                <span style={{ fontWeight: 'bold', fontSize: 12 }}>
                  VEÍCULO:{' '}
                </span>
                <span style={{ fontSize: 12 }}>{props.popup.toUpperCase()}</span>
              </div>
              <div style={{ flex: 1, flexDirection: 'row' }}>
                <span style={{ fontWeight: 'bold', fontSize: 12 }}>
                  MOTORISTA:{' '}
                </span>
                <span style={{ fontSize: 12 }}>{`Não identificado`}</span>
              </div>
              <div style={{ flex: 1, flexDirection: 'row' }}>
                <span style={{ fontWeight: 'bold', fontSize: 12 }}>
                  CLIENTE:{' '}
                </span>
                <span style={{ fontSize: 12 }}>{props.popup.toUpperCase()}</span>
              </div>
            </div>
            <div>
              <table className="table table-striped table-bordered table-hover">
                <tbody>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>Data e Hora</td>
                    <td>{props.popup}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>Localização</td>
                    <td>{`Rua Porcelana, Vila do Encontro - SP`}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>Velocidade</td>
                    <td>{`${props.popup}`}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>RPM</td>
                    <td>{`${props.popup}`}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>Odômetro</td>
                    <td>{`${props.popup}`}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>Horímetro</td>
                    <td>{`${props.popup}`}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>Bateria</td>
                    <td>{`${0} volts`}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 90, textAlign: 'right' }}>Temperatura</td>
                    <td>{`${props.popup} ºC`}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div style={{ textAlign: 'center' }}>
                        <span
                          style={{
                            marginRight: 20,
                            fontSize: 18,
                            color: 'green'
                          }}
                          title={'Status de Ignição'}
                        >
                          <i className="fa fa-car" title={'Status de Ignição'} />
                        </span>
                        <span
                          style={{
                            marginRight: 20,
                            fontSize: 18,
                            color: 'gray'
                          }}
                          title={'Status de GPS'}
                        >
                          <i
                            className="fa fa-crosshairs"
                            title={'Status de GPS'}
                          />
                        </span>
                        <span
                          style={{
                            marginRight: 20,
                            fontSize: 18,
                            color: 'gray'
                          }}
                          title={'Status de GPRS'}
                        >
                          <i className="fa fa-signal" title={'Status de GPRS'} />
                        </span>
                        <span
                          style={{
                            marginRight: 20,
                            fontSize: 18,
                            color: 'green'
                          }}
                          title={'Status de Bateria'}
                        >
                          <i
                            className="fa fa-battery-full"
                            title={'Status de Bateria'}
                          />
                        </span>
                        <span
                          style={{
                            marginRight: 20,
                            fontSize: 18,
                            color: 'green'
                          }}
                        >
                          <i className="fa fa-lock" />
                        </span>
                        {props.popup && (
                          <span
                            style={{
                              marginRight: 20,
                              fontSize: 18,
                              color: 'green'
                            }}
                          ></span>
                        )}
                        {/*
                              <a href="javascript:void()" onClick={() => { this.setState({ modalStreet: true }) }}></a>
                              <span style={{ marginRight: 20, fontSize: 18, color: '#000' }} title={"Painel do Veículo"}><i className="fa fa-tachometer" title={"Painel do Veículo"}/></span>
                              <span style={{ marginRight: 0, fontSize: 18, color: '#000' }} title={"Enviar Comandos"}><i className="fa fa-cogs" title={"Enviar Comandos"}/></span>
                              */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Popup>
      </Marker>
    </React.Fragment>
  )
}
