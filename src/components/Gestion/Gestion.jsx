import React, { useContext, useEffect } from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Gestion = () => {
    const {getAllQRLieu,listeQRCode} = useContext(CovidBlockContext)
    useEffect(() =>{
        getAllQRLieu()
    })
    return(
        <div>
            C'est ici qu'on pourra voir ses QR code et en créer.
            <ul>
                {listeQRCode.map((qr)=>(
                    <li key={qr.id}>{qr.id}</li>
                ))}
            </ul>
        </div>
    )
}
export default Gestion