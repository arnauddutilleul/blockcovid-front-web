import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import CreerQRLieu from '../CreerQRLieu/CreerQRLieu'
import ListeQRCodeLieu from '../ListeQRCode/ListeQRCodeLieu'

const Gestion = () => {
    const {token} = useContext(CovidBlockContext)
    
    if(token){// inverser tant que pas poss de connexion
        return(<Redirect to='/'/>)
       
    }
    else{
        return(
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4 mt-1">Gestion</h4>
                        <CreerQRLieu />
                        <ListeQRCodeLieu />
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Gestion