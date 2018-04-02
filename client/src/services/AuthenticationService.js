// ** hits the endpoints. **
import Api from '@/services/Api' 
// this file exports this object that has a login method.
export default {
    async login (logInfo) { // this login is on the frontend
        return Api().post('login', logInfo) // this login is on the backend
    },
    async checkAuth(){
        let authResult = Api().post("checkAuth");
        authResult.then(function() {
            //Goes down this path upon PromiseStatus: success of checkAuth
        }, function() {
            //Goes down this path upon PromiseStatus: failure of checkAuth.
            return false
        });
        return authResult;
    }
}