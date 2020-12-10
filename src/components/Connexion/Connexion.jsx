import React, {useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

//page de connexion
const Login = () => {
    const {seConnecter} = useContext(CovidBlockContext)
    const [notif,setNotif]  = useState()
    const history = useHistory()
    const handlerSubmit = (e) => {
        e.preventDefault()
        const connexion = {
            email : e.target.email.value,
            motDePasse : e.target.mdp.value,
            
        }
        seConnecter(connexion,e.target.type.value)
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
                        <h4 className="card-title mb-4 mt-1">Connexion</h4>
                        <h6 className="text-danger">{notif}</h6>
                        <form onSubmit={handlerSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" className="form-control" type="email" required pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,4}$"/>
                            </div> 
                            <div className="form-group">
                                <label>Mot de passe</label>
                                <input name="mdp" className="form-control" type="password" required/>
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
                                <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                            </div>                                                         
                        </form>
                    </article>
                </div>
            </div>
        )
    }
    
}
export default Login