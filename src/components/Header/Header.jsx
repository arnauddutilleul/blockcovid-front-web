import React, { useContext } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Header = () => {
    const {token,email_utilisateur} = useContext(CovidBlockContext)

    if(token){
        return(
            <div>
                <span>Connecté avec {email_utilisateur}</span>
                <Link to="/gestion">Gestion</Link>
            </div>
        )
    }
    else{
        return(
            <div>
                <Link to="/connexion">Se connecter</Link>
                <Link to="/inscription">S'inscrire</Link>
            </div>
        )
    }
    
}
export default Header