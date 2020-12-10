import React, { useContext } from 'react'
import { useState } from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import TelechargerPDF from '../Pdf/TelechargerPDF'

//page creation de QR codes pour les medecins 
const CreerQRCodeMedecin = () => {
    const {creerQRCodeMedecin} = useContext(CovidBlockContext)
    const [listeQRCodeCree,setListe] = useState([])
    const handlerSubmit = (e) => {
        e.preventDefault()
        creerQRCodeMedecin(e.target.nombre.value)
        .then(response => {
            if(response.status === 200){
                setListe(response.data.qr)
            }
        })
        e.target.nombre.value=""
        
    }

    return(
        <div className="card-body">
            <h5 className="title mb-4 mt-1">Création d'un nouveau QR Code</h5>
            <form onSubmit={handlerSubmit}>
                <div className="form-group">
                    <label>Nombre de QR codes à créer </label>
                    <input className="form-control" type="number" name="nombre" required/>
                </div>
                <button type="submit" className="btn btn-primary ">Créer QR Code</button>
                
            </form>
            <TelechargerPDF liste={listeQRCodeCree} nom={localStorage.getItem("type")+"_"+localStorage.getItem("nom")}/>
        </div>  
    )
}
export default CreerQRCodeMedecin