import React from 'react';
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';



import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

const menu = [
    {
        label: "Inicio", icon: "pi pi-folder ", command:()=>{  window.location.hash="/Login"; }
    },
    { separator: true },
    {
      label: "Usuarios", icon: "pi pi-folder ",
      items: [
          { label: 'Usuarios', icon: 'pi pi-file', command:()=>{  window.location.hash="/Usuarios"; }},
        //   { label: 'Actividades', icon: 'pi pi-file', command:()=>{ window.location.hash="/Actividades"; }}
      ] 
    }
  ]; 

  const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
const AppTopbar = () => {
    
    return (
        <div>
            < Menubar model={menu} start={start}/>
    </div>
    );
}

export default AppTopbar;
