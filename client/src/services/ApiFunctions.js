import Api from '@/services/Api';

export default {
    async getSettings () {
        return Api().post('getSettings')
    },
    async createEmployee (info) {
        return Api().post('createEmployee', info)
    }
}