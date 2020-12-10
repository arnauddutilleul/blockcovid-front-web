import React from 'react'
import CreerQRCodeMedecin from '../CreerQRCode/CreerQRCodeMedecin'

const Medecin = () => {

    return(
        <div className="container">
            <div className ="card">
                <div className="card-body">
                    <h4 className="card-title mb-4 mt-1">Gestion Médecin</h4>
                    <CreerQRCodeMedecin/>
                </div>
            </div>
        </div>
    )
}
export default Medecin