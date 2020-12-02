import React from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const handlerSubmit = (e) => {
        e.preventDefault()
        return (<Redirect to="/gestion"/>)
    }

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
export default Login