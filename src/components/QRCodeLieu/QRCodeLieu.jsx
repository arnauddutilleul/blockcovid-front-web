import React,{ useContext }from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const QRCodeLieu = ({qrcode}) => {
    const {supprimerQRCodeLieu} = useContext(CovidBlockContext)
    const handlerSupprimer = () => {
        supprimerQRCodeLieu(qrcode.id)        
    }
    return(
        <React.Fragment>
            <tr>
                <td>{qrcode.nom}</td>
                <td>{qrcode.descrption}</td>
                <td><img class="qrcodesize" src={qrcode.img} alt={"qrcode :"+qrcode.id}/></td>
                <td>lien de téléchargement pdf</td>
                <td><button class="btn btn-red" onClick={handlerSupprimer}>Supprimer</button></td>
            </tr>
        </React.Fragment>
    )
}
export default QRCodeLieu