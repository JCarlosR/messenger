require('./bootstrap');

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store'

Vue.use(BootstrapVue);

Vue.component('contact-form-component', 
    require('./components/ContactFormComponent.vue')
);
Vue.component('profile-form-component', 
    require('./components/ProfileFormComponent.vue')
);
Vue.component('status-component', 
    require('./components/StatusComponent.vue')
);
Vue.component('messenger-component', 
    require('./components/MessengerComponent.vue')
);
Vue.component('message-conversation-component', 
	require('./components/MessageConversationComponent.vue')
);
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
    store,
    methods: {
    	logout() {
    		document.getElementById('logout-form').submit();
    	}
    }
});
