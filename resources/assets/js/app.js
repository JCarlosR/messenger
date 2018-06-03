require('./bootstrap');

window.Vue = require('vue');


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


Vue.component('contact-component', 
	require('./components/ContactComponent.vue')
);
Vue.component('contact-list-component', 
	require('./components/ContactListComponent.vue')
);
Vue.component('active-conversation-component', 
	require('./components/ActiveConversationComponent.vue')
);

const app = new Vue({
    el: '#app',
    methods: {
    	logout() {
    		document.getElementById('logout-form').submit();
    	}
    }
});
