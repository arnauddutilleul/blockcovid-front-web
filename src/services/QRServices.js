import axios from 'axios'


const URI = "https://api-blockcovid.herokuapp.com/"
const getAllQRLieu = () => {
    const request = axios.get(URI+'/qrcode')
    return request.then(response=>response.data)
}

export default {getAllQRLieu}