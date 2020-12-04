import React,{useState} from 'react'
import qrService from '../services/CovidBlockServices'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [listeQRCode,setListQRCode] = useState([])
    const [email_utilisateur,setEmailUtilisateur]  = useState()
    const [type,setType] = useState()
    const [token,setToken] = useState()
    
    //recuperer les qrcodes appartenant à un etablissement
    const getAllQRLieu = () => {
        qrService.getAllQRLieu(token)
        .then(liste => setListQRCode(liste))
        .catch(error=>{
            console.log("Unable to load data",error)
        })
    }


    //s'inscrire 
    const sInscrire = (inscription,type) => {
        if(type === "etablissement"){
            return qrService.inscrireEtablissement(inscription)
            .then(data=>{
            setEmailUtilisateur(data.email)
            setToken(data.token)
            setType(type)
            console.log("token: "+token)
            console.log("type: "+type)
            console.log("email :"+email_utilisateur)

            })
            .catch(error=>{
                console.log("erreur inscritpion ",error)
            })
        }
        else{
            return qrService.inscrireMedecin(inscription)
            .then(data=>{
                setEmailUtilisateur(data.email)
                setToken(data.token)
                setType(type)
                console.log("token: "+token)
                console.log("type: "+type)
                console.log("email :"+email_utilisateur)

            })
            .catch(error=>{
                console.log("erreur inscritpion ",error)
            })
        }
    }
    //se connecter
    const seConnecter = (connexion,type) => {
        if(type === "etablissement"){
            qrService.seConnecterEtablissement(connexion)
            .then(data => {
                setEmailUtilisateur(data.email)
                setToken(data.token)
                setType(type)
                console.log("token: "+token)
                console.log("type: "+type)
                console.log("email :"+email_utilisateur)

            })
            .catch(error=>{
                console.log("erreur connexion ",error)
            })
        }
        else{
            qrService.seConnecterMedecin(connexion)
            .then(data => {
                setEmailUtilisateur(data.email)
                setToken(data.token)
                setType(type)
                console.log("token: "+token)
                console.log("type: "+type)
                console.log("email :"+email_utilisateur)

            })
            .catch(error=>{
                console.log("erreur connexion ",error)
            })
        }
       
    }

    //se deconnecter
    const seDeconnecter= () => {
        setEmailUtilisateur()
        setListQRCode()
        setType()
        setToken()
        return true
    }

    //creer un qrcode pour un lieu 
    const creerQRCodeLieu = (qrcode) => {
        var data = {
            token : token,
            data : qrcode
        }
        qrService.creerQRCodeLieu(data)
        .then(getAllQRLieu())
        .catch(error=>{
            console.log("erreur pour créer un nouveau QRCODE ",error)
        })
    }

    //Creer un qrcode pour un malade
    const creerQRCodeMedecin = (token) => {
        qrService.creerQRCodeMedecin(token)
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
        creerQRCodeLieu,
        creerQRCodeMedecin
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