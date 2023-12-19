import React from "react";
import Head from "next/head";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Nav from '../pages/components/nav';

import Modal from '../pages/components/modal';

export default function anyDesk (){
    return(
        <>
          <Head>
            <title>AnyDesk</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logoCoopIcono.ico" />
          </Head>
          <Nav/>
          <h2 className="title">Conexiones AnyDesk</h2>
          <div className="generalAnyDesk">
            <div className="searchConexion">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label><b>Usuario</b></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label><b>Caja Externa</b></Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Button variant="danger">Buscar</Button>
            </Form>
            </div>

            <div className="tableAnydesk">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Usuario</th>
                    <th>Alias AnyDesk</th>
                    <th>Password</th>
                    <th>Telefono</th>
                    <th>Mas Informacion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Pablo canalda</td>
                    <td>cajacanalda01@ad</td>
                    <td>CanaldaC00p</td>
                    <td>352515433399</td>
                    <td>
                    {/* <Button variant="info">Info</Button> */}
                    <Modal/>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>dwed</td>
                  </tr>
                </tbody>
              </Table>
            </div>

          </div>
        </>
    )
}