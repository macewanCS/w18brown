// ** File used to set up connectors to backend. **

import axios from 'axios'
import store from "../store/store"

export default () => {
    console.log("in api.js")
    return axios.create({
        baseURL: 'http://localhost:8081/', // points to our backend
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}