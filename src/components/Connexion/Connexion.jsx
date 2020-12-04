import React, { useState,useContext } from 'react'
import { Redirect } from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Login = () => {
    const {token,seConnecter} = useContext(CovidBlockContext)
    const [redirection,setRedirection] = useState(false)
    const handlerSubmit = (e) => {
        e.preventDefault()
        const connexion = {
            email : e.target.email.value,
            motDePasse : e.target.mdp.value,
            
        }
        seConnecter(connexion,e.target.type.value)
        .then(token => {
            if(token){
                setRedirection(true)
            }
        })
        
    }

    if(redirection || token){
        return(
            <Redirect to="/"/>
        )
    }
    else{
        return(
            <div class="container">
                <div class="card">
                    <article class="card-body">
                        <h4 class="card-title mb-4 mt-1">Connexion</h4>
                        <form onSubmit={handlerSubmit}>
                            <div class="form-group">
                                <label>Email</label>
                                <input name="email" class="form-control" type="email"/>
                            </div> 
                            <div class="form-group">
                                <label>Mot de passe</label>
                                <input name="mpd" class="form-control" type="password"/>
                            </div> 
                            <fieldset class="form-group">
                            <div  class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Type de compte</legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="type" id="etab" value="etablissement" defaultChecked/>
                                        <label class="form-check-label">
                                            Etablissement
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="type" id="medecin" value="medecin"/>
                                        <label class="form-check-label" >
                                            Medecin
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
                            </div>                                                         
                        </form>
                    </article>
                </div>
            </div>
        )
    }
    
}
export default Login