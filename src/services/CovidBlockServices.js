import axios from 'axios'

//const URI = "http://localhost:8080"
const URI = "https://api-blockcovid.herokuapp.com"


const getAllQRLieu = (token) => {
    const request = axios.get(URI+'/qrcodelieu/all',token)
    return request.then(response=>response.data)
}
const creerQRCodeLieu = (data) => {
    const request = axios.post(URI+'/creerqrlieu',data)
    return request.then(response=>response.data)
}
const creerQRCodeMedecin = (data) => {
    const request = axios.post(URI+'/creerqrmedecin',data)
    return request.then(response=>response.data)
}
const seConnecterEtablissement = (data) => {
    const request = axios.post(URI+'/etablissement/connexion',data)
    return request.then(response => response.data)
}
const seConnecterMedecin = (data) => {
    const request = axios.post(URI+'/medecin/connexion',data)
    return request.then(response => response.data)
}
const inscrireEtablissement = (data) => {
    const request = axios.post(URI+'/etablissement/create',data)
    return request.then(response => response.data)
}
const inscrireMedecin = (data) => {
    const request = axios.post(URI+'/medecin/create',data)
    return request.then(response => response.data)
}


export default {
    getAllQRLieu,
    creerQRCodeLieu,
    creerQRCodeMedecin,
    seConnecterEtablissement,
    seConnecterMedecin,
    inscrireEtablissement,
    inscrireMedecin
}