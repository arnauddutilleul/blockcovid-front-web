import React, { useContext } from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import logo from '../../images/logo198.png'
import './Header.css'

const Header = ({Link}) => {
    const {token,email_utilisateur} = useContext(CovidBlockContext)

    if(token){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" class="navbar-brand"><img  className="logoNav" alt="logo" src={logo}/></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    Connecté avec  {email_utilisateur+ " "} 
                    <Link to="/gestion">Gestion</Link>
                    <Link to="/deconnexion">Se déconnecter</Link>
                </nav>
                
            </div>
        )
    }
    else{
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/"><img alt="logo" src={logo} class="logoNav"/></a>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link" href="/connexion">Se connecter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/inscription">S'inscrire</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        )
    }
    
}
export default Header