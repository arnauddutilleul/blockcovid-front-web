import React from 'react'
import CreerQRCodeMedecin from '../CreerQR/CreerQRCodeMedecin'

const Medecin = () => {

    return(
        <div className="container">
            <div className ="card">
                <div className="card-body">
                    <h4 class="card-title mb-4 mt-1">Gestion Médecin</h4>
                    <CreerQRCodeMedecin/>
                </div>
            </div>
        </div>
    )
}
export default Medecin