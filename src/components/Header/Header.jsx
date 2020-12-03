import React, { useContext } from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Header = ({Link}) => {
    const {token,email_utilisateur} = useContext(CovidBlockContext)

    if(token){
        return(
            <div>
                Connecté avec  {email_utilisateur} 
                <Link to="/deconnexion">Se déconnecter</Link>
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