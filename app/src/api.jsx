const url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://petmachine.api.iamyuizz.dev"

const api = {
  login: async (controlNumber) => {
    try {
      const res = await fetch(`${url}/users/control-number/${controlNumber}`)
      const status = res.status
      const data = await res.json()

      return { status, data }
    } catch (e) {
      return { status: "error", message: e.message }
    }
  },
}

export default api
