import React from 'react'
import TelechargerPDF from '../Pdf/TelechargerPDF'

//Affichage d'un QR code lieu 
const QRCodeLieu = ({qrcode}) => {
    return(
        <React.Fragment>
            <tr className="text-center">
                <td>{qrcode.nom}</td>
                <td>{qrcode.description}</td>
                <td><img className="qrcodesize" src={"data:image/png;base64,"+qrcode.qrCode.image} alt={"qrcode :"+qrcode.id}/></td>
                <td><TelechargerPDF liste={[qrcode.qrCode.image]} nom={qrcode.nom}/></td>
            </tr>
        </React.Fragment>
    )
}
export default QRCodeLieu