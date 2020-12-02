import React, { useContext } from 'react'
import QRContext from '../../contexts/QRContext'

const Gestion = () => {
    const {listeQRCode} = useContext(QRContext)

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