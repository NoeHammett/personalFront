import React, {useState , useEffect} from 'react';
import AppTopbar from "../AppTopbar";
import AppFooter from '../AppFooter';
import 'primeflex/primeflex.css';
import '../css/Tabview.css';
import { Button } from 'primereact/button';
import { TabView,TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';


const Usuarios = () => {
  const [txtNombre, setTxtNombre] = useState('');
  const [txtPrimerApellido, setTxtPrimerApellido] = useState('');
  const [txtSegundoApellido, setTxtSegundoApellido] = useState('');
  const [txtCorreo, setTxtCorreo] = useState('');
  const [date14, setDate14] = useState(null);

    return (
      <div >
        <AppTopbar />
        <br/>
        {/* <AppFooter /> */}
        <div className="p-d-flex p-jc-center">
              <div className = "p-field p-col-12 p-md-10">
              <div className="card">
                <TabView className="tabview-custom">
                    <TabPanel header="Registro Nuevo Usuario">
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputText id="txtNombre" value={txtNombre} onChange={(e) => setTxtNombre(e.target.value)} />
                            <label htmlFor="txtNombre">Ingresa Nombre</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputText id="txtPrimerApellido" value={txtPrimerApellido} onChange={(e) => setTxtPrimerApellido(e.target.value)} />
                            <label htmlFor="txtPrimerApellido">Ingresa Primer Apellido</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputText id="txtSegundoApellido" value={txtSegundoApellido} onChange={(e) => setTxtSegundoApellido(e.target.value)} />
                            <label htmlFor="txtSegundoApellido">Ingresa Segundo Apellido</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                    <span className="p-float-label">
                            <label htmlFor="txtSegundoApellido">Ingresa Segundo Apellido</label>
                            <Calendar id="mask" value={date14} onChange={(e) => setDate14(e.value)}/>
                        </span>                     
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputText id="txtCorreo" value={txtCorreo} onChange={(e) => setTxtCorreo(e.target.value)} />
                            <label htmlFor="txtCorreo">Ingresa Correo</label>
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <Button label="Guardar" icon="pi pi-check" />
                    </div>            

                    </TabPanel>
                    <TabPanel header="Lista de Usuarios">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </TabPanel>
                    <TabPanel header="Buscar Usuario">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </TabPanel>
                </TabView>
            </div>
              </div>
        
        </div>
        
      </div>
    );
}
export default Usuarios
