<template>
    <v-container grid-list-md v-if="example">
        <v-layout>
            <v-flex lg12>
                <example-details :example="example"></example-details>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ExampleDetails from '../components/ExampleDetails'
    export default {
        components: {
            ExampleDetails
        },
        props: {
            'id': {
                type: String,
                required: true
            }
        },
        computed: {
            example() {
                return this.$store.getters.getExamples.find(b => b.id === this.id);
            }
        }
    }
</script>

<style>

</style>