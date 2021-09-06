import axios from 'axios';

export default class UsuariosService{
   
    obtenerPersonas (){
    let buscaPersonas = 'api/Person/getPerson';
    return axios.get(buscaPersonas).then(response  => response.data).
    catch(error => {console.log(error.response.data.message)});
    }

    // obtenerPersonaById (personId){
    // let buscarPersonaById = 'api/Person/getPerson/';
    // return axios.get(buscarPersonaById  + '/' +  personId).then(response  =>  console.log(response.data));
    // }
    
    agregarPerson (person){
    // console.log("Service", person)
    let agregaPerson = 'api/Person/addPerson';
    return axios.post(agregaPerson , person).then(response  =>  console.log(response.data)).
    catch(error => {console.log(error.response.data.message)});
    }
        
}