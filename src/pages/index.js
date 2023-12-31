import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Inventario Sistemas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoCoopIcono.ico" />
      </Head>
      <div className='conteinerPrincipal'>
      <main >
          <Form className='formPrincipal'>
            <h2>Iniciar Sesión</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><PersonIcon/><b>Correo Electronico</b></Form.Label>
              <Form.Control type="email" placeholder="Ingrese su Correo Electronico" />
              <Form.Text className="text-light">
                Recuerde que debe ingresar su correo Institucional!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><HttpsIcon/><b> Contraseña</b></Form.Label>
              <Form.Control type="password" placeholder="Ingrese su Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
            <Link href="/menu">
                <Button variant="secondary" type="submit">
                  Acceder
                </Button> 
            </Link>
          </Form>
      </main>
      </div>
    </>
  )
}
