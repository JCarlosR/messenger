<template>
    <b-list-group-item :variant="variant">
        <b-row class="p-2" align-h="center">
            <b-col cols="12" md="3" class="text-center">
                <b-img rounded="circle" blank width="60" height="60" blank-color="#777" alt="img" class="m-1" />
            </b-col>
            <b-col cols="6" align-self="center" class="d-none d-md-block">
                <p class="mb-1">{{ conversation.contact_name }}</p>
                <p class="text-muted small mb-1">{{ conversation.last_message }}</p>
            </b-col>
            <b-col cols="3" class="d-none d-md-block">
                <p class="text-muted small">{{ conversation.last_time }}</p>
            </b-col>        
        </b-row>
    </b-list-group-item>
</template>

<script>
    export default {
        props: {
            variant: String,
            conversation: Object
        },
        data() {
            return {

            };
        },
        mounted() {
            
        }
    }
</script>
