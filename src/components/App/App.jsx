import React from 'react'
import  {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Login from '../Connexion/Connexion'
import Inscription from '../Inscription/Inscription'
import Gestion from '../Gestion/Gestion'
import Header from '../Header/Header'
import Accueil from '../Accueil/Accueil'
import Footer from '../Footer/Footer'

const App = () => {
    return(
        <Router>
            <Header/>
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
                <Route path="/">
                    <Accueil/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}
export default App