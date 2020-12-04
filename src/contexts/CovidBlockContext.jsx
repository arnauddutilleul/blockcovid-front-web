import React,{useState} from 'react'
import qrService from '../services/CovidBlockServices'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [listeQRCode,setListQRCode] = useState([])
    const [token,setToken] = useState()
    
    function toutEnregistrer(data,type) {
        localStorage.setItem("nom",data.nom)
        localStorage.setItem("token",data.token)
        localStorage.setItem("type",type)
        setToken(data.token)
        console.log("token :"+token)
    }

    //recuperer les qrcodes appartenant à un etablissement
    const getAllQRLieu = () => {
        qrService.getAllQRLieu(localStorage.getItem("token"))
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
                toutEnregistrer(data,type)
            })
            .catch(error=>{
                console.log("erreur inscritpion ",error)
            })
        }
        else{
            return qrService.inscrireMedecin(inscription)
            .then(data=>{
                toutEnregistrer(data,type)
            })
            .catch(error=>{
                console.log("erreur inscritpion ",error)
            })
        }
    }
    //se connecter
    const seConnecter = (connexion,type) => {
        if(type === "etablissement"){
            return qrService.seConnecterEtablissement(connexion)
            .then(data => {
                toutEnregistrer(data,type)
            })
            .catch(error=>{
                console.log("erreur connexion ",error)
            })
        }
        else{
            return qrService.seConnecterMedecin(connexion)
            .then(data => {
                toutEnregistrer(data,type)
            })
            .catch(error=>{
                console.log("erreur connexion ",error)
            })
        }
       
    }

    //se deconnecter
    const seDeconnecter= () => {
        setListQRCode([])
        setToken()
        localStorage.removeItem("token")
        localStorage.removeItem("nom")
        localStorage.removeItem("type")

        return true
    }

    //creer un qrcode pour un lieu 
    const creerQRCodeLieu = (qrcode) => {
        var data = {
            token : localStorage.getItem("token"),
            data : qrcode
        }
        return qrService.creerQRCodeLieu(data)
        .then(getAllQRLieu())
        .catch(error=>{
            console.log("erreur pour créer un nouveau QRCODE ",error)
        })
    }

    //Creer un qrcode pour un malade
    const creerQRCodeMedecin = (token) => {
        return qrService.creerQRCodeMedecin(token)
    }

    const exposeValue = {
        listeQRCode,
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