<template>
    <div>
        <b-form class="my-3 mx-2">
            <b-form-input class="text-center"
                type="text"
                placeholder="Buscar contacto ...">
            </b-form-input>
        </b-form>

        <b-list-group>
            <contact-component variant="dark">                    
            </contact-component>
            <contact-component variant="">                    
            </contact-component>
            <contact-component variant="secondary">                    
            </contact-component>
        </b-list-group>   
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>