import React, { useContext, useEffect } from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Gestion = ({Link}) => {
    const {getAllQRLieu,listeQRCode} = useContext(CovidBlockContext)
    useEffect(() =>{
        getAllQRLieu()
    })
    return(
        <div>
            <Link class="btn btn-primary" to="/creerqr"> Créer un nouveau QR Code</Link>
            <div>C'est ici qu'on pourra voir ses QR code et en créer.</div>
            <ul>
                {listeQRCode.map((qr)=>(
                    <li key={qr.id}>{qr.id}</li>
                ))}
            </ul>
        </div>
    )
}
export default Gestion