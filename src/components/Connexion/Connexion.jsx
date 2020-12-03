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
                    <div class='form-group'>
                        <label for="email">E-mail</label>
                        <input class="form-control" type="text" id="email" name="email"/>
                    </div>
                    <div class="form-group">
                        <label for="mdp">Mot de passe</label>
                        <input class="form-control" type="password" id="mdp" name="mdp" />
                    </div>
                    <button class="btn btn-primary" type="submit">Se connecter</button>
                </form>
            </div>
        )
    }
    
}
export default Login