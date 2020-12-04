import React, { useContext } from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const CreerQRCodeMedecin = () => {
    const {creerQRCodeMedecin} = useContext(CovidBlockContext)
    const handlerSubmit = (e) => {
        e.preventDefault()
       
        creerQRCodeMedecin()
    }

    return(
        <div class="card-body">
            <h5 class="title mb-4 mt-1">Création d'un nouveau QR Code</h5>
            <form onSubmit={handlerSubmit}>
                <button type="submit" class="btn btn-primary ">Créer QR Code</button>
            </form>
        </div>  
    )
}
export default CreerQRCodeMedecin