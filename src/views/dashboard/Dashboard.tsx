import { 
  // lazy,
  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RiDoorClosedFill, RiDoorOpenFill } from 'react-icons/ri'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'

import {
  getTemperaturesSelector,
  // getLoadingTemperatureSelector
} from "../../redux/selectors/temperatures";
import * as ATemperatures from "../../redux/actions/temperatures";
import { DashboardTemperatureTypescript } from "../../typescript/Temperatures";

import {
  // CBadge,
  // CButton,
  // CButtonGroup,
  // CCard,
  // CCardBody,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CRow,
  // CCallout,
  CLink,
} from "@coreui/react";

// import CIcon from "@coreui/icons-react";

// import MainChartExample from "../charts/MainChartExample";
import Temperature from "../../components/Temperatures";
import CardTemperature from "../../components/Temperatures/Card";
// const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown"));
// const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand"));

const Dashboard = () => {
  const dispatch = useDispatch();
  const temperatures: DashboardTemperatureTypescript[] = useSelector(
    getTemperaturesSelector
  );

  // const loading = useSelector(getLoadingTemperatureSelector)

  useEffect(() => {
    dispatch(ATemperatures.allTemperaturesRequest());
  }, [dispatch]);

  return (
    <>
      {/* <WidgetsDropdown data={temperatures[0]} />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                //  <CIcon name="cil-cloud-download" />
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    
      <WidgetsBrand withCharts /> */}
    
      <table className="table table-sm table-hover table-striped table-bordered border-primary mb-4 mt-4 bg-secondary">
        <thead>
          <tr>
            <th colSpan={12} className="text-center">
              <span className="pr-4"><RiDoorClosedFill color={'blue'} /> Porta Fechada</span><span className="pl-4"><RiDoorOpenFill color={'red'} /> Porta Aberta</span>
            </th>
          </tr>
          <tr>
            {/* <th className="text-center">
              <CIcon name="cil-people" />
            </th> */}
            <th className="text-center" colSpan={4}></th>
            <th className="text-center" colSpan={2}>Status</th>
            <th className="text-center" title="Temperatura Máxima Externa" colSpan={2}>Máximas</th>
            <th className="text-center" title="Temperatura Máxima Externa" colSpan={2}>Mínimas</th>            
            <th className="text-center" colSpan={2}>Gráfico</th>
          </tr>
          <tr>
            {/* <th className="text-center">
              <CIcon name="cil-people" />
            </th> */}
            <th className="text-center">Dispositivo</th>
            <th className="text-center">Serial</th>
            <th className="text-center">Leituras</th>
            <th className="text-center">Aberturas</th>
            <th className="text-center" title="Temperatura Mínima Externa">Externo</th>
            <th className="text-center" title="Temperatura Máxima Externa">Interno</th>
            <th className="text-center" title="Temperatura Minima Interna">Externa</th>
            <th className="text-center" title="Temperatura Máxima Interna">Interna</th>
            <th className="text-center" title="Temperatura Minima Interna">Externa</th>
            <th className="text-center" title="Temperatura Máxima Interna">Interna</th>
            <th className="text-center" colSpan={2}>e Localização</th>
          </tr>
        </thead>
        <tbody>
          {temperatures.map((device, index) => {
            return (
              <tr key={index} className="text-center">                
                <td>
                  {device.device.description}
                </td>
                <td>
                  {device.device.serialNumber}
                </td>
                <td>
                  {device.records}
                </td>
                <td>
                  {device.openings}
                </td>
                <td>
                  {device.temperatures !== undefined ?
                    (device.temperatures[device.temperatures?.length - 1].inputOne ? <RiDoorClosedFill style={{color: 'blue'}} /> : <RiDoorOpenFill style={{color: 'red'}} />)
                    :
                    "Sem leitura"
                  }
                </td>
                <td>
                  {device.temperatures !== undefined ?
                    (device.temperatures[device.temperatures?.length - 1].inputTwo ? <RiDoorClosedFill style={{color: 'blue'}} /> : <RiDoorOpenFill style={{color: 'red'}} />)
                    :
                    "Sem leitura"
                  }
                </td>
                <td>
                  {device.maximumOne}
                </td>
                <td>
                  {device.minimumOne}
                </td>
                <td>
                  {device.maximumTwo}
                </td>
                <td>
                  {device.minimumTwo}
                </td>
                <td>
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <BsGraphUp />
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Gráfico de {device.device.description} - {device.device.serialNumber}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        {device.temperatures !== undefined && device.device.description !== undefined && 
                        <div
                        key={index}
                        className="col-sm-12 col-md-12 col-lg-12 text-center mb-4 row"
                        style={{ alignSelf: 'center' }}
                      >
                        <div className="card border-left-primary shadow h-100 py-2 col-sm-12 col-md-6 col-lg-4">
                          {/* Recebe Props do tipo DashboardTypescript */}
                          <CardTemperature {...device} />
                        </div>
                        <Temperature
                          DivId={`graph-${index}`}
                          className="col-sm-12 col-md-6 col-lg-8 mb-4"
                          // titulo superior
                          TitleTopFont={20}
                          TitleTopMarginBottom={0}
                          // TitleTopText={`${device.device.description}`}
                          // Legendas
                          TitleTempOne="🌡️ Interna"
                          TitleTempTwo="🌡️ Externa"
                          /* Recebe Props do tipo TemperaturesTypescript[] */
                          temperatures={device.temperatures}
                          // cor da linha do gráfico HEX
                          LineColor={
                            index < 10
                              ? `#${Math.ceil(Math.random()) * index}${
                                  Math.ceil(Math.random()) * index
                                }${Math.ceil(Math.random()) * index}`
                              : `#${Math.ceil(Math.random()) * index}${
                                  Math.ceil(Math.random()) * index
                                }${Math.ceil(Math.random()) * index}`
                          }
                          // configura a linha inferior do grafico
                          MinLineValue={-20}
                          MinLineColor="#20da07"
                          // configura a linha superior do grafico
                          MaxLineValue={40}
                          MaxLineColor="#ff2204"
                          // range de alcance dos dados
                          ValueAxisMax={80}
                          ValueAxisMin={-40}
                          // Text inferior
                          TitleTextDataAxis={`🕖 Hora do evento (Últimos 60 minutos)`}
                          //Texto vertical esquerdo
                          TitleTextValueAxis="🌡️ Temperatura ºC"
                        />
                      </div>
                          
                        }
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                      </div>
                    </div>
                  </div>
                </div>
                </td>
                <td>
                  
                  <CLink
                    className="btn btn-success"
                    to="/device/:id"
                  >
                    <FaMapMarkedAlt />
                  </CLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
{/* 
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Traffic {" & "} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">New Clients</small>
                        <br />
                        <strong className="h4">9,123</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Recurring Clients</small>
                        <br />
                        <strong className="h4">22,643</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">Monday</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="34"
                      />
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="78"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">Tuesday</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="56"
                      />
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="94"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">Wednesday</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="12"
                      />
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="67"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">Thursday</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="43"
                      />
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="91"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">Friday</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="22"
                      />
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="73"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">Saturday</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="53"
                      />
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="82"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">Sunday</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="9"
                      />
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="69"
                      />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1">
                        <CBadge shape="pill" color="info">
                          &nbsp;
                        </CBadge>
                      </sup>
                      New clients &nbsp;
                      <sup className="px-1">
                        <CBadge shape="pill" color="danger">
                          &nbsp;
                        </CBadge>
                      </sup>
                      Recurring clients
                    </small>
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Pageviews</small>
                        <br />
                        <strong className="h4">78,623</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">Organic</small>
                        <br />
                        <strong className="h4">49,123</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user" />
                      <span className="title">Male</span>
                      <span className="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="warning"
                        value="43"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-5">
                    <div className="progress-group-header">
                      <CIcon
                        className="progress-group-icon"
                        name="cil-user-female"
                      />
                      <span className="title">Female</span>
                      <span className="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="warning"
                        value="37"
                      />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        className="progress-group-icon"
                        name="cil-globe-alt"
                      />
                      <span className="title">Organic Search</span>
                      <span className="ml-auto font-weight-bold">
                        191,235 <span className="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="56"
                      />
                    </div>
                  </div>

                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        name="cib-facebook"
                        className="progress-group-icon"
                      />
                      <span className="title">Facebook</span>
                      <span className="ml-auto font-weight-bold">
                        51,223 <span className="text-muted small">(15%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="15"
                      />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        name="cib-twitter"
                        className="progress-group-icon"
                      />
                      <span className="title">Twitter</span>
                      <span className="ml-auto font-weight-bold">
                        37,564 <span className="text-muted small">(11%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="11"
                      />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        className="progress-group-icon"
                      />
                      <span className="title">LinkedIn</span>
                      <span className="ml-auto font-weight-bold">
                        27,319 <span className="text-muted small">(8%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="8"
                      />
                    </div>
                  </div>
                  <div className="divider text-center">
                    <CButton color="link" size="sm" className="text-muted">
                      <CIcon name="cil-options" />
                    </CButton>
                  </div>
                </CCol>
              </CRow>

              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">
                      <CIcon name="cil-people" />
                    </th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/1.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-us" title="us" id="us" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="50"
                      />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-mastercard" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/2.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">
                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-br" title="br" id="br" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="10"
                      />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-visa" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/3.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-in" title="in" id="in" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>74%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress
                        className="progress-xs"
                        color="warning"
                        value="74"
                      />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-stripe" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/4.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-fr" title="fr" id="fr" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>98%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value="98"
                      />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/5.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-es" title="es" id="es" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>22%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="22"
                      />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-google-pay" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"avatars/6.jpg"}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-pl" title="pl" id="pl" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-amex" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  );
};

export default Dashboard;
