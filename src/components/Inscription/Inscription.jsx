import React,{useContext, useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Inscription = () => {
    const {sInscrire} = useContext(CovidBlockContext)
    const [notif,setNotif]  = useState()

    const history = useHistory()
    const handlerSubmit = (e) => {
        e.preventDefault()
        const inscription = {
            nom : e.target.nom.value,
            adresse : e.target.adresse.value,
            email : e.target.email.value,
            motDePasse : e.target.mdp.value
        }
        sInscrire(inscription,e.target.type.value)
        .then(response => {
            if(response.status !== 200 ){
                setNotif(response.message)      
            }
            else{
                history.push("/")
            }
        })
        
    }

    if(localStorage.getItem("token")){
        return(
            <Redirect to="/"/>
        )
    }
    else{
        return(
            <div className="container">
                <div className="card">
                    <article className="card-body">
                        <h4 className="card-title mb-4 mt-1">Inscription</h4>
                        <h6 className="text-danger">{notif}</h6>
                        <form onSubmit={handlerSubmit}>
                            <div className="form-group">
                                <label>Nom</label>
                                <input name="nom" className="form-control" type="text"/>
                            </div> 
                            <div className="form-group">
                                <label>Adresse</label>
                                <input name="adresse" className="form-control" type="text"/>
                            </div> 
                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" className="form-control" type="email"/>
                            </div> 
                            <div className="form-group">
                                <label>Mot de passe</label>
                                <input name="mdp" className="form-control" type="password"/>
                            </div> 
                            <fieldset className="form-group">
                            <div  className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Type de compte</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="type" id="etab" value="etablissement" defaultChecked/>
                                        <label className="form-check-label">
                                            Etablissement
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="type" id="medecin" value="medecin"/>
                                        <label className="form-check-label" >
                                            Medecin
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
                            </div>                                                         
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}
export default Inscription