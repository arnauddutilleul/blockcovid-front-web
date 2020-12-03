import React,{useState} from 'react'
import qrService from '../services/CovidBlockServices'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [listeQRCode,setListQRCode] = useState([])
    const [email_utilisateur,setEmailUtilisateur]  = useState("")
    const [type,setType] = useState("")
    const [token,setToken] = useState("")
    
    //recuperer les qrcodes appartenant à un etablissement
    const getAllQRLieu = () => {
        qrService.getAllQRLieu(token)
        .then(liste => setListQRCode(liste))
        .catch(error=>{
            console.log("Unable to load data",error)
        })
    }


    //s'inscrire 
    const sInscrire = (inscription) => {
        qrService.sInscrire(inscription)
        .then(data=>{
            setEmailUtilisateur(data.email)
            setToken(data.token)
            setType(data.type)
        })
        .catch(error=>{
            console.log("erreur inscritpion ",error)
        })
    }
    //se connecter
    const seConnecter = (connexion) => {
        qrService.seConnecter(connexion)
        .then(data => {
            setEmailUtilisateur(data.email)
            setToken(data.token)
            setType(data.type)
        })
        .catch(error=>{
            console.log("erreur connexion ",error)
        })
    }

    //se deconnecter
    const seDeconnecter= () => {
        setEmailUtilisateur()
        setListQRCode()
        setType()
        setToken()
    }

    //creer un qrcode pour un lieu 
    const creerQRCodeLieu = (qrcode) => {
        qrService.creerQRCodeLieu(token,qrcode)
        .then(getAllQRLieu())
        .catch(error=>{
            console.log("erreur pour créer un nouveau QRCODE ",error)
        })
    }


    const exposeValue = {
        listeQRCode,
        type,
        token,
        email_utilisateur,
        getAllQRLieu,
        setListQRCode,
        seConnecter,
        sInscrire,
        seDeconnecter,
        creerQRCodeLieu
    }

    return(
        <Context.Provider value={exposeValue}>
            {props.children}
        </Context.Provider>
    )
}
export {
    Context,
    ProviderWrapper
}
export default Context