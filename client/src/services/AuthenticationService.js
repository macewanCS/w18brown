// ** hits the endpoints. **
import Api from '@/services/Api' 
// this file exports this object that has a login method.
export default {
    async login (logInfo) { // this login is on the frontend
        return Api().post('login', logInfo) // this login is on the backend
    },
    async checkAuth(){
        let test = Api().post("checkAuth");
        test.then(function() {
            return true
        }, function() {
            return false
        });
    }
}