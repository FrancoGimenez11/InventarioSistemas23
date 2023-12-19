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
    monitor:"Lg",
    impPred:"",
    impAlt:null,
  },
  {
    ip:"192.168.170.154",
    cpu:"InspeccionRedes",
    area:"Agua Potable",
    user:"iredes",
    password:"redes554",
    monitor:"Lg",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.171.102",
    cpu:"MesaEntrada",
    area:"Atención al Cliente",
    user:"gcastro",
    password:"gaviola",
    monitor:"Lg",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.112",
    cpu:"BancoSangre",
    area:"Banco de Sangre",
    user:"rcabuchi",
    password:"karina",
    monitor:"Lg",
    impPred:"",
    impAlt:"",
    },
  {
    ip:"192.168.170.116",
    cpu:"BancoSangre1",
    area:"Banco de Sangre",
    user:"rlecler",
    password:"roxana",
    monitor:"Lg",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.64",
    cpu:"Caja1",
    area:"Cajas",
    user:"caja01",
    password:"checho24",
    monitor:"Lg",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.114",
    cpu:"Caja2",
    area:"Cajas",
    user:"caja02",
    password:"checho24",
    monitor:"Lg",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.94",
    cpu:"Caja3 (backupcajas)",
    area:"Cajas",
    user:"caja03",
    password:"caja03",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.129",
    cpu:"CajaRuta9",
    area:"Cajas",
    user:"caja91",
    password:"caja91",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.124",
    cpu:"CajaRuta91",
    area:"Cajas",
    user:"caja91",
    password:"caja91",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.62",
    cpu:"CajaLote15",
    area:"Cajas",
    user:"caja151",
    password:"caja151",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.84",
    cpu:"CajaLote151",
    area:"Cajas",
    user:"caja151",
    password:"caja151",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"CajaSinsacate",
    area:"Cajas",
    user:"cajasinsa01",
    password:"sinsacate",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.85",
    cpu:"LunaFrancisco",
    area:"Comercial",
    user:"fluna",
    password:"francisco",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"PatatGimena",
    area:"Comercial",
    user:"tomaestados",
    password:"fabian",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.105",
    cpu:"PeraltaJuan",
    area:"Comercial",
    user:"jperaltaochoa",
    password:"jperaltaochoa",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.107",
    cpu:"AnzoliniMonica",
    area:"Comercial",
    user:"manzolini",
    password:"cereza",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.97",
    cpu:"Caverzaciov",
    area:"Comercial",
    user:"mcaverzacio",
    password:"valeria",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.140",
    cpu:"TomaEstados3",
    area:"Comercial",
    user:"publico04",
    password:"ventas",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.96",
    cpu:"ArisRicardo",
    area:"Comercial",
    user:"raris",
    password:"ricardo",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.89",
    cpu:"CamposMariano",
    area:"Comercial",
    user:"rcampos",
    password:"mariano",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"TomaEstados",
    area:"Comercial",
    user:"tomaestados",
    password:"fabian",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.113",
    cpu:"MaldonadoClau",
    area:"Compras",
    user:"cmaldonado",
    password:"es0sad0",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.147",
    cpu:"Compras",
    area:"Comercial",
    user:"mtrasorier",
    password:"mstrasorier",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"MongesLuis",
    area:"Comercial",
    user:"lmonges",
    password:"lmonges",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.66",
    cpu:"BraidaMariano",
    area:"Comercial",
    user:"mbraida",
    password:"mbraida",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.164",
    cpu:"Presidencia",
    area:"Consejo",
    user:"presidencia",
    password:"presidencia",
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
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.103",
    cpu:"FrancoGonzalez",
    area:"Contaduria",
    user:"fgonzalez",
    password:"franco",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.102",
    cpu:"PonceGaston",
    area:"Contaduria",
    user:"gponce",
    password:"gaston01",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.61",
    cpu:"StolzingAriel",
    area:"Contaduria",
    user:"gstolzing",
    password:"lalala",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"192.168.170.134",
    cpu:"Deposito",
    area:"Deposito",
    user:"deposito01",
    password:"deposito",
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
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"",
    area:"",
    user:"",
    password:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },
  {
    ip:"",
    cpu:"",
    area:"",
    user:"",
    password:"",
    monitor:"",
    impPred:"",
    impAlt:"",
  },

];

export default function userWindows () {

  /*Modal*/
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const applyFilters = () => {
    const newFilteredData = computer.filter((item) => {
      const nameMatch = item.cpu.toLowerCase().includes(filterName.toLowerCase());
      const genderMatch = filterGender === 'Todos' || item.area === filterGender;

      return nameMatch && genderMatch;
    });

    setFilteredData(newFilteredData);
  };


  /*Button de Reseteo de tabla */
  const resetFilters = () => {
    setFilterName('');
    setFilterGender('Todos');
    setFilteredData([]);
  };


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
                <option>Todas...</option>
                <option>Agua Potable</option>
                <option>Atención al Cliente</option>
                <option>Banco de Sangre</option>
                <option>Cajas</option>
                <option>Comercial</option>
                <option>Compras</option>
                <option>Consejo </option>
                <option>Contaduría</option>
                <option>Deposito </option>
                <option>Edificio Administrativo</option>
                <option>Gerencia</option>
                <option>Guardia Seguridad</option>
                <option>Herrería</option>
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
                <option>Taller Mecánico</option>
                <option>Técnica</option>
                <option>Telefonía</option>
                <option>Tesorería</option>
                <option>Varios</option>
                <option>Ventas</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="success" onClick={applyFilters}>Buscar</Button>
          <Button variant="success" onClick={resetFilters}>Reiniciar</Button>

        </Form>

        <div className="tableUserWindows">
          <Table striped bordered hover >
            <thead >
              <tr className="indiceTable">
                <th>IP</th>
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
                <td>{item.ip}</td>
                <td><b>{item.cpu}</b></td>
                <td>{item.area}</td>
                <td>{item.user}</td>
                <td>{item.password}</td>
                <td>
                  <Button variant="info" onClick={handleShow}>
                    <b>Info</b>
                  </Button>

                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header className="TitleModal" closeButton>
                      <Modal.Title>Informacion Adicional</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><b>Impresoras Predeterminada:</b></p>
                        <p><b>Impresoras Alternativa:</b></p>
                        <p><b>Otras:</b></p>
                        <p><b>Otras:</b></p>
                        <p>Mas</p>
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