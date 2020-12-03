import axios from 'axios'



const getAllQRLieu = () => {
    const request = axios.get('/qrcode')
    return request.then(response=>response.data)
}

export default {getAllQRLieu}