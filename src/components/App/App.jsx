import React from 'react'
import  {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom"
import Login from '../Connexion/Connexion'
import Inscription from '../Inscription/Inscription'
import Gestion from '../Gestion/Gestion'
import Header from '../Header/Header'
import Deconnexion from '../Deconnexion/Deconnexion'
import CreerQRLieu from '../CreerQRLieu/CreerQRLieu'

const App = () => {
    return(
        <Router>
            <Header Link={Link}/>
            <Switch>
                <Route path="/gestion">
                    <Gestion Link={Link}/>
                </Route>
                <Route path="/connexion">
                    <Login/>
                </Route>
                <Route path="/inscription">
                    <Inscription/>
                </Route>
                <Route path="/deconnexion">
                    <Deconnexion/>
                </Route>
                <Route path="/creerqr">
                    <CreerQRLieu/>
                </Route>
                <Route path="/">
                    <h1>Bonjour</h1>
                </Route>
            </Switch>
        </Router>
    )
}
export default App