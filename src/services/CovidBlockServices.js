import axios from 'axios'

//const URI = "http://localhost:8080"
const URI = "https://api-blockcovid.herokuapp.com"


const getAllQRLieu = (token) => {
    let data = { token : token}
    const request = axios.get(URI+'/qrcodelieu/all',data)
    return request
    .then(response=>{return response})
    .catch(error => {
        if(error.response){
            error.response.message  = "Erreur lors de la récurération de vos QRCODES"
            return error.response
        }
        error.response = {
            status : 400,
            message : "Erreur lors de la récurération de vos QRCODES"
         }
        return error.response
    })
}
const creerQRCodeLieu = (data) => {
    const request = axios.post(URI+'/creerqrlieu',data)
    return request 
    .then(response=>{return response})
    .catch(error => {
        if(error.response){
            error.response.message  = "Erreur lors de la création de votre QRCODES"
            return error.response
        }
    })
}
const creerQRCodeMedecin = (data) => {
    const request = axios.post(URI+'/creerqrmedecin',data)
    return request
    .then(response=>{return response.data})
    .catch(error => {
        if(error.response){
            error.response.message  = "Erreur lors de la création de votre QRCODES"
            return null
        }
        return null
    })
}
const seConnecter = (data,type) => {
    const request = axios.post(URI+'/'+type+'/login',data)
    return request
        .then(response => {return response})
        .catch(error => {
            if(error.response){
                error.response.message = "Mot de passe ou email invalide."
                return error.response
            }
        })
}
const sInscrire = (data,type) => {
    const request = axios.post(URI+'/'+type+'/create',data)
    return request
    .then(response => {return response})
    .catch(error => {
        if(error.response){
            error.response.message = "Email déjà existante"
            return error.response
        }
    })
}

const expose ={
    getAllQRLieu,
    creerQRCodeLieu,
    creerQRCodeMedecin,
    seConnecter,
    sInscrire,
};
export default expose