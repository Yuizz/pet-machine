import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "@tanstack/react-location"
import { useState } from "react"
import api from "../api"

export function Login() {
  const navigate = useNavigate()
  const [controlNumber, setControlNumber] = useState("")
  const login = async () => {
    const url = `http://localhost:3001/users/control-number/${controlNumber}`
    const userData = await api.login(controlNumber)

    if (userData.status != "200") {
      return
    }

    console.log(userData.data)
    localStorage.setItem("PET_MACHINE", JSON.stringify(userData.data))
    navigate({ to: "/", replace: true })
  }
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
              <Form.Control
                type="text"
                placeholder="17268459"
                onChange={(event) => {
                  setControlNumber(event.currentTarget.value)
                }}
              />
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
  )
}
