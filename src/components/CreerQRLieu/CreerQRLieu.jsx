import React,{ useContext, useState }  from 'react'
import { Redirect } from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const CreerQRLieu = () =>{
    const [redirection,setRedirection] = useState(false)
    const {creerCRCodeLieu} = useContext(CovidBlockContext)
    const handlerSubmit = (e) => {
        e.preventDefault()
        const qrcode = {
            nom : e.target.nom.value,
            description : e.target.description.value
        }
        creerCRCodeLieu(qrcode)
        setRedirection(true)
    }
    
    if(redirection){
        return(<Redirect to="/gestion"/>)
    }
    else{
        return(
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4 mt-1">Création d'un nouveau QR Code</h4>
                        <form onSubmit={handlerSubmit}>
                            <div class="form-group">
                                <label>Nom du QR Code</label>
                                <input type="text" name="nom" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <input type="text" name="description" class="form-control"/>
                            </div>
                            <button type="submit" class="btn btn-primary ">Créer</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default CreerQRLieu