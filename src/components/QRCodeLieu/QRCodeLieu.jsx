import React,{ useContext }from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import TelechargerPDF from '../Pdf/TelechargerPDF'

const QRCodeLieu = ({qrcode}) => {
    const {supprimerQRCodeLieu} = useContext(CovidBlockContext)
    const handlerSupprimer = () => {
        supprimerQRCodeLieu(qrcode.id) 
        console.log("suis rentré")       
    }
    return(
        <React.Fragment>
            <tr>
                <td>{qrcode.nom}</td>
                <td>{qrcode.description}</td>
                <td><img className="qrcodesize" src={"data:image/png;base64,"+qrcode.qrCode.image} alt={"qrcode :"+qrcode.id}/></td>
                <td><TelechargerPDF liste={[qrcode.qrCode.image]}/></td>
                <td><button className="btn btn-red" onClick={handlerSupprimer}>Supprimer</button></td>
            </tr>
        </React.Fragment>
    )
}
export default QRCodeLieu