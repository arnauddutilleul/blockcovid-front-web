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
            <div>
                <nav class="navbar navbar-expand-lg navbar-black bg-dark">
                    <Link to="/" class="navbar-brand"><img  className="logoNav" alt="logo" src={logo}/></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav d-flex">
                        <li class="my-2 ml-auto p-2">
                            <h4><Link to="/connexion" class="nav-link badge badge-secondary">Se connecter</Link></h4>
                        </li>
                        <li class="my-2 ml-auto p-2">
                            <h4><Link to="/inscription" class="nav-link badge badge-secondary">S'inscrire</Link></h4>
                        </li>
                    </ul>
                    </div>
                
               
                </nav>
            </div>
        )
    }
    
}
export default Header