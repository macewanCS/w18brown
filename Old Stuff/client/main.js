import Vue from 'vue';
import App from '/app';
import Router from "./router"

Vue.directive('mdl', {
    bind: function () {
        componentHandler.upgradeElement(this.el);
    }
});

new Vue({
    el: '#app',
    router,
    template: '<app/>',
    components: {app}
})

