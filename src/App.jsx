import {  Route } from "@solidjs/router"
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";

function App() {
  return (
    <>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
