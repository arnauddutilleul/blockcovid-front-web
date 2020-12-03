import axios from 'axios'


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
const sInscrire = (inscription) => {
    const request = axios.post(URI+'/inscription',inscription)
    return request.then(response => response.data)
}

export default {getAllQRLieu,creerQRCodeLieu,seConnecter,sInscrire}