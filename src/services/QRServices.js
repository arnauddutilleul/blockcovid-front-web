import axios from 'axios'

const baseUrl = ''

const getAllQRLieu = () => {
    const request = axios.get(baseUrl)
    return request.then(response=>response.data)
}

export default {getAllQRLieu}