import React, { useEffect } from 'react'
import { useContext } from 'react'
import QRCodeLieu from '../QRCodeLieu/QRCodeLieu'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import { useState } from 'react'


const ListeQRCodeLieu = () => {
    const{listeQRCode,getAllQRLieu} = useContext(CovidBlockContext)
    const [notif,setNotif] = useState()
    useEffect(() =>{
        getAllQRLieu()
        .then(response => {
            if(response.status !== 200) {
                setNotif(response.message)
            }
        })
    })
    return(
        <div className="card-body">
            <h5 className="title mb-3 mt-4">Liste de vos QR Code</h5>
                <table className="table">
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
                    <tr className="text-danger">{notif}</tr>
                        {listeQRCode.length!==0?listeQRCode.map((qr)=>(
                                <QRCodeLieu qrcode={qr}/>
                            )):<tr>La liste est actuellement vide</tr>}
                    </tbody>
                </table>
        </div>
    )
}
export default ListeQRCodeLieu