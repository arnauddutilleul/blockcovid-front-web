import React, { useContext } from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const CreerQRCodeMedecin = () => {
    const {creerQRCodeMedecin} = useContext(CovidBlockContext)
    const handlerSubmit = (e) => {
        e.preventDefault()
       
        creerQRCodeMedecin()
    }

    return(
        <div className="card-body">
            <h5 className="title mb-4 mt-1">Création d'un nouveau QR Code</h5>
            <form onSubmit={handlerSubmit}>
                <button type="submit" className="btn btn-primary ">Créer QR Code</button>
            </form>
        </div>  
    )
}
export default CreerQRCodeMedecin