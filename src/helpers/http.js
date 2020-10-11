import axios from 'axios'


const http =(token=false)=>{
    return axios.create({
        baseURL:'https://localhost:8080',
        headers: {
            'Authorization': token? `Bearer ${token}` : undefined
        }
    })
}

export default http