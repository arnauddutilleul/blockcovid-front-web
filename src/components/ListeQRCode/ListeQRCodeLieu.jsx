import React, { useEffect } from 'react'
import { useContext } from 'react'
import QRCodeLieu from '../QRCodeLieu/QRCodeLieu'
import CovidBlockContext from '../../contexts/CovidBlockContext'


const ListeQRCodeLieu = () => {
    const{listeQRCode,getAllQRLieu} = useContext(CovidBlockContext)
    useEffect(() =>{
        //getAllQRLieu()
    })
    return(
        <div class="card-body">
            <h5 class="title mb-3 mt-4">Liste de vos QR Code</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Description</th>
                            <th scope="col">QRCode</th>
                            <th scope="col">Télécharger</th>
                            <th scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listeQRCode.length!==0?listeQRCode.map((qr)=>(
                                <QRCodeLieu qrcode={qr}/>
                            )):<tr>La liste est actuellement vide</tr>}
                    </tbody>
                </table>
        </div>
    )
}
export default ListeQRCodeLieu