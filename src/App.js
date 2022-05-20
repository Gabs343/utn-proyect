import {useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApiContext from './ApiContext';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './screens/Home';
import Login from './screens/Login'
import Profile from './screens/Profile';

import { useLoggedState } from './hook/useLoggedState';

import solarSystemReducer from './reducers/solarSystemReducer';
import userReducer from './reducers/userReducer';

import Axios from 'axios';
import env from "react-dotenv";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {logged, login, logout} = useLoggedState(localStorage.getItem("id") !== null);

  const [stateSolarSyst, dispatchSolarSyst] = useReducer(solarSystemReducer, {data: []});
  const [stateUser, dispatchUser] = useReducer(userReducer, {mail: ""});

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
        <Route path='/' element={<Navigation isLogged={logged}/>}>
          <Route index element={<Home/>}/>
          <Route path={logged ? 'profile' : 'login'} element={logged ? <Profile setLogout={logout}/> : <Login setLogin={login}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>  
    </ApiContext.Provider>
  );
}

export default App;
