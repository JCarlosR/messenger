<template>
	<b-container fluid style="height: calc(100vh - 56px);">
	    <b-row no-gutters>
	        <b-col cols="4">
                <b-form class="my-3 mx-2">
                    <b-form-input class="text-center"
                        type="text"
                        v-model="querySearch"
                        placeholder="Buscar contacto ...">
                    </b-form-input>
                </b-form>

	            <contact-list-component 
	            	@conversationSelected="changeActiveConversation($event)"
	            	:conversations="conversationsFiltered">
	            	
	            </contact-list-component>
	        </b-col>
	        <b-col cols="8">
	            <active-conversation-component
	            	v-if="selectedConversation"
	            	:contact-id="selectedConversation.contact_id"
	            	:contact-name="selectedConversation.contact_name"
	            	:messages="messages"
	            	@messageCreated="addMessage($event)">
	            	
	            </active-conversation-component>
	        </b-col>
	    </b-row>
	</b-container>
</template>

<script>
	export default {
		props: {
			userId: Number
		},
        data() {
            return {
            	selectedConversation: null,
            	messages: [],
            	conversations: [],
                querySearch: ''
            };
        },
        mounted() {
        	this.getConversations();

        	Echo.private(`users.${this.userId}`)
		    .listen('MessageSent', (data) => {
		    	const message = data.message;
        		message.written_by_me = false;        
	    		this.addMessage(message);
		    });

            Echo.join('messenger')
            .here((users) => {
                users.forEach(user => this.changeStatus(user, true));
            })
            .joining(
                user => this.changeStatus(user, true)
            )
            .leaving(
                user => this.changeStatus(user, false)  
            );
        },
        methods: {
            changeActiveConversation(conversation) {
            	this.selectedConversation = conversation;
            	this.getMessages();
            },
            getMessages() {
                axios.get(`/api/messages?contact_id=${this.selectedConversation.contact_id}`)
                .then((response) => {
                    // console.log(response.data);
                    this.messages = response.data;
                });
            },
            addMessage(message) {
            	const conversation = this.conversations.find((conversation) => {
            		return conversation.contact_id == message.from_id || 
            			conversation.contact_id == message.to_id;
            	});

            	const author = this.userId === message.from_id ? 'Tú' : conversation.contact_name;
            	
            	conversation.last_message = `${author}: ${message.content}`;
            	conversation.last_time = message.created_at;

            	if (this.selectedConversation.contact_id == message.from_id
            		|| this.selectedConversation.contact_id == message.to_id)
        			this.messages.push(message);
            },
            getConversations() {
                axios.get('/api/conversations')
                .then((response) => {
                    this.conversations = response.data;
                });
            },
            changeStatus(user, status) {
                const index = this.conversations.findIndex((conversation) => {
                    return conversation.contact_id == user.id;
                });
                if (index >= 0)
                    this.$set(this.conversations[index], 'online', status);
            }
        },
        computed: {
            conversationsFiltered() {
                return this.conversations.filter(
                    (conversation) => 
                        conversation.contact_name
                            .toLowerCase()
                            .includes(this.querySearch.toLowerCase())
                );
            }
        }
    }
</script>