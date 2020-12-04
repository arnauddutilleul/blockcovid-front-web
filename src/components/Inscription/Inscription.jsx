import React,{useContext,useState} from 'react'
import {Redirect} from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Inscription = () => {
    const {email_utilisateur,token,sInscrire} = useContext(CovidBlockContext)
    const [redirection,setRedirection] = useState(false)
    const handlerSubmit = (e) => {
        e.preventDefault()
        const inscription = {
            nom : e.target.nom.value,
            adresse : e.target.adresse.value,
            email : e.target.email.value,
            motDePasse : e.target.mdp.value
        }
        sInscrire(inscription,e.target.type.value)
                    .then(token => {
                    console.log(email_utilisateur)
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
                        <h4 class="card-title mb-4 mt-1">Inscription</h4>
                        <form onSubmit={handlerSubmit}>
                            <div class="form-group">
                                <label>Nom</label>
                                <input name="nom" class="form-control" type="text"/>
                            </div> 
                            <div class="form-group">
                                <label>Adresse</label>
                                <input name="adresse" class="form-control" type="text"/>
                            </div> 
                            <div class="form-group">
                                <label>Email</label>
                                <input name="email" class="form-control" type="email"/>
                            </div> 
                            <div class="form-group">
                                <label>Mot de passe</label>
                                <input name="mdp" class="form-control" type="password"/>
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
                                <button type="submit" class="btn btn-primary btn-block">S'inscrire</button>
                            </div>                                                         
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}
export default Inscription