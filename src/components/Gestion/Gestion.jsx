import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Gestion = ({Link}) => {
    const {token,getAllQRLieu,listeQRCode} = useContext(CovidBlockContext)
    useEffect(() =>{
        getAllQRLieu()
    })
    if(!token){// inverser tant que pas poss de connexion
        return(
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4 mt-1">Gestion</h4>
                    <a class="btn btn-primary" href="/creerqr" role="button"> Créer un nouveau QR Code</a>
                    <div>C'est ici qu'on pourra voir ses QR code et en créer.</div>
                    <ul>
                        {listeQRCode.map((qr)=>(
                            <li key={qr.id}>{qr.id}</li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
    else{
        return(<Redirect to='/'/>)
    }
    
}
export default Gestion