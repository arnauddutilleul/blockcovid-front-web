import React from 'react'
import { useContext } from 'react'
import QRCodeLieu from '../QRCodeLieu/QRCodeLieu'
import CovidBlockContext from '../../contexts/CovidBlockContext'


const ListeQRCodeLieu = () => {
    const{listeQRCodesLieu} = useContext(CovidBlockContext)
    var notif = "Vous n'avez pas de QR Codes."
    //const [listeQRCode,setListeQRCode] = useState([])
    if(listeQRCodesLieu.length !== 0){
        console.log(listeQRCodesLieu)
        notif = ""
    }
    
    return(
        <div className="card-body">
            <h5 className="title mb-3 mt-4">Liste de vos QR Code</h5>
                <p>{notif}</p>
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
                        {console.log(listeQRCodesLieu)}                     
                        {listeQRCodesLieu.length!==0?listeQRCodesLieu.map((qr)=>(
                                <QRCodeLieu  key={qr.id} qrcode={qr}/>
                            )):""}
                    </tbody>
                </table>
        </div>
    )
}
export default ListeQRCodeLieu