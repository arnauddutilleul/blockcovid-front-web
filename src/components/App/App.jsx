import React from 'react'
import  {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Login from '../Connexion/Connexion'
import Inscription from '../Inscription/Inscription'
import Gestion from '../Gestion/Gestion'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const App = () => {
    return(
        <Router>
            <Header/>
            <Switch>
                <Route path="/connexion">
                    <Login/>
                </Route>
                <Route path="/inscription">
                    <Inscription/>
                </Route>
                <Route path="/">
                    <Gestion />
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}
export default App