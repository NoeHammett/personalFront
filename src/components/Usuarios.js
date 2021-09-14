import React, {useState , useEffect} from 'react';
import AppTopbar from "../AppTopbar";
import AppFooter from '../AppFooter';
import { Button } from 'primereact/button';
import { TabView,TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from 'primereact/calendar';
import { useForm, Controller } from 'react-hook-form';
import { InputNumber } from 'primereact/inputnumber';

import UsuariosService from '../services/UsuariosService'
import 'primeflex/primeflex.css';
import '../css/Tabview.css';

const Usuarios = () => {
  const [personas, setPersonas] = useState({});

  //Objeto de la persona
  const [person, setPerson] = useState ({
      id: null,
      nombre:"",
      primer_apellido:"",
      segundo_apellido: "",
      email:"",
      nacimiento:""
  });
  const [requestPerson, setRequestPerson] = useState ({
    id: null,
    nombre:null,
    primer_apellido:null,
    segundo_apellido:null,
    email:null,
    nacimiento:null
});



  // Manejo del form
  const [formData, setFormData] = useState({})

  const { control, handleSubmit, reset } = useForm({person},{requestPerson});

  const onSubmit = (data) => {
      setFormData(data);  
      // console.log("Formulario",data);
      usuarioService.agregarPerson(data) ;
      reset(person);
      getPerson();
  };

  const onBusqueda = (data) => {
    setFormData(data);  
    console.log("Busqueda",data.idPersonRequet);
    usuarioService.obtenerPersonaById(data.idPersonRequet).then(data => setRequestPerson(data)); 
    reset(requestPerson);
};

  //SERVICES
  const usuarioService = new UsuariosService();
  const getPerson = () => {
     usuarioService.obtenerPersonas().then(data => setPersonas(data));
     console.log("Personas",personas)
    };
    
    useEffect(() => {
        getPerson();
    }, []);




    const actionBodyTemplate = (rowData) => {
        return (
          <React.Fragment>
            <Button
              icon="pi pi-pencil"
              className="p-button-rounded p-button-warning p-mr-2"
              // onClick={() => editProduct(rowData)}
            />
            <Button
              icon="pi pi-trash"
              className="p-button-rounded p-button-danger p-mr-2"
              // onClick={() => confirmDeleteProduct(rowData)}
            />
          </React.Fragment>
        );
      };

      // const editProduct = (person) => {
      //   setPerson({ ...person });
      // };
      // const confirmDeleteProduct = (person) => {
      //   setPerson({...person});
      // };

    return (
      <div >
        <AppTopbar />
        <br/>
        {/* <AppFooter /> */}
        <div className="p-d-flex p-jc-center">
              <div className = "p-field p-col-12 p-md-10">
              <div className="card">
                <TabView className="tabview-custom"  >
                    <TabPanel header="Registro Nuevo Usuario" >
                    <form onSubmit={handleSubmit(onSubmit)}  >
                    <div className="form-demo" >
                        <div className="p-field p-col-12 p-md-4">
                            <span className="p-float-label">
                            <Controller name="nombre" control={control} render={({ field }) => (
                            <InputText id={field.name} {...field}  required="true"/>
                            )}
                            />
                                {/* <InputText id="nombre" onChange={(e) => setPerson({...person,nombre:e.target.value})}  value={person.nombre} required="true"/> */}
                                <label htmlFor="txtNombre">Ingresa Nombre</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <span className="p-float-label">
                            <Controller name="primer_apellido" control={control}  render={({ field }) => (
                            <InputText id={field.name} {...field} required="true" />
                            )}
                            />
                  
                                {/* <InputText id="primer_apellido" onChange={(e) =>setPerson({...person,primer_apellido:e.target.value})}  value ={person.primer_apellido} /> */}
                                <label htmlFor="txtPrimerApellido">Ingresa Primer Apellido</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <span className="p-float-label">
                                
                            <Controller name="segundo_apellido" control={control} render={({ field }) => (
                            <InputText id={field.name} {...field} required="true" />
                            )}
                            />
                                {/* <InputText id="segundo_apellido" onChange={(e) =>setPerson({...person,segundo_apellido:e.target.value})} value={person.segundo_apellido} /> */}
                                <label htmlFor="txtSegundoApellido">Ingresa Segundo Apellido</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <span className="p-float-label">
                            <Controller name="email" control={control}  render={({ field }) => (
                            <InputText id={field.name} {...field}  required="true"/>
                            )}
                            />

                                {/* <InputText id="correo" onChange={(e) => setPerson({...person,email:e.target.value})} value={person.email}  /> */}
                                <label htmlFor="txtCorreo">Ingresa Correo</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                        <Controller name="nacimiento" control={control}  render={({ field }) => (
                            <Calendar id={field.name} {...field}  required="true" dateFormat="dd/mm/yy"/>
                        )}
                        />
                        <label htmlFor="txtNacimiento">Selecciona Fecha de Nacimiento</label>
                        </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            {/* <Button  onClick={addPerson} label="Guardar" /> */}
                            <Button type="submit" label="Guardar" className="p-mt-2" />
                        </div>
                    </div>
                    </form>
                    </TabPanel>
                    
                    <TabPanel header="Lista de Usuarios">
                       <h1>Personas Registradas</h1>
                    <div className="card">
                        <DataTable
                        value={personas}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[10, 25, 50]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        >
                        <Column field="id" header="ID" ></Column>
                        <Column field="nombre" header="Nombre" ></Column>
                        <Column field="primer_apellido" header="Primer Apellido" ></Column>
                        <Column field="segundo_apellido" header="Segundo Apellido" ></Column>
                        <Column field="nacimiento" header="Fecha de Nacimiento" ></Column>
                        <Column field="email" header="Email" ></Column>
                        <Column body={actionBodyTemplate}></Column>
                        </DataTable>
                    </div>

                    </TabPanel>
                    <TabPanel header="Buscar Usuario" >
                    <form onSubmit={handleSubmit(onBusqueda)}>
                    <div className="form-demo" >
                        <div className="p-field p-col-12 p-md-4">
                            <span className="p-float-label">
                            <Controller name="idPersonRequet" control={control} render={({ field }) => (
                            <InputNumber id={field.name} {...field}  required="true" onValueChange={(e) => field.onChange(e.value)}
                            onChange={(e) => field.onChange(e.value)} value={field.value} />
                            )}
                            />
                                {/* <InputText id="nombre" onChange={(e) => setPerson({...person,nombre:e.target.value})}  value={person.nombre} required="true"/> */}
                                <label htmlFor="txtNombre">Ingresa ID a Buscar</label>
                            </span>
                        </div>
                        
                        <div className="p-field p-col-12 p-md-4">
                            {/* <Button  onClick={addPerson} label="Guardar" /> */}
                            <Button type="submit" label="Buscar" className="p-mt-2" />
                        </div>
                    </div>
                    </form>
                    <h2>Personas Registradas</h2>
                    <div className="card">
                        <DataTable
                        value={[requestPerson]}
                        paginator
                        rows={5}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
                        <Column field="id" header="ID"></Column>
                        <Column field="nombre" header="Nombre" ></Column>
                        <Column field="primer_apellido" header="Primer Apellido" ></Column>
                        <Column field="segundo_apellido" header="Segundo Apellido" ></Column>
                        <Column field="nacimiento" header="Fecha de Nacimiento" ></Column>
                        <Column field="email" header="Email" ></Column>
                        <Column body={actionBodyTemplate}></Column>
                        </DataTable>
                    </div>


                    </TabPanel>
                </TabView>
            </div>
              </div>

        </div>
      </div>
    );
}
export default Usuarios
