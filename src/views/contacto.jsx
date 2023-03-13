import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

const FormularioContacto = () => {
    return (
    <Container>
        <h1 className='mt-5'>Cuentanos, ¿En que te podemos ayudar?</h1>
        <Form class="formulario">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><strong>Correo</strong></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" size="lg"/>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label><strong>Descripcion</strong></Form.Label>
        <Form.Control as="textarea" rows={3} size="lg"/>
      </Form.Group>
      <button className='boton'>
        Enviar
      </button>
     </Form>
    </Container>
    )
}

export default FormularioContacto