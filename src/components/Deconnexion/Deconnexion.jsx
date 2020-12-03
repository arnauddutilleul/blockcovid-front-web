import React from 'react'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const Deconnexion = () => {
    const {seDeconnecter} = useContext(CovidBlockContext)
    seDeconnecter()
    return(<Redirect to="/"/>)
}
export default Deconnexion