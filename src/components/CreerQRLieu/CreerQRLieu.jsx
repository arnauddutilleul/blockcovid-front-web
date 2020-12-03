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
            <form onSubmit={handlerSubmit}>
                <div>
                    <label>Nom du QR Code : </label>
                    <input type="text" name="nom"/>
                </div>
                <div>
                    <label>Description : </label>
                    <input type="text" name="description"/>
                </div>
                <button type="submit" class="btn btn-primary">Créer</button>
            </form>
        )
    }
    
}
export default CreerQRLieu