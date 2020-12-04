import React, { useContext} from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import logo from '../../images/logo198.png'
import './Header.css'

const Header = () => {
    const {token,email_utilisateur,seDeconnecter} = useContext(CovidBlockContext)
    const handlerDeconnecter = () =>{
        seDeconnecter()
    }
    if(token){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/"><img alt="logo" src={logo} class="logoNav"/></a>
                <div class="collapse navbar-collapse d-flex justify-content-start" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="/gestion">Tableau de bord</a>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item ">
                        <div className="nav-link">Connecté en tant que {email_utilisateur}</div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " onClick={handlerDeconnecter}>Se déconnecter</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
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