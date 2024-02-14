import React from "react";
import { useState } from "react";
import Head from "next/head";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';
import Nav from '../pages/components/nav';

export default function printers(){

  const data =[
    {
      model:"HP LaserJet Pro M402",
      user:"Sistemas",
      int:"157-158-159",
      ip:"192.168.171.6",
      area:"Sistemas",
      serie:null,
    },
    {
      model:"HP Deskjet Ink Advantage 4645",
      user:"Gerardo Rui",
      int:"159",
      ip:"usb",
      area:"Sistemas",
      serie:"CN5125932C05Z4",
    },
    {
      model:"HP LaserJet Pro M402",
      user:"Secretaria",
      int:"122-170",
      ip:"usb",
      area:"Secretaria",
      serie:null,
    },
    {
      model:"HP Deskjet Ink Advantage 4645",
      user:"Eduardo Cerutti",
      int:"102",
      ip:"usb",
      area:"Secretaria",
      serie:null,
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Bancosangre1",
      int:"174",
      ip:"usb",
      area:"Banco de Sangre",
      serie:null,
    },
    {
      model:"HP Deskjet Ink Advantage 2545",
      user:"Bancosangre1",
      int:"174",
      ip:"usb",
      area:"Banco de Sangre",
      serie:null,
    },
    {
      model:"HP LaserJet serie 1020",
      user:"Luis Monges",
      int:"134",
      ip:"usb",
      area:"Compras",
      serie:"BRCS79VHXX",
    },
    {
      model:"HP Deskjet Ink Advantage 2515",
      user:"Matias Strasorier",
      int:"106",
      ip:"usb",
      area:"Compras",
      serie:null,
    },
    {
      model:"HP Laserjet P1006",
      user:"Daniel Marini",
      int:"175",
      ip:"usb",
      area:"Seguridad e Higiene",
      serie:null,
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Colombo Enrique",
      int:"",
      ip:"usb",
      area:"Iptv",
      serie:"BRBFC5FMM2",
    },
    {
      model:"Epson EcoTank L355",
      user:"Daniel Palacio",
      int:"168",
      ip:"usb",
      area:"Internet",
      serie:null,
    },
    {
      model:"Plotter HP Designjet T520",
      user:"Tecnica",
      int:"",
      ip:"192.168.170.36",
      area:"Tecnica",
      serie:"CN3372M02B",
    },
    {
      model:"Epson L375 Series",
      user:"Juan Hidalgo",
      int:"187",
      ip:"usb",
      area:"Tecnica",
      serie:null,
    },
    {
      model:"HP LaserJet 1102",
      user:"Sergio Peresotti",
      int:"172",
      ip:"usb",
      area:"Tesoreria",
      serie:"",
    },
    {
      model:"HP LaserJet Pro 400 MFP M425 (Odesa)",
      user:"Cajas Central - Iptv - Internet",
      int:"",
      ip:"192.168.170.30",
      area:"Cajas",
      serie:null,
    },
    {
      model:"HP LaserJet Pro 400 MFP M425 (Odesa)",
      user:"Ventas",
      int:"",
      ip:"192.168.170.28",
      area:"Ventas",
      serie:null,
    },
    {
      model:"HP LaserJet P4014",
      user:"Comercial",
      int:"163",
      ip:"192.168.170.10",
      area:"Comercial",
      serie:"",
    },
    {
      model:"HP M525 (Odesa)",
      user:"Comercial",
      int:"",
      ip:"192.168.170.12",
      area:"Comercial",
      serie:"MXFCGDD07C",
    },
    {
      model:"HP Deskjet Ink Advantage 3515",
      user:"Francisco Luna",
      int:"160",
      ip:"usb",
      area:"Comercial",
      serie:null,
    },
    {
      model:"HP LaserJet serie 1020",
      user:"Ricardo Aris",
      int:"123",
      ip:"usb",
      area:"Comercial",
      serie:null,
    },
    {
      model:"HP LaserJet 3015",
      user:"Contaduria",
      int:"",
      ip:"192.168.170.20",
      area:"Contaduria",
      serie:"BRBHC2QN73",
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Franco Gonzalez",
      int:"115",
      ip:"usb",
      area:"Contaduria",
      serie:"BRCSJ83KRD",
    },
    {
      model:"Epson XP-211",
      user:"Laura Oliver",
      int:"188",
      ip:"usb",
      area:"Gerencia",
      serie:null,
    },
    {
      model:"Hp Laser 107w",
      user:"Laura Oliver",
      int:"188",
      ip:"usb",
      area:"Gerencia",
      serie:"BRBSMBQDRK",
    },
    {
      model:"HP LaserJet Pro 400 MFP M425 (Odesa)",
      user:"Personal",
      int:"141",
      ip:"192.168.170.8",
      area:"Personal",
      serie:null,
    },
    {
      model:"HP Deskjet F4180",
      user:"Inspeccion Redes",
      int:null,
      ip:"usb",
      area:"Redes Electricas - Agua",
      serie:null,
    },
    {
      model:"HP LaserJet 1018",
      user:"Guardia Reclamo",
      int:null,
      ip:"usb",
      area:"Redes Electricas - Agua",
      serie:null,
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Perlo German",
      int:"166",
      ip: null,
      area:"Telefonia",
      serie:null,
    },
    {
      model:"HP LaserJet 1018",
      user:"Rodrigo Pettina",
      int:"183",
      ip:"usb",
      area:"Mantenimiento",
      serie:null,
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Martin Mena",
      int:"153",
      ip:"usb",
      area:"Mantenimiento",
      serie:"BRBSF95N24",
    },
    {
      model:"HP LaserJet Pro CP1525nw",
      user:"Mantenimiento",
      int:"143",
      ip:"192.168.170.22",
      area:"Mantenimiento",
      serie:null,
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Tablero01",
      int:"103-150",
      ip:"192.168.170.22",
      area:"Tablero",
      serie:"BRBSF4BMPB",
    },
    {
      model:"HP LaserJet 1018",
      user:"Caja Lote 13",
      int:"179",
      ip:"usb",
      area:"Cajas",
      serie:null,
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Caja Lote 15",
      int:"164",
      ip:"usb",
      area:"Cajas",
      serie:"BRBSFCBNYV",
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Caja Sinsacate",
      int:"446202",
      ip:"usb",
      area:"Cajas",
      serie:"BRBSF79MQ8",
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Caja Ruta 9",
      int:"445341",
      ip:"usb",
      area:"Cajas",
      serie:"BRBSF19NFN",
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Deposito1",
      int:"445352",
      ip:"usb",
      area:"Deposito",
      serie:"BRBSF19NCG",
    },
    {
      model:"Hp Laserjet P1102w",
      user:"Deposito6",
      int:"445352",
      ip:"usb",
      area:"Deposito",
      serie:"BRBSF19NFQ",
    },
    {
      model:"HP LaserJet P4014",
      user:"Deposito",
      int:"445352",
      ip:"192.168.170.18",
      area:"Deposito",
      serie:"BRFX124475",
    },
    {
      model:"HP LaserJet Pro M402",
      user:"Reclamos1",
      int:"119",
      ip:"usb",
      area:"Reclamos",
      serie:null,
    },
  
  ];

  //Filtro 
  const [user, setUser] = useState('');
  const [area, setArea] = useState('');
  const [model, setModel] = useState('')
  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const handleFiltrar = () => {
    const datosFiltrados = data.filter((item) =>{
      return (
        (user === '' || item.user.toLowerCase().includes(user.toLowerCase())) &&
        (area === '' || item.area.toLowerCase().includes(area.toLowerCase())) &&
        (model === '' || item.model.toLowerCase().includes(model.toLowerCase()))
      );
    });

    setDatosFiltrados(datosFiltrados);
  };

    return(
        <>
          <Head>
            <title>Impresoras</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logoCoopIcono.ico" />
          </Head>
          <Nav/>
           <div className="conteinerPrinters">
           <h1 className="titlePrinters">Impresoras</h1>
            <Form className="searchPrinters">
            <Form.Label><b>Nombre y Apellido</b></Form.Label>
            <Form.Control type="text" placeholder="Nombre y Apellido" autoComplete="off"
            value={user} onChange={(e)=>setUser(e.target.value)}/>

                {/*Primera Linea*/}
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><b>Modelo</b></Form.Label>
                    <Form.Select value={model} onChange={(e)=>setModel(e.target.value)}>
                      <option></option>
                      <option>HP LaserJet Pro M402</option>
                      <option>HP LaserJet 1018</option>
                      <option>HP LaserJet serie 1020</option>
                      <option>HP Laserjet P1006</option>
                      <option>Hp Laserjet P1102w</option>
                      <option>HP M525</option>
                      <option>Plotter HP Designjet T520</option>
                      <option>Epson L375 Series</option>
                      <option>HP Deskjet F4180</option>
                      <option>HP Deskjet Ink Advantage 2515</option>
                      <option>HP Deskjet Ink Advantage 2545</option>
                      <option>HP Deskjet Ink Advantage 3515</option>
                      <option>HP Deskjet Ink Advantage 4645</option>
                      <option>HP LaserJet 3015</option>
                      <option>Hp Laser 107w</option>
                      <option>Epson EcoTank L355</option>
                      <option>Epson XP-211</option>
                      <option>HP LaserJet Pro CP1525nw</option>
                      <option>HP LaserJet P4014</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><b>Area</b></Form.Label>
                    <Form.Select value={area} onChange={(e)=>setArea(e.target.value)} >
                      <option></option>
                      <option>Banco de Sangre</option>
                      <option>Contaduria</option>
                      <option>Compras</option>
                      <option>Comercial</option>
                      <option>Cajas</option>
                      <option>Deposito</option>
                      <option>Gerencia</option>
                      <option>Mantenimiento</option>
                      <option>Personal</option>
                      <option>Seguridad e Higiene</option>
                      <option>Iptv</option>
                      <option>Internet</option>
                      <option>Presidencia</option>
                      <option>Reclamos</option>
                      <option>Redes Electricas - Agua</option>
                      <option>Secretaria</option>
                      <option>Sistemas</option>
                      <option>Tablero</option>
                      <option>Tecnica</option>
                      <option>Tesoreria</option>
                      <option>Telefonia</option>
                      <option>Ventas</option>
                    </Form.Select>
                  </Form.Group>                
                </Row>

                <Button variant="secondary" onClick={handleFiltrar}><SearchIcon/>
                  Buscar
                </Button>
              </Form>

              <div className="tableData">
                  <Table striped bordered hover data={data}>
                    <thead>
                      <tr>
                        <th>Modelo</th>
                        <th>Usuario</th>
                        <th>Telefono</th>
                        <th>Nro. de IP</th>
                        <th>Área</th>
                        <th>Nro. de Serie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datosFiltrados.map((item, index) =>(
                      <tr key={index}>
                        <td>{item.model}</td>
                        <td>{item.user}</td>
                        <td>{item.int}</td>
                        <td>{item.ip}</td>
                        <td>{item.area}</td>
                        <td>{item.serie}</td>
                      </tr>
                      ))}
                      </tbody>
                  </Table>
              </div>
              

           </div>
        </>
    );
};
