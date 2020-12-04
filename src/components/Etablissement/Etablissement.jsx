import React from 'react'
import CreerQRLieu from '../CreerQR/CreerQRLieu'
import ListeQRCodeLieu from '../ListeQRCode/ListeQRCodeLieu'

const Etablissement = () => {

    return(
        <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4 mt-1">Gestion Etablissement</h4>
                        <CreerQRLieu />
                        <ListeQRCodeLieu />
                    </div>
                </div>
            </div>
    )
}
export default Etablissement