import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import EliminarJugador from './EliminarJugador'
import { NavLink } from 'react-router-dom'
export default class HomeJugadores extends Component {

  url="https://apiapuestas.azurewebsites.net"

  state={
  jugadores:[],
  idjugador:-1
  }
  
  loadJugadores= () =>{
    let request="/api/Jugadores";

    axios.get(this.url+request).then(response =>{

      this.setState({
        jugadores:response.data

      })
    })
  }
  
  componentDidMount=() =>{
    this.loadJugadores();

  }

componentDidUpdate=(oldProps) =>{
        if(oldProps.idJugador != this.state.idjugador && this.state.idjugador!=-1){
          this.loadJugadores()

        }
}
  
  render() {
    return (
      <>
      <Navbar/>

     

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                 Imagen
                </th>
                <th scope="col" class="px-6 py-3">
                    Id Jugador
                </th>
                <th scope="col" class="px-6 py-3">
                  nombre
                </th>
                <th scope="col" class="px-6 py-3">
                   pais
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

          { this.state.jugadores.map((valor,index) =>{

            return (
              <>
                <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={valor.imagen} alt="" />
                </th>
                <td class="px-6 py-4">
                   {valor.idJugador}
                </td>
                <td class="px-6 py-4">
                   { valor.nombre}
                </td>
                <td class="px-6 py-4">
                     {valor.pais}
                </td>
                <td class="px-6 py-4">
                    <NavLink to={"/jugadores/"+valor.idJugador} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</NavLink>

                    <button className='bg-gradient-to-br from-violet-400 to-green-300 p-3 m-3 rounded' onClick={() =>{
                      
                      console.log(valor.idJugador)
                      this.setState({
                        idjugador:valor.idJugador
                      })
                    }
                    }>
                          Eliminar
                    </button>
                  
                </td>
            </tr>
              </>
            )

          })}
          
        </tbody>
    </table>
</div>

{this.state.idjugador !== -1 && <EliminarJugador idjugador={this.state.idjugador}/>}

      </>
     
    )
  }
}
