import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'
import Etablissement from '../Etablissement/Etablissement'
import Medecin from '../Medecin/Medecin'


const Gestion = () => {
    const {token,type} = useContext(CovidBlockContext)
    
    if(!localStorage.getItem("token")){// inverser tant que pas poss de connexion
        return(<Redirect to='/'/>)
       
    }
    else if(localStorage.getItem("type") === "etablissement"){
        return(
            <Etablissement/>
        )
    }
    else{
        return(
            <Medecin/>
        )
    }
    
}
export default Gestion