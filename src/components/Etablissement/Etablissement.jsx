import React from 'react'
import CreerQRLieu from '../CreerQRCode/CreerQRLieu'
import ListeQRCodeLieu from '../ListeQRCodesLieu/ListeQRCodesLieu'

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