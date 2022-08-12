import { ReactLocation, Router, Outlet } from "@tanstack/react-location";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
const reactLocation = new ReactLocation();

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
];

function App() {
  return (
    <Router location={reactLocation} routes={routes}>
      <Outlet />
    </Router>
  );
}

export default App;
