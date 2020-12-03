import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const [redirection,setRedirection] = useState(false)
    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log("yo")
        setRedirection(true)
    }

    if(redirection){
        return(
            <Redirect to="/gestion"/>
        )
    }
    else{
        return(
            <div>
                <form onSubmit={handlerSubmit}>
                    <label>E-mail</label>
                    <input type="text" name="email"/>
                    <br/>
                    <label>Mot de passe</label>
                    <input type="password" name="mdp" />
                    <br/>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        )
    }
    
}
export default Login