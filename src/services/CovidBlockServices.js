import axios from 'axios'

//const URI = "http://localhost:8080"
const URI = "https://api-blockcovid.herokuapp.com"
//const URI = process.argv[2]

//requete pour recuperer la liste des QR codes des differents lieux pour l'etablissement connecté
const getAllQRLieu = (token) => {
    const data = {token : token}
    const request = axios.post(URI+'/etablissement/QrCodes',data)
    return request
    .then(response=>{return response})
    .catch(error => {
        if(error.response){
            console.log(error.response)
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

//requete pour creer un QR code lieu
const creerQRCodeLieu = (data) => {
    const request = axios.post(URI+'/etablissement/creerQrCode',data)
    return request 
    .then(response=>{return response})
    .catch(error => {
        if(error.response){
            error.response.message  = "Erreur lors de la création de votre QRCODE"
            return error.response
        }
    })
}

//requete pour creer un ou plusieurs QR codes pour les medecins
const creerQRCodeMedecin = (data) => {
    const request = axios.post(URI+'/medecin/creerQrCode',data)
    return request
    .then(response=>{return response})
    .catch(error => {
        if(error.response){
            error.response.message  = "Erreur lors de la création de votre QRCODE"
            return error.response
        }
        return null
    })
}

//requete permettant de se connecter 
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

//requete permettant de s'inscrire
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