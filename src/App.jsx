import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import './App.scss';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Header from "@parts/Header";
import Dashboard from "@pages/Dashboard";
import Sessions from "@pages/Sessions";
import History from "@pages/History";
import SessionsNew from "@pages/SessionsNew";
import Credits from "@pages/Credits"
import Footer from "@parts/Footer";
import DashboardRecherche from "./pages/DashboardRecherche";

import Logout from "@pages/Logout";
import { AuthProvider } from "./hooks/auth";

export const UserContext = createContext({})

function App() {



  return <>
      <AuthProvider>
        
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="sessions" element={<Sessions/>}/>
            <Route path="history" element={<History />}/>
            <Route path="sessions/new" element={<SessionsNew/>}/>
            <Route path="dashboard/credits" element={<Credits />} />
            <Route path="dashboardRecherche" element={<DashboardRecherche/>}></Route>
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  </>     
  
}

export default App;
