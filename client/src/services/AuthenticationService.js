// ** hits the endpoints. **

import Api from '@/services/Api' 

// this file exports this object that has a login method.
export default {
    async login (logInfo) {
        return Api().post('login', logInfo)
    }
}

/* 
export default {
    async createEmployee (info) {
        return Api().post('createEmployee', info)
    }
} */

// calling the above function in another file:
/* AuthenticationService.login({
    account: 'some text',
    password: 'some text'
}) */