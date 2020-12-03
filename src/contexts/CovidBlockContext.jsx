import React,{useState} from 'react'
import qrService from '../services/CovidBlockServices'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [listeQRCode,setListQRCode] = useState([])
    const [email_utilisateur,setEmailUtilisateur]  = useState("")
    const [type,setType] = useState("")
    const [token,setToken] = useState("")
    const getAllQRLieu = () => {
        qrService.getAllQRLieu()
        .then(liste => setListQRCode(liste))
        .catch(error=>{
            console.log("Unable to load data",error)
        })
    }

    const seConnecter = (type,email,mdp) => {
        qrService.seConnecter(type,email,mdp)
        .then(data => {
            setEmailUtilisateur(data.email)
            setToken(data.token)
            setType(data.type)
        })
    }
    const exposeValue = {
        listeQRCode,
        type,
        token,
        email_utilisateur,
        getAllQRLieu,
        setListQRCode,
        seConnecter
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