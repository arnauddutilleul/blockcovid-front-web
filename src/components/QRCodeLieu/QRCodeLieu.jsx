import React,{ useContext }from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import TelechargerPDF from '../Pdf/TelechargerPDF'

const QRCodeLieu = ({qrcode}) => {
    const {supprimerQRCodeLieu} = useContext(CovidBlockContext)
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