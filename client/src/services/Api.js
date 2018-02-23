// ** File used to set up connectors to backend. **

import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081/' // points to our backend

    })
}