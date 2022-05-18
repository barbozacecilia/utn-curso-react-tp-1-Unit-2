import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import PublicRoutes from "./Routes/Public/PublicRoutes";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";

function App() {
    const [login, setLogin] =useState(false)
    return (
        <div className="App">
            <Router>
                <Menu login={login}/>
                <Container>
                <PublicRoutes setLogin={setLogin}/>
                </Container>
            </Router>
        </div>
    );
}

export default App;
