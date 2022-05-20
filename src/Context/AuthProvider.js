import React, {useState} from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props) {
    const [userLogin, setUserLogin] = useState(false)
    const loginUser = () => {
        setUserLogin(true)
    }
    const logoutUser = () => {
        setUserLogin(false)
    }
    return (
        <AuthContext.Provider value={{userLogin, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;
