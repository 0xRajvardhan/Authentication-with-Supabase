import {  Route } from "@solidjs/router"
import Login from "../components/Login";
import register from "../components/Register";

function App() {
  return (
    <>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={register} />
    </>
  );
}

export default App;
