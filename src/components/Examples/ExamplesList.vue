<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex md6 xs6 lg6>
                <v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
            </v-flex>
            <v-flex md6 xs6 lg6>
                <v-select label="Технология" :items="technologies" v-model="technology" multiple></v-select>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex md6 xs6 lg4 v-for="(example) in filteredExamples" :key="example.id">
                <examples-item :example="example"></examples-item>
            </v-flex>
<!--            <v-flex md6 xs6 lg4 v-for="(example) in examples" :key="example.id">-->
<!--                <examples-item :example="example"></examples-item>-->
<!--            </v-flex>-->
        </v-layout>
    </v-container>
</template>

<script>
    // @ is an alias to /src
    import ExamplesItem from "./ExamplesItem";

    export default {
        name: 'examples-list',
        components: {
            ExamplesItem
        },
        data() {
            return{
                searchTerm: null,
                technology: [],
                technologies: ['css', 'html', 'js'],
            }
        },
        computed: {
            examples(){
                return this.$store.getters.getExamples
            },
            filteredExamples(){
                let examples = this.examples;
                if(this.searchTerm){
                    examples = examples.filter(b =>
                        b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0 ||
                        b.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0)
                }
                if(this.technology.length){
                    examples = examples.filter(b =>
                        this.technology.filter(val => b.technology.indexOf(val) !== -1).length > 0)
                }
                return examples
            }
        },
    }
</script>
<style lang="scss">
    .flex{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .item{
        width: 30.6%;
        margin: 15px;
        @media (max-width: 1263px) {
            width: 46.4%;
        }
        @media (max-width: 864px) {
            width: 100%;
        }
    }
    .v-rating{
        .accent--text{
            color: rgba(0,0,0,.54)!important;
            caret-color: rgba(0,0,0,.54)!important;
        }
    }
    .span{
        margin-right: 5px;
    }
    .tags-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        list-style: none;
        padding: 0 0 0 4px;
        margin: 0;
        &__item{
            margin: 3px;
            padding: 0;
            a{
                color: #fff;
                &:hover{
                    text-decoration: underline;
                }
            }
            &:before{
                content: '#';
                display: inline-block;
            }
        }
    }
</style>