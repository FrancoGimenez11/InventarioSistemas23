import React,{ useState } from "react";
import Head from "next/head";
import Nav from "./components/nav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';

const user = [
  {
    usuario: "Franco Gimenez",
    area: "Sistemas",
    interno: 157,
    wsp: null,
    email: "franco.gimenez@coop5.com.ar"
  },
  {
    usuario: "Ezequiel Torres",
    area: "Sistemas",
    interno: 157,
    wsp: null,
    email: "ezequiel.torres@coop5.com.ar"
  },
  {
    usuario: "Gerardo Rui",
    area: "Sistemas",
    interno: 159,
    wsp: null,
    email: "gerardo.rui@coop5.com.ar"
  },
  {
    usuario: "Pablo Gonzalez",
    area: "Sistemas",
    interno: 158,
    wsp: null,
    email: "pablo.gonzalez@coop5.com.ar"
  },
  {
    usuario: "Carlos Montes",
    area: "Sistemas",
    interno: 159,
    wsp: null,
    email: "carlos.montes@coop5.com.ar"
  },
  {
    usuario: "Sergio Peresotti",
    area: "Tesorería",
    interno: 172,
    wsp: null,
    email: "speresotti@coop5.com.ar"
  },
  {
    usuario: "Marcelo Rizzi",
    area: "Tesorería",
    interno: 109,
    wsp: null,
    email: "marcelo.rizzi@coop5.com.ar"
  },
  {
    usuario: "Aldo Gomez",
    area: "Tesorería",
    interno: 172,
    wsp: null,
    email: "aldo.gomez@coop5.com.ar"
  },
  {
    usuario: "Claudia Maldonado",
    area: "Compras",
    interno: 106,
    wsp: null,
    email: "compras@coop5.com.ar"
  },
  {
    usuario: "Luis Monge",
    area: "Compras",
    interno: 134,
    wsp: null,
    email: "compras@coop5.com.ar"
  },
  {
    usuario: "Matias Strasorier",
    area: "Compras",
    interno: 137,
    wsp: null,
    email: "matias.strasorier@coop5.com.ar"
  },
  {
    usuario: "Mariano Braida",
    area: "Compras",
    interno: 135,
    wsp: null,
    email: "mariano.braida@coop5.com.ar"
  },
  {
    usuario: "Gonzalo Daniel Nicolodi",
    area: "Personal",
    interno: 141,
    wsp: null,
    email: "gonzalo.nicolodi@coop5.com.ar"
  },
  {
    usuario: "Mercedes Seculini",
    area: "Personal",
    interno: 141,
    wsp: null,
    email: "maseculini@coop5.com.ar"
  },
  {
    usuario: "Claudio A. Roya",
    area: "Personal",
    interno: 140,
    wsp: null,
    email: "claudio.roya@coop5.com.ar"
  },
  {
    usuario: "Exequiel Isasmendi",
    area: "Personal",
    interno: 108,
    wsp: "351-6527341",
    email: "exequiel.isasmendi@coop5.com.ar"
  },
  {
    usuario: "José Eduardo Cerutti",
    area: "Secretaria",
    interno: 102,
    wsp: null,
    email: "eduardo.cerutti@coop5.com.ar"
  },
  {
    usuario: "Pablo Antonietti",
    area: "Secretaria",
    interno: "122-125-170",
    wsp: null,
    email: "pablo.antonietti@coop5.com.ar"
  },
  {
    usuario: "Marcos Berrondo",
    area: "Técnica",
    interno: 121,
    wsp: "3525-302452",
    email: "marcos.berrondo@coop5.com.ar"
  },
  {
    usuario: "Juan Hidalgo",
    area: "Técnica",
    interno: 187,
    wsp: "3525-302452",
    email: "juan.hidalgo@coop5.com.ar"
  },
  {
    usuario: "Mirco Gino Chiarandini",
    area: "Técnica",
    interno: 186,
    wsp: "3525-302452",
    email: "gino.chiarandini@coop5.com.ar"
  },
  {
    usuario: "Fernando Peschiutta",
    area: "Técnica",
    interno: 184,
    wsp: "3525-302452",
    email: "fernando.peschiutta@coop5.com.ar"
  },
  {
    usuario: "Emiliano Cragniolini",
    area: "Técnica",
    interno: 185,
    wsp: "3525-302452",
    email: "emiliano.cragniolini@coop5.com.ar"
  },
  {
    usuario: "Mariano Grande",
    area: "Técnica",
    interno: 183,
    wsp: "3525-302452",
    email: "mariano.grande@coop5.com.ar"
  },
  {
    usuario: "Gastón Ponce",
    area: "Contaduría",
    interno: 116,
    wsp: null,
    email: "gaston.ponce@coop5.com.ar"
  },
  {
    usuario: "Maximiliano A. Agüero",
    area: "Contaduría",
    interno: 116,
    wsp: null,
    email: "maximiliano.aguero@coop5.com.ar"
  },
  {
    usuario: "Franco Javier González",
    area: "Contaduría",
    interno: 115,
    wsp: null,
    email: "franco.gonzalez@coop5.com.ar"
  },
  {
    usuario: "Ariel Stolzing",
    area: "Contaduría",
    interno: 115,
    wsp: null,
    email: "ariel.stolzing@coop5.com.ar"
  },
  {
    usuario: "Agustina Gutiérrez",
    area: "Ventas",
    interno: 161,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Juan M. Peralta",
    area: "Ventas",
    interno: 162,
    wsp: null,
    email: "juanm.peralta@coop5.com.ar"
  },
  {
    usuario: "Franco Monte",
    area: "Ventas",
    interno: "161-117",
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Martin Ferreyra",
    area: "Ventas",
    interno: 163,
    wsp: null,
    email: "martin.ferreyra@coop5.com.ar"
  },
  {
    usuario: "Fernando Tiplisky",
    area: "Reclamos",
    interno: 119,
    wsp: null,
    email: "fernando.tiplisky@coop5.com.ar"
  },
  {
    usuario: "Julio Helin",
    area: "Reclamos",
    interno: 126,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Guardia de Reclamos",
    area: "Reclamos",
    interno: 155,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Ricardo D. Aris",
    area: "Comercial",
    interno: 123,
    wsp: "3525-610295",
    email: "ricardo.aris@coop5.com.ar"
  },
  {
    usuario: "Mariano Campos",
    area: "Comercial",
    interno: 120,
    wsp: null,
    email: "mariano.campos@coop5.com.ar"
  },
  {
    usuario: "Monica Anzolini",
    area: "Comercial",
    interno: 118,
    wsp: null,
    email: "monica.anzolini@coop5.com.ar"
  },
  {
    usuario: "Patricia Rizzi",
    area: "Comercial",
    interno: 113,
    wsp: null,
    email: "patricia.rizzi@coop5.com.ar"
  },
  {
    usuario: "Valeria Caverzacio",
    area: "Comercial",
    interno: 189,
    wsp: null,
    email: "valeria.caverzacio@coop5.com.ar"
  },
  {
    usuario: "Ricardo D. Aris",
    area: "Comercial",
    interno: 123,
    wsp: "3525-610295",
    email: "ricardo.aris@coop5.com.ar"
  },
  {
    usuario: "Juan Peralta Ochoa",
    area: "Comercial",
    interno: 111,
    wsp: null,
    email: "juanperalta@coop5.com.ar"
  },
  {
    usuario: "Francisco Luna (Facturación)",
    area: "Comercial",
    interno: 160,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Comercial",
    area: "Comercial",
    interno: 190,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Gabriela Castro",
    area: "Atención al Cliente",
    interno: 128,
    wsp: "3525-466201",
    email: "gabriela.castro@coop5.com.ar"
  },
  {
    usuario: "Cr. Raúl A. Toledo",
    area: "Gerencia",
    interno: 110,
    wsp: null,
    email: "raul.toledo@coop5.com.ar"
  },
  {
    usuario: "Cra. Laura Oliver",
    area: "Gerencia",
    interno: 188,
    wsp: null,
    email: "laura.oliver@coop5.com.ar"
  },
  {
    usuario: "Gabriela Fanin",
    area: "Banco de Sangre",
    interno: 145,
    wsp: "3525-487445",
    email: "bancodesangre@coop5.com.ar"
  },
  {
    usuario: "Roxana Lecler",
    area: "Banco de Sangre",
    interno: 174,
    wsp: null,
    email: "rlecler@coop5.com.ar"
  },
  {
    usuario: "Karina Cabuchi",
    area: "Banco de Sangre",
    interno: "145-174",
    wsp: null,
    email: "karina.cabuchi@coop5.com.ar"
  },
  {
    usuario: "Claudio Peschiutta",
    area: "Telefonía",
    interno: 165,
    wsp: "3525-640870",
    email: "claudio.peschiutta@coop5.com.ar"
  },
  {
    usuario: "Gabriel Nieva",
    area: "Telefonía",
    interno: 166,
    wsp: "3525-501624",
    email: "gabriel.nieva@coop5.com.ar"
  },
  {
    usuario: "Daniel Sandoval",
    area: "Telefonía",
    interno: 181,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Central Telefonica",
    area: "Telefonía",
    interno: 167,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Central Telefonica Sinsacate",
    area: "Telefonía",
    interno: 446201,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "German Perlo",
    area: "Telefonía",
    interno: 169,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Diego Antonio López",
    area: "Agua Potable",
    interno: 146,
    wsp: null,
    email: "dlopez@coop5.com.ar"
  },
  {
    usuario: "Daniel Marini",
    area: "Higiene y Seguridad",
    interno: 175,
    wsp: null,
    email: "daniel.marini@coop5.com.ar"
  },
  {
    usuario: "Tablero",
    area: "Tablero",
    interno: "103-150",
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Jorge Ezequiel Griguol",
    area: "Mantenimiento",
    interno: 197,
    wsp: "3525-501066",
    email: "jorge.griguol@coop5.com.ar"
  },
  {
    usuario: "Nicolás Poggio (Automotor)",
    area: "Mantenimiento",
    interno: 143,
    wsp: "3525-455601",
    email: "nicolas.poggio@coop5.com.ar"
  },
  {
    usuario: "Rodrigo Pettina",
    area: "Mantenimiento",
    interno: 142,
    wsp: null,
    email: "rodrigo.pettina@coop5.com.ar"
  },
  {
    usuario: "Martin Mena",
    area: "Mantenimiento",
    interno: 153,
    wsp: null,
    email: "martin.mena@coop5.com.ar"
  },
  {
    usuario: "Luis Pace",
    area: "Mantenimiento",
    interno: 133,
    wsp: "3525-302452",
    email: "luis.pace@coop5.com.ar"
  },
  {
    usuario: "Edgar Lescano",
    area: "Mantenimiento",
    interno: null,
    wsp: null,
    email: "edgar.lescano@coop5.com.ar"
  },
  {
    usuario: "Laboratorio",
    area: "Mantenimiento",
    interno: 153,
    wsp: null,
    email: "labmed@coop5.com.ar"
  },
  {
    usuario: "Rodrigo Guzmán",
    area: "Redes Eléctricas",
    interno: 132,
    wsp: "3525-301549",
    email: "rodrigo.guzman@coop5.com.ar"
  },
  {
    usuario: "Mario Arlla",
    area: "Redes Eléctricas",
    interno: 131,
    wsp: null,
    email:"mario.arlla@coop5.com.ar"
  },
  {
    usuario: "Daniel E. Palacio",
    area: "Internet",
    interno: 168,
    wsp: null,
    email: "daniel.palacio@coop5.com.ar"
  },
  {
    usuario: "Mauricio Seculini",
    area: "Internet",
    interno: 130,
    wsp: null,
    email: "mauricio.seculini@coop5.com.ar"
  },
  {
    usuario: "Gabriel Frizza",
    area: "Internet",
    interno: null,
    wsp: "3525-431427",
    email: "gabriel.frizza@coop5.com.ar"
  },
  {
    usuario: "Belen Genovese",
    area: "Internet",
    interno: 130,
    wsp: null,
    email: "belen.genovese@coop5.com.ar"
  },
  {
    usuario: "Lucas Manuel Lopez",
    area: "Internet",
    interno: 130,
    wsp: null,
    email: "lmlopez@coop5.com.ar"
  },
  {
    usuario: "Sebastián Zaya",
    area: "Iptv",
    interno: 105,
    wsp: "3525-563252",
    email: "@coop5.com.ar"
  },
  {
    usuario: "Nicolas Peresini",
    area: "Iptv",
    interno: 404,
    wsp: null,
    email: "nicolas.peresini@coop5.com.ar"
  },
  {
    usuario: "Mario Capello",
    area: "Iptv",
    interno: 182,
    wsp: null,
    email: "mario.capello@coop5.com.ar"
  },
  {
    usuario: "Javier Bongiovanni",
    area: "Deposito",
    interno: "445352",
    wsp: null,
    email: "javier.bongiovanni@coop5.com.ar"
  },
  {
    usuario: "Bernabé Basualdo",
    area: "Deposito",
    interno: "445370",
    wsp: null,
    email: "bernabe.basualdo@coop5.com.ar"
  },
  {
    usuario: "Cesar Diaz",
    area: "Deposito",
    interno: "445370",
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Gustavo Torletto",
    area: "Deposito",
    interno: "445352",
    wsp: null,
    email: "gustavo.torletto@coop5.com.ar"
  },
  {
    usuario: "Fabrica de Postes",
    area: "Deposito",
    interno: "445351",
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Jorge Cabrera",
    area: "Taller Mecánico",
    interno: 445350,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Rodolfo Moreno",
    area: "Herrería",
    interno: "445348",
    wsp: "3525-508752",
    email: "rodolfo.moreno@coop5.com.ar"
  },
  {
    usuario: "Caja Ruta 9",
    area: "Cajas",
    interno: "445341",
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Caja Sinsacate",
    area: "Cajas",
    interno: 446202,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Caja Caroyense",
    area: "Cajas",
    interno: 179,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Caja Lote XV",
    area: "Cajas",
    interno: 164,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Cajas Central",
    area: "Cajas",
    interno: 127,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Sergio Sanchez",
    area: "Cajas",
    interno: 172,
    wsp: null,
    email: "sergio.sanchez@coop5.com.ar"
  },
  {
    usuario: "Guardia Seguridad Central",
    area: "Guardia Seguridad",
    interno: 176,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Guardia Seguridad Ruta 9",
    area: "Guardia Seguridad",
    interno: 445349,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Vice Presidencia",
    area: "Consejo",
    interno: 104,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Presidencia (Alberto Nanini)",
    area: "Consejo",
    interno: 107,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Sala de Consejo",
    area: "Consejo",
    interno: 124,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Cocina",
    area: "Edificio Administrativo",
    interno: 136,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Pre Atendedor",
    area: "Varios",
    interno: "112-114-154",
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Sala de Monitoreo La Caroyense",
    area: "Varios",
    interno: "149",
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Deposito Cocheras (Archivo General)",
    area: "Varios",
    interno: 178,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "Edificio Sinsacate - Cocina",
    area: "Varios",
    interno: 446203,
    wsp: null,
    email: "@coop5.com.ar"
  },
  {
    usuario: "",
    area: "",
    interno: null,
    wsp: null,
    email: "@coop5.com.ar"
  },
  
];

export default function directorio (){

  const [usuario, setUsuario] = useState('');
  const [area, setArea] = useState('');
  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const handleFiltrar = () => {
    const datosFiltrados = user.filter((item) =>{
      return (
        (usuario === '' || item.usuario.toLowerCase().includes(usuario.toLowerCase())) &&
        (area === '' || item.area.toLowerCase().includes(area.toLowerCase())) 
      );
    });
  
    setDatosFiltrados(datosFiltrados);
  };

    return(
      <>
        <Head>
          <title>Telefonos Internos</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logoCoopIcono.ico" />
        </Head>
        <Nav/>
        <h2 className="titleIntEmail">Listado de Internos y Correos Electrónicos</h2>
        <div className="conteinerList">
          <div className="searchList">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label><b>Nombre y Apellido</b></Form.Label>
                <Form.Control type="text" placeholder="Nombre y Apellido" autoComplete="off" value={usuario}
                onChange={(e)=>setUsuario(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label><b>Área</b></Form.Label>
                <Form.Select value={area} onChange={(e)=>setArea(e.target.value)}> 
                  <option value="">Todos</option>
                  <option>Agua Potable</option>
                  <option>Atención al Cliente</option>
                  <option>Banco de Sangre</option>
                  <option>Cajas</option>
                  <option>Comercial </option>
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
          </Form>

            <div>
              <Button variant="success" onClick={handleFiltrar}>Buscar <SearchIcon/></Button>
            </div>
          </div>

          {/*Tabla de Datos*/}
          <div className="tablaDirectorio">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nombre y Apellido</th>
                  <th>Área</th>
                  <th>Interno</th>
                  <th>Whatssapp</th>
                  <th>Correo Electrónico</th>
                </tr>
              </thead>
              <tbody>
                {datosFiltrados.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.usuario}</td>
                    <td>{item.area}</td>
                    <td>{item.interno}</td>
                    <td>{item.wsp}</td>
                    <a className="emailDirecc" href={`mailto:${item.email}`} style={{all:'unset'}}><td>{item.email}</td></a>
                  </tr>
                  ))}
              </tbody>
            </Table>
          </div>

        </div>
      </>
    )
}