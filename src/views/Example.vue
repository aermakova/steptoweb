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
    import ExampleDetails from '../components/Examples/ExampleDetails'
    export default {
        components: {
            ExampleDetails
        },
        props: ['id'],
        computed: {
            example() {
                const id = this.id;
                return this.$store.getters.getExampleId(id);
            }
        }
    }
</script>

<style>

</style>