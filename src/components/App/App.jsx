import React from 'react'
import  {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Login from '../Connexion/Connexion'
import Inscription from '../Inscription/Inscription'
import Gestion from '../Gestion/Gestion'
import Header from '../Header/Header'

const App = () => {
    return(
        <Router>
            <Header/>
            <Switch>
                <Route path="/gestion">
                    <Gestion/>
                </Route>
                <Route path="/connexion">
                    <Login/>
                </Route>
                <Route path="/inscription">
                    <Inscription/>
                </Route>
                <Route path="/">
                    <h1>Bonjour</h1>
                </Route>
            </Switch>
        </Router>
    )
}
export default App