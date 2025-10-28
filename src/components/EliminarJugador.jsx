import React, { Component } from 'react'
import axios from 'axios'
export default class EliminarJugador extends Component {
    url="https://apiapuestas.azurewebsites.net"



  
  EliminarJugador= () =>{
    let request="/api/Jugadores/"+this.props.idjugador;

    axios.delete(this.url+request).then(response =>{
      console.log("jugador con id "+this.props.idjugador+" Eliminado")

    })
   
  }

  componentDidMount=() =>{
    this.EliminarJugador();

  }
  render() {
    return (
     <>
     </>
    )
  }
}
