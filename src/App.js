import React from 'react';
import AppTopbar from "./AppTopbar";
import {Switch, Route, HashRouter} from 'react-router-dom';
import Usuarios from "./components/Usuarios.js"
import Actividades from "./components/Actividades.js"
import Login from "./components/Login.js"

function App() {
  return (
    <div>
    {/* <AppTopbar/> */}
          <HashRouter>
          <Switch>
              <Route  path="/Login"><Login/></Route>
              <Route  path="/Usuarios"><Usuarios/></Route>
              <Route  path="/Actividades"><Actividades/></Route>       
          </Switch>
        </HashRouter>
    </div>
       
  );
}

export default App;
