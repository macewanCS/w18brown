import Api from '@/services/Api';

export default {
    async getSettings () {
        return Api().get("getSettings");
    },
    async setSettings (currentSettings) {
        Api().post("setSettings", currentSettings);
    }
}