import React,{useState} from 'react'
import { useEffect } from 'react'
import CovidBlockService from '../services/CovidBlockServices'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [token,setToken] = useState()
    const [listeQRCodesLieu,setListeQRCodesLieu] = useState([])

    function toutEnregistrer(data,type) {
        localStorage.setItem("nom",data.nom)
        localStorage.setItem("token",data.token)
        localStorage.setItem("type",type)
        setToken(data.token)
        
    }
    useEffect(() => {
        if(localStorage.getItem("type") === "etablissement"){
            getAllQRLieu().then(liste => {
                if(listeQRCodesLieu.length !== liste.length){
                    setListeQRCodesLieu(liste)
                }
            })
        }
        
    })

    const modifierListeQRCodeLieu = (liste) => {
        const newList = listeQRCodesLieu.concat(liste)
        setListeQRCodesLieu(newList)
    }
    //recuperer les qrcodes appartenant à un etablissement
    const getAllQRLieu = () => {
        return CovidBlockService.getAllQRLieu(localStorage.getItem("token"))
        .then(response => {
            return response.data.qr
        })

    }
    //s'inscrire 
    const sInscrire = (inscription,type) => {
        return CovidBlockService.sInscrire(inscription,type)
        .then(response=>{
            if(response.status === 200){
                toutEnregistrer(response.data,type)
            }
            return response
        })
    }
    //se connecter
    const seConnecter = (connexion,type) => {
        return CovidBlockService.seConnecter(connexion,type)
        .then(response => {
            if(response.status === 200){
                toutEnregistrer(response.data,type)
            }
            return response
        })
    }

    //se deconnecter
    const seDeconnecter= () => {
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
            description : qrcode.description,
            nom : qrcode.nom
        }
        return CovidBlockService.creerQRCodeLieu(data)
        .then(getAllQRLieu())
    }
    
    //Supprime un QRcodeLieu avec son id
    const supprimerQRCodeLieu = (id) => {
        const data = {
            token : localStorage.getItem("token"),
            id : id
        }
        return CovidBlockService.supprimerQRCodeLieu(data)
        .then(getAllQRLieu())

    }
    //Creer nombre qrcode pour un malade
    const creerQRCodeMedecin = (nombre) => {
        const data = {
            token : localStorage.getItem("token"),
            nbQr : nombre
        }
        
        return CovidBlockService.creerQRCodeMedecin(data)
        .then(response => {
            return response.qr
        })
    }
    
    

    const exposeValue = {
        token,
        listeQRCodesLieu,
        getAllQRLieu,
        seConnecter,
        sInscrire,
        seDeconnecter,
        creerQRCodeLieu,
        supprimerQRCodeLieu,
        creerQRCodeMedecin,
        setListeQRCodesLieu,
        modifierListeQRCodeLieu

        
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