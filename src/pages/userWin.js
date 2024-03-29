import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Nav from "./components/nav";
import Head from "next/head";


const computer =[
  {
    ip:"192.168.170.65",
    cpu:"LopezDiego",
    area:"Agua Potable",
    user:"dlopez",
    password:"dlopez",
    int:"146",
    propPc:"Core I5-7g / 8 Ram /240 Sdd - 1TB",
    monitor:"Lg 22",
    impPred:"HP LaserJet Pro 425 (Red)",
    impAlt:null,
  },
  {
    ip:"192.168.170.155",
    cpu:"MesaEntrada",
    area:"Atención al Cliente",
    user:"gcastro",
    password:"gaviola",
    int:"",
    propPc:"",
    monitor:"Lg",
    impPred:"HP LaserJet 1102",
    impAlt:"HP LaserJet Pro 425 (Red - Cajas)",
  },
  {
    ip:"192.168.170.112",
    cpu:"BancoSangre",
    area:"Banco de Sangre",
    user:"rcabuchi",
    password:"karina",
    int:"",
    propPc:"",
    monitor:"Lg",
    impPred:"HP LaserJet 1102",
    impAlt:"",
    },
  {
    ip:"192.168.170.116",
    cpu:"BancoSangre1",
    area:"Banco de Sangre",
    user:"rlecler",
    password:"roxana",
    int:"",
    propPc:"",
    monitor:"Lg",
    impPred:"HP LaserJet 1102",
    impAlt:"",
  },
  {
    ip:"192.168.170.64",
    cpu:"Caja1",
    area:"Cajas",
    user:"caja01",
    password:"checho24",
    int:"",
    propPc:"",
    monitor:"Lg",
    impPred:"HP LaserJet Pro 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.114",
    cpu:"Caja2",
    area:"Cajas",
    user:"caja02",
    password:"checho24",
    int:"",
    propPc:"",
    monitor:"Lg",
    impPred:"HP LaserJet Pro 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.94",
    cpu:"Caja3 (backupcajas)",
    area:"Cajas",
    user:"caja03",
    password:"caja03",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet Pro 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.129",
    cpu:"CajaRuta9",
    area:"Cajas",
    user:"caja91",
    password:"caja91",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"",
  },
  {
    ip:"192.168.170.124",
    cpu:"CajaRuta91",
    area:"Cajas",
    user:"caja91",
    password:"caja91",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"",
  },
  {
    ip:"192.168.170.62",
    cpu:"CajaLote15",
    area:"Cajas",
    user:"caja151",
    password:"caja151",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"",
  },
  {
    ip:"192.168.170.84",
    cpu:"CajaLote151",
    area:"Cajas",
    user:"caja151",
    password:"caja151",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"CajaSinsacate",
    area:"Cajas",
    user:"cajasinsa01",
    password:"sinsacate",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"",
  },
  {
    ip:"192.168.170.85",
    cpu:"LunaFrancisco",
    area:"Comercial",
    user:"fluna",
    password:"francisco",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 525 (Red)",
    impAlt:"HP LaserJet 3015 (Red) ",
  },
  {
    ip:"",
    cpu:"PatatGimena",
    area:"Comercial",
    user:"tomaestados",
    password:"fabian",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 3015 (Red)",
    impAlt:"HP LaserJet 525 (Red)",
  },
  {
    ip:"192.168.170.105",
    cpu:"PeraltaJuan",
    area:"Comercial",
    user:"jperaltaochoa",
    password:"jperaltaochoa",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 525 (Red)",
    impAlt:"HP LaserJet 3015 (Red)",
  },
  {
    ip:"192.168.170.107",
    cpu:"AnzoliniMonica",
    area:"Comercial",
    user:"manzolini",
    password:"cereza",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 525 (Red)",
    impAlt:"HP LaserJet 3015 (Red)",
  },
  {
    ip:"192.168.170.97",
    cpu:"Caverzaciov",
    area:"Comercial",
    user:"mcaverzacio",
    password:"valeria",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 525 (Red)",
    impAlt:"HP LaserJet 3015 (Red)",
  },
  {
    ip:"192.168.170.140",
    cpu:"TomaEstados3",
    area:"Comercial",
    user:"publico04",
    password:"ventas",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 3015 (Red)",
    impAlt:"HP LaserJet 525 (Red)",
  },
  {
    ip:"192.168.170.96",
    cpu:"ArisRicardo",
    area:"Comercial",
    user:"raris",
    password:"ricardo",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1020",
    impAlt:"HP LaserJet 525 (Red)",
  },
  {
    ip:"192.168.170.89",
    cpu:"CamposMariano",
    area:"Comercial",
    user:"rcampos",
    password:"mariano",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 525 (Red)",
    impAlt:"HP LaserJet 3015 (Red)",
  },
  {
    ip:"",
    cpu:"TomaEstados",
    area:"Comercial",
    user:"tomaestados",
    password:"fabian",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 525 (Red)",
    impAlt:"HP LaserJet 3015 (Red)",
  },
  {
    ip:"192.168.170.113",
    cpu:"MaldonadoClau",
    area:"Compras",
    user:"cmaldonado",
    password:"es0sad0",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1018",
    impAlt:"Hp LaserJet 1020",
  },
  {
    ip:"192.168.170.147",
    cpu:"Compras",
    area:"Compras",
    user:"mtrasorier",
    password:"mstrasorier",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"Hp LaserJet 1020",
    impAlt:"HP LaserJet 1018",
  },
  {
    ip:"",
    cpu:"MongesLuis",
    area:"Compras",
    user:"lmonges",
    password:"lmonges",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1018",
    impAlt:"Hp LaserJet 1020",
  },
  {
    ip:"192.168.170.66",
    cpu:"BraidaMariano",
    area:"Compras",
    user:"mbraida",
    password:"mbraida",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"Hp LaserJet 1020",
    impAlt:"HP LaserJet 1018",
  },
  {
    ip:"192.168.170.164",
    cpu:"Presidencia",
    area:"Consejo",
    user:"presidencia",
    password:"presidencia",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.100",
    cpu:"Consejo",
    area:"Consejo",
    user:"consejo",
    password:"consejo",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.99",
    cpu:"AfipContaduria",
    area:"Contaduria",
    user:"afip",
    password:"contaduria",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 3015",
    impAlt:"",
  },
  {
    ip:"192.168.170.103",
    cpu:"FrancoGonzalez",
    area:"Contaduria",
    user:"fgonzalez",
    password:"franco",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"HP LaserJet 3015",
  },
  {
    ip:"192.168.170.102",
    cpu:"PonceGaston",
    area:"Contaduria",
    user:"gponce",
    password:"gaston01",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 3015",
    impAlt:"",
  },
  {
    ip:"192.168.170.61",
    cpu:"StolzingAriel",
    area:"Contaduria",
    user:"gstolzing",
    password:"lalala",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 3015",
    impAlt:"",
  },
  {
    ip:"192.168.170.134",
    cpu:"Deposito",
    area:"Deposito",
    user:"deposito01",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.131",
    cpu:"Deposito01",
    area:"Deposito",
    user:"deposito01",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.136",
    cpu:"Deposito1",
    area:"Deposito",
    user:"deposito04",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.132",
    cpu:"Deposito3",
    area:"Deposito",
    user:"deposito04",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.137",
    cpu:"Deposito5",
    area:"Deposito",
    user:"deposito01",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.135",
    cpu:"Deposito6",
    area:"Deposito",
    user:"jbongiovanni",
    password:"22183767",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.163",
    cpu:"Deposito7",
    area:"Deposito",
    user:"deposito04",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.138",
    cpu:"Deposito9",
    area:"Deposito",
    user:"depsoito04",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.171.114",
    cpu:"FiscalDeposito",
    area:"Deposito",
    user:"deposito03",
    password:"deposito",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.130",
    cpu:"DepositoReclamo",
    area:"Deposito",
    user:"reclamos",
    password:"reclamos",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.111",
    cpu:"OliverLaura",
    area:"Gerencia",
    user:"loliver",
    password:"lauraoliver",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.158",
    cpu:"GuardiaCentral",
    area:"Guardia Seguridad",
    user:"gcentral",
    password:"central2023",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.76",
    cpu:"GuardiaRuta9",
    area:"Guardia Seguridad",
    user:"gruta9",
    password:"ruta92023",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"100.100.100.52",
    cpu:"InternetFront (Belen Genovese)",
    area:"Internet",
    user:"bgenovese",
    password:"cruze931",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.144",
    cpu:"DPalacio",
    area:"Internet",
    user:"dpalacio",
    password:"palacio2020",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.121",
    cpu:"Mostrador-Inter",
    area:"Internet",
    user:"internet",
    password:"coop1947",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:null,
    cpu:"LopezLucas",
    area:"Internet",
    user:"llopez",
    password:"lucas1",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.133",
    cpu:"SeculiniMauricio",
    area:"Internet",
    user:"mauriseculini",
    password:"mauricio",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.145",
    cpu:"ZayaSebastian",
    area:"IPTV",
    user:"iptv",
    password:"2022Sebanx560+",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP Laserjet 500 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.185",
    cpu:"ColomboEnrique",
    area:"IPTV",
    user:"ecolombo",
    password:"enrique",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"HP Laserjet 500 (Red)",
  },
  {
    ip:"192.168.170.141",
    cpu:"Iptv6",
    area:"IPTV",
    user:"iptv1",
    password:"iptv2022",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP Laserjet 500 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.143",
    cpu:"Iptv5",
    area:"IPTV",
    user:"iptv3",
    password:"iptv3",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP Laserjet 500 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.180",
    cpu:"Iptv3",
    area:"IPTV",
    user:"iptv2",
    password:"iptv2022",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP Laserjet 500 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.123",
    cpu:"Laboratorio1",
    area:"Mantenimiento",
    user:"jgriguol",
    password:"stk2002",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"Laboratorio2",
    area:"Mantenimiento",
    user:"mmena",
    password:"labmena1",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 1102",
    impAlt:"HP LaserJet 425 (Red)",
  },
  {
    ip:"",
    cpu:"Laboratorio3",
    area:"Mantenimiento",
    user:"laboratorio",
    password:"labmed1",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.151",
    cpu:"Mantenimiento",
    area:"Mantenimiento",
    user:"laboratorio",
    password:"labmed1",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"RamellaSeba",
    area:"Mantenimiento",
    user:"laboratorio",
    password:"labmed1",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.52",
    cpu:"Flota",
    area:"Mantenimiento",
    user:"laboratorio",
    password:"labmed1",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"HP LaserJet Color 1525",
  },
  {
    ip:"192.168.170.86",
    cpu:"PettinaRodrigo",
    area:"Mantenimiento",
    user:"rpettina",
    password:"queteimxta",
    monitor:"",
    int:"",
    propPc:"",
    impPred:"HP LaserJet 1018",
    impAlt:"HP LaserJet 425 (Red)",
  },
  {
    ip:"192.168.170.75",
    cpu:"PaceLuis",
    area:"Mantenimiento",
    user:"laboratorio",
    password:"labmed1",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.53",
    cpu:"Personal01",
    area:"Personal",
    user:"croya",
    password:"claudio",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.156",
    cpu:"Personal02",
    area:"Personal",
    user:"croya",
    password:"claudio",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.182",
    cpu:"Personal03",
    area:"Personal",
    user:"ccopetti - ngonzalo",
    password:"candela - gonzalo2023",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.73",
    cpu:"Reclamos",
    area:"Reclamos",
    user:"ftiplisky",
    password:"fernando72",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet Pro M402",
    impAlt:"",
  },
  {
    ip:"192.168.170.72",
    cpu:"Reclamos1",
    area:"Reclamos",
    user:"ftiplisky",
    password:"fernando72",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet Pro M402",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"ArllaMario",
    area:"Redes Eléctricas",
    user:"marlla",
    password:"30543657",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.93",
    cpu:"GuardiaReclamo",
    area:"Redes Eléctricas",
    user:"reclamos",
    password:"reclamos",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"192.168.170.154",
    cpu:"InspeccionRedes",
    area:"Redes Eléctricas",
    user:"iredes",
    password:"redes554",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"HP LaserJet 425 (Red)",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"",
    area:"",
    user:"",
    password:"",
    int:"",
    propPc:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },

];

export default function userWindows () {

  /*Modal*/
  const [showModal, setShowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setShowModal(true);
  };

  /*Formulario Search*/

  const [filterName, setFilterName] = useState('');
  const [filterGender, setFilterGender] = useState('Todos');
  const [filteredData, setFilteredData] = useState([]);

  const handleNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setFilterGender(event.target.value);
  };

  // const applyFilters = () => {
  //   const newFilteredData = computer.filter((item) => {
  //     const nameMatch = item.cpu.toLowerCase().includes(filterName.toLowerCase());
  //     const genderMatch = filterGender === 'Todos' || item.area === filterGender;

  //     return nameMatch && genderMatch;
  //   });

  //   setFilteredData(newFilteredData);
  // };


  /*Button de Reseteo de tabla */
  // const resetFilters = () => {
  //   setFilterName('');
  //   setFilterGender('Todos');
  //   setFilteredData([]);
  // };
  
  /* */
  const [estadoBoton, setEstadoBoton] = useState(true);

 

  const handleClick = () =>{
    if(estadoBoton){
      const newFilteredData = computer.filter((item) => {
        const nameMatch = item.cpu.toLowerCase().includes(filterName.toLowerCase());
        const genderMatch = filterGender === 'Todos' || item.area === filterGender;
  
        return nameMatch && genderMatch;
      });
  
      setFilteredData(newFilteredData);
    }
    else{
      
        setFilterName('');
        setFilterGender('Todos');
        setFilteredData([]);
        setEstadoBoton(estadoBoton);
    }
  }

  return(
    
    <>
      <Head>
            <title>Usuarios Windows</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logoCoopIcono.ico" />
      </Head>
      <Nav />
      <div className="conteinerUserWin">
        <h1 className="titleWindows">Usuarios de Windows</h1>
        <Form className="searchUser">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label><b>Nombre de Pc</b></Form.Label>
              <Form.Control placeholder="Ingrese el nombre" autoComplete="off" value={filterName} onChange={handleNameChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label><b>Area</b></Form.Label>
              <Form.Select defaultValue="Todas..." value={filterGender} onChange={handleGenderChange} >
                <option></option>
                <option>Agua Potable</option>
                <option>Atención al Cliente</option>
                <option>Banco de Sangre</option>
                <option>Cajas</option>
                <option>Comercial</option>
                <option>Compras</option>
                <option>Consejo </option>
                <option>Contaduría</option>
                <option>Deposito </option>
                <option>Gerencia</option>
                <option>Guardia Seguridad</option>
                <option>Higiene y Seguridad</option>
                <option>Internet</option>
                <option>IPTV</option>
                <option>Mantenimiento</option>
                <option>Personal</option>
                <option>Reclamos</option>
                <option>Redes Eléctricas</option>
                <option>Secretaria</option>
                <option>Sistemas</option>
                <option>Tablero</option>
                <option>Técnica</option>
                <option>Telefonía</option>
                <option>Tesorería</option>
                <option>Ventas</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/* <Button variant="success" onClick={applyFilters}>Buscar</Button>
          <Button variant="success" onClick={resetFilters}>Reiniciar</Button> */}

          <Button variant="success" onClick={handleClick}>{estadoBoton ? 'Buscar' : 'Reiniciar'}</Button>

        </Form>

        <div className="tableUserWindows">
          <Table striped bordered hover >
            <thead >
              <tr className="indiceTable">
                <th>Computadora</th>
                <th>Área</th>
                <th>Usuario</th>
                <th>Contraseña</th>
                <th>Ver Mas</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item) => (
              <tr key={item}>
                <td><b>{item.cpu}</b></td>
                <td>{item.area}</td>
                <td>{item.user}</td>
                <td>{item.password}</td>
                <td>
                  <Button variant="info" onClick={() => handleRowClick(item)}>
                    <b>Info</b>
                  </Button>

                  <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header className="TitleModal" closeButton>
                      <Modal.Title>Informacion Adicional</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {selectedRowData && (
                      <>
                        <p><b>IP:</b> {selectedRowData.ip}</p>
                        <p><b>Area:</b> {selectedRowData.area}</p>
                        <p><b>Usuario de Windows:</b> {selectedRowData.user}</p>
                        <p><b>Contraseña:</b> {selectedRowData.password}</p>
                        <p><b>Impresoras Predeterminada:</b> {selectedRowData.impPred}</p>
                        <p><b>Impresoras Alternativa:</b> {selectedRowData.impAlt}</p>
                        <p><b>Monitor:</b> {selectedRowData.monitor}</p>
                        <p><b>Caracteristicas de PC:</b> {selectedRowData.propPc}</p>
                        <p><b>Interno:</b> {selectedRowData.int}</p>
                      </>
                        )}
                    </Modal.Body>
                    {/* <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                      </Button>
                    </Modal.Footer> */}
                  </Modal>
                </td>
              </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </div>
    </>
  );
};