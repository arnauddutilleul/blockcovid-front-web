import React from 'react'
import  {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom"
import Login from '../Connexion/Connexion'
import Inscription from '../Inscription/Inscription'
import Gestion from '../Gestion/Gestion'
import Header from '../Header/Header'
import Deconnexion from '../Deconnexion/Deconnexion'
import Accueil from '../Accueil/Accueil'

const App = () => {
    return(
        <Router>
            <Header Link={Link}/>
            <Switch>
                <Route path="/gestion">
                    <Gestion />
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
                <Route path="/">
                    <Accueil/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App