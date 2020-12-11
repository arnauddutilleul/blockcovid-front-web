import React, { useContext} from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import logo from '../../images/logo2.png'
import './Header.css'

const Header = () => {
    const {seDeconnecter} = useContext(CovidBlockContext)
    if(localStorage.getItem("token")){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><img alt="logo" src={logo} className="logoNav"/></a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <div className="nav-link">Connecté en tant que {localStorage.getItem("nom")}</div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/connexion" onClick={seDeconnecter}>Se déconnecter</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    else{
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><img alt="logo" src={logo} className="logoNav"/></a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link " href="/inscription">S'inscrire</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/connexion">Se connecter</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    
}
export default Header