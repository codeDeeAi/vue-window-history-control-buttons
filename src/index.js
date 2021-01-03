import controls from './controls.vue';

export default {
    install(Vue, options) {
        Vue.component('window-control-buttons', controls);
    }
};