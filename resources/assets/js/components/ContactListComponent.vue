<template>
    <b-list-group>
        <contact-component 
            v-for="conversation in conversations"
            :key="conversation.id"
            :conversation="conversation"
            @click.native="selectConversation(conversation)">                    
        </contact-component>
        <!--
        <contact-component variant="dark">                    
        </contact-component>
        <contact-component>                    
        </contact-component>
        <contact-component variant="secondary">                    
        </contact-component>
        -->
    </b-list-group>   
</template>

<script>
    export default {
        props: {
            conversations: Array
        },
        data() {
            return {
            };
        },
        mounted() {
        },
        methods: {
            selectConversation(conversation) {
                this.$emit('conversationSelected', conversation);
            }
        }
    }
</script>