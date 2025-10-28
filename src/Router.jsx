import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeApuesta from './components/HomeJugadores'


import CreateJugadores from './components/CreateJugadores';
import EditarJugadores from './components/EditarJugadores';

function JugadoresElement(){

    let {idjugadores}=useParams();

    return <EditarJugadores idjugadores={idjugadores}/>
    
}
export default class Router extends Component {
  render() {
    return (
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<HomeApuesta></HomeApuesta>}> </Route>
        <Route path='/create' element={<CreateJugadores/>}> </Route>
        <Route path='/jugadores/:idjugadores' element={<JugadoresElement/>} > </Route>

     </Routes>
     
     </BrowserRouter>
    )
  }
}
