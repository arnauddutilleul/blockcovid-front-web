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
           
                    <div className="card-body">
                        <h5 className="title mb-4 mt-1">Création d'un nouveau QR Code</h5>
                        <form onSubmit={handlerSubmit}>
                            <div className="form-group">
                                <label>Nom du QR Code</label>
                                <input type="text" name="nom" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" name="description" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary ">Créer</button>
                        </form>
                    </div>
        )
    }
    
}
export default CreerQRLieu