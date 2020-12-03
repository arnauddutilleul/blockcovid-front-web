import React from 'react'
import  {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom"
import Login from '../Login/Login'
import Gestion from '../Gestion/Gestion'

const App = () => {

    return(
        <Router>
            <div>
                <Link to="/">Se connecter </Link>
                <Link to="/gestion">Gestion</Link>
            </div>
            <Switch>
                <Route path="/gestion">
                    <Gestion/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App