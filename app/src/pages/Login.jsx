import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "@tanstack/react-location";
import {useState} from "react"

export function Login() {
  const navigate = useNavigate();
  const [controlNumber, setControlNumber] = useState('')
  const login = () => {
    const url = `http://localhost:3001/users/control-number/${controlNumber}`;
    fetch(url).then((res) =>{
      if(res.status != '200'){
        return 
      }
      return res.json();
    }).then((data) =>{
      console.log(data)
      localStorage.setItem('PET_MACHINE', JSON.stringify(data))
      navigate({ to: "/", replace: true });
    })
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ maxWidth: "18rem" }}>
        <Card.Title className="text-center pt-4">Iniciar sesion</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formControlNumber">
              <Form.Label>Numero de control</Form.Label>
              <Form.Control type="text" placeholder="17268459" onChange={ (event) =>{setControlNumber(event.currentTarget.value)}}/>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={login}>
                Iniciar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
