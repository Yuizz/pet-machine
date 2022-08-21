import { useEffect, useState } from "react"
import { useNavigate } from "@tanstack/react-location"
import api from "../api"

export function Home() {
  const CIRCLE_DIAMETER = "16rem"
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)

  const getUser = async (controlNumber) => {
    const url = `http://localhost:3001/users/control-number/${controlNumber}`
    const userData = await api.login(controlNumber)

    if (userData.status != "200") {
      navigate({ to: "/login", replace: true })
      return
    }

    setUserData(userData.data)
  }

  useEffect(() => {
    const controlNumber = localStorage.getItem("PET_MACHINE")
    getUser(controlNumber)
  }, [])

  return (
    <div className="bg-light w-100">
      <div
        className="min-vh-100 d-flex mx-auto align-items-center full"
        //   style={{
        //     background: "rgb(203,203,203)",
        //     background:
        //       "linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(236,236,236,1) 100%)",
        //   }}
      >
        <div
          className=" rounded-circle border border-5 bg-primary bg-gradient d-inline-block text-center mb-4 text-light balance"
          // style={{
          //   width: CIRCLE_DIAMETER,
          //   height: CIRCLE_DIAMETER,
          //   lineHeight: "14rem",
          //   fontSize: "6rem",
          //   filter: "drop-shadow(4px 4px 16px rgba(0,0,0,0.4))"
          // }}
        >
          {userData && userData.balance}
        </div>
        <dl className="data">
          <dt>RFID</dt>
          <dd>{userData && userData.rfid}</dd>
          <dt>Numero de control</dt>
          <dd>{userData && userData.controlNumber}</dd>
          <dt>Nombre</dt>
          <dd>{userData && userData.name}</dd>
          <dt>Mail</dt>
          <dd>{userData && userData.mail}</dd>
        </dl>
      </div>
    </div>
  )
}
