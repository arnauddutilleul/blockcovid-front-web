import React,{useContext,useState} from 'react'
import {Redirect} from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Inscription = () => {
    const {token,sInscrire} = useContext(CovidBlockContext)
    const [redirection,setRedirection] = useState(false)
    const handlerSubmit = (e) => {
        e.preventDefault()
        const inscription = {
            email : e.target.email.value,
            mdp : e.target.mdp.value,
            type : e.target.type.value
        }
        sInscrire(inscription)
        .then(token => {
            if(token){
                setRedirection(true)
            }
        })
        
    }

    if(redirection || token){
        return(
            <Redirect to="/gestion"/>
        )
    }
    else{
        return(
            <div>
                <h2>Inscription</h2>
                <form onSubmit={handlerSubmit}>

                    <div class='form-group'>
                        <label >E-mail</label>
                        <input class="form-control" type="text" id="email" name="email"/>
                    </div>
                    <div class="form-group">
                        <label >Mot de passe</label>
                        <input class="form-control" type="password" id="mdp" name="mdp" />
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
                    <button class="btn btn-primary" type="submit">S'inscrire</button>
                </form>
            </div>
        )
    }
}
export default Inscription