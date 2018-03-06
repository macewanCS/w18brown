import Api from '@/services/Api';

export default {
    async getSettings () {
        return Api().post('getSettings')
    }
}