import axios from 'axios';
export default class UsuariosService{
    
    
   
    obtenerPersonas (){
    let buscaPersonas = 'api/Person/getPerson';
    return axios.get(buscaPersonas).then(response  => response.data).
    catch(error => {console.log(error.response.data.message)});
    }

    obtenerPersonaById (personId){
    let buscarPersonaById = 'api/Person/getPerson';
    return axios.get(buscarPersonaById  + '/' +  personId).then(response  =>  response.data).
    catch(error => {console.log(error.response.data.message)});
    }
    
    agregarPerson (person){
    // console.log("Service Agregar Person", person)
    let agregaPerson = 'api/Person/addPerson';
    return axios.post(agregaPerson , person).then(response  => console.log(response.data)).
    catch(error => {console.log(error.response.data.message)});
    }
        
    async actualizaPerson(person){
        // console.log("Service Editar Person",person);
    let actualizaPerson ='api/Person/updatePerson';
        try{
            return await axios.put(actualizaPerson + '/'+ person.id, person).then(response  => console.log(response.data))
        }catch(error){
            return console.log(error.response.data.message);
        }   
    }

    eliminarPerson(person){
        // console.log("Service Eliminar Person",person);
        let eliminaPerson = 'api/Person/deletePerson';
        return axios.delete(eliminaPerson + '/'+ person.id).then(response => console.log( response.data)).
        catch(error => {console.log(error.response.data.message)})
    }
}