import React from 'react'
import CreerQRLieu from '../CreerQR/CreerQRLieu'
import ListeQRCodeLieu from '../ListeQRCode/ListeQRCodeLieu'

const Etablissement = () => {

    return(
        <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4 mt-1">Gestion Etablissement</h4>
                        <CreerQRLieu />
                        <ListeQRCodeLieu />
                    </div>
                </div>
            </div>
    )
}
export default Etablissement