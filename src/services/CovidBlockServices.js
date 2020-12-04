import axios from 'axios'

//const URI = "http://localhost:8080"
const URI = "https://api-blockcovid.herokuapp.com"


const getAllQRLieu = (token) => {
    const request = axios.get(URI+'/qrcodelieu/all',token)
    return request.then(response=>{
        if(response.status !== 200){
            return "Erreur pour récupérer les qrcodeslieu"
        }
        else {
            return response.data
        }
    })
}
const creerQRCodeLieu = (data) => {
    const request = axios.post(URI+'/creerqrlieu',data)
    return request.then(response=>{
        if(response.status !== 200){
            return "Erreur lors de la création du qrcodelieu"
        }
        else {
            return response.data
        }
    })
}
const creerQRCodeMedecin = (data) => {
    const request = axios.post(URI+'/creerqrmedecin',data)
    return request.then(response=>{
        if(response.status !== 200){
            return "Erreur lors de la création du qrcodemedecin"
        }
        else {
            return response.data
        }
    })
}
const seConnecterEtablissement = (data) => {
    const request = axios.post(URI+'/etablissement/login',data)
    return request.then(response => {
        if(response.status === 400){
            return "Mot de passe ou email invalide"
        }
        else{
            return response.data
        }
    })
}
const seConnecterMedecin = (data) => {
    const request = axios.post(URI+'/medecin/login',data)
    return request.then(response => {
        if(response.status === 400){
            return "Mot de passe ou email invalide"
        }
        else{
            return response.data
        }
    })
}
const inscrireEtablissement = (data) => {
    const request = axios.post(URI+'/etablissement/create',data)
    return request.then(response => {
        if(response.status === 400){
            return "email deja existant"
        }
        else{
            return response.data
        }
    })
}
const inscrireMedecin = (data) => {
    const request = axios.post(URI+'/medecin/create',data)
    return request.then(response => {
        if(response.status === 400){
            return "email deja existant"
        }
        else{
            return response.data
        }
    })
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