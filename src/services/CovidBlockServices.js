import axios from 'axios'

//const URI = "http://localhost:8080"
const URI = "https://api-blockcovid.herokuapp.com"


const getAllQRLieu = (token) => {
    const request = axios.get(URI+'/qrcode',token)
    return request.then(response=>response.data)
}
const creerQRCodeLieu = (token,qrcode) => {
    const request = axios.post(URI+'/creerqrlieu',token,qrcode)
    return request.then(response=>response.data)
}
const seConnecter = (connexion) => {
    const request = axios.post(URI+'/connexion',connexion)
    return request.then(response => response.data)
}
const inscrireEtablissement = (data) => {
    const request = axios.post(URI+'/etablissement/create',data)
    return request.then(response => response.data)
}
const inscrireMedecin = (inscription) => {
    const request = axios.post(URI+'/medecin/create',inscription)
    return request.then(response => response.data)
}


export default {getAllQRLieu,creerQRCodeLieu,seConnecter,inscrireEtablissement,inscrireMedecin}