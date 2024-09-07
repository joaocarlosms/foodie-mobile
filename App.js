import Routes from "./src/routes/routes.js";
import RoutesAuth from "./src/routes/routesAuth.jsx";

const isUserAuth = true;

export default function App() {
  return (
    isUserAuth ? <RoutesAuth /> : <Routes />
  );
}
