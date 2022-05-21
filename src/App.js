import {useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApiContext from './ApiContext';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './screens/Home';
import Login from './screens/Login'
import Profile from './screens/Profile';

import solarSystemReducer from './reducers/solarSystemReducer';
import userReducer from './reducers/userReducer';

import Axios from 'axios';
import env from "react-dotenv";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [stateSolarSyst, dispatchSolarSyst] = useReducer(solarSystemReducer, {data: []});
  const [stateUser, dispatchUser] = useReducer(userReducer, {data: [], mail: "", psw: "", logged: localStorage.getItem("id") !== null});

  useEffect(() => {
    Axios.get(`${env.SERVER}solarSystem`).then((response) => {
      dispatchSolarSyst({type: "SET_DATA", payload: response.data})
    })
  }, []);

  return (
    <ApiContext.Provider value={{stateSolarSyst, dispatchSolarSyst, stateUser, dispatchUser}}>
    <div className="App">  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path={stateUser.logged ? 'profile' : 'login'} element={stateUser.logged ? <Profile/> : <Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>  
    </ApiContext.Provider>
  );
}

export default App;
