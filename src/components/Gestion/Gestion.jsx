import React from 'react'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Etablissement from '../Etablissement/Etablissement'
import Medecin from '../Medecin/Medecin'
import CovidBlockContext from '../../contexts/CovidBlockContext'


const Gestion = () => {   
    const {seDeconnecter} = useContext(CovidBlockContext) 
    if(!localStorage.getItem("token")){// inverser tant que pas poss de connexion
        return(<Redirect to='/connexion'/>)
       
    }
    else if(localStorage.getItem("type") === "etablissement"){
        return(
            <Etablissement/>
        )
    }
    else if(localStorage.getItem("type") === "medecin"){
        return(
            <Medecin/>
        )
    }
    else {
        seDeconnecter()
        return (
            <Redirect to='/connexion'/>
        )
    }
    
}
export default Gestion