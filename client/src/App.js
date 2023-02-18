<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/userAccounts/Signup.js";
import Login from "./components/userAccounts/LoginForm";
=======

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './components/userAccounts/Signup.js'
import LoginForm from './components/userAccounts/LoginForm'
>>>>>>> 16710aee4250e954c759e2f1cc1b9ee7036f8fdb
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
=======
            <Route
              path = "/"
              element = {<Home/>}
            />
            <Route path = "/register" element = {<Register/>} />
            <Route path = "/login" element = {<LoginForm/>} />
>>>>>>> 16710aee4250e954c759e2f1cc1b9ee7036f8fdb
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
