import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import PublicRoutes from "./Routes/Public/PublicRoutes";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import AuthProvider from "./Context/AuthProvider";

function App() {
    const [login, setLogin] = useState(false)
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Menu login={login}/>
                    <Container>
                        <PublicRoutes setLogin={setLogin}/>
                    </Container>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
