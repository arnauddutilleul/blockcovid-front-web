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
        
    }

    //recuperer les qrcodes appartenant à un etablissement
    const getAllQRLieu = () => {
        return qrService.getAllQRLieu(localStorage.getItem("token"))
        .then(response => {return response})

    }
    //s'inscrire 
    const sInscrire = (inscription,type) => {
        return qrService.inscrireEtablissement(inscription,type)
        .then(response=>{
            if(response.status === 200){
                toutEnregistrer(response.data,type)
            }
            return response
        })
    }
    //se connecter
    const seConnecter = (connexion,type) => {
        return qrService.seConnecter(connexion,type)
        .then(response => {
            if(response.status === 200){
                toutEnregistrer(response.data,type)   
            }
            return response
        })
    }

    //se deconnecter
    const seDeconnecter= () => {
        setListQRCode([])
        localStorage.removeItem("token")
        localStorage.removeItem("nom")
        localStorage.removeItem("type")
        setToken()
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