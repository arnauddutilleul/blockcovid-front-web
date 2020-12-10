import React from 'react'
import { useContext } from 'react'
import QRCodeLieu from '../QRCodeLieu/QRCodeLieu'
import CovidBlockContext from '../../contexts/CovidBlockContext'

//page listing des QR codes lieu
const ListeQRCodeLieu = () => {
    const{listeQRCodesLieu} = useContext(CovidBlockContext)
    var notif = "Vous n'avez pas de QR Codes."
    if(listeQRCodesLieu.length !== 0){
        notif = ""
    }
    
    return(
        <div className="card-body">
            <h5 className="title mb-3 mt-4">Liste de vos QR Code</h5>
                <p>{notif}</p>
                        <table className="table align-bottom table-striped">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Nom</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">QRCode</th>
                                    <th scope="col">Télécharger</th>
                                </tr>
                            </thead>
                            <tbody>  
                                {listeQRCodesLieu.length!==0?listeQRCodesLieu.map((qr)=>(
                                        <QRCodeLieu  key={qr.id} qrcode={qr}/>
                                    )):<tr></tr>}
                            </tbody>
                        </table>
        </div>
    )
}
export default ListeQRCodeLieu