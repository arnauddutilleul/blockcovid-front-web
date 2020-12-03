import React,{useState} from 'react'
import qrService from '../services/QRServices'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [listeQRCode,setListQRCode] = useState([])

    const getAllQRLieu = () => {
        qrService.getAllQRLieu()
        .then(liste => setListQRCode(liste))
        .catch(error=>{
            console.log("Unable to load data",error)
        })
    }
    const exposeValue = {
        listeQRCode,
        getAllQRLieu,
        setListQRCode
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